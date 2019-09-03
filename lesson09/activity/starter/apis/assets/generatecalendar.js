const fs = require('fs')
const XMLHttpRequest = require('xhr2')
const fetch = require('node-fetch');
let startDate = new Date()
let endDate = new Date()
//const console = {}

function getEndDate(year, callback, callback2) {
  'use strict'
  //console.log('in getendDate')
  // create request
  const request = new XMLHttpRequest()
  // request data from API (API link automatically generated)
  request.open(
    'GET',
    'https://holidayapi.com/v1/holidays?key=7490a586-b733-4fea-9d7b-353ef43418bf&country=US&year=' +
      year +
      '&pretty',
    true
  )
  request.onload = function() {
    const data = JSON.parse(this.response)
    // If we receive a valid code
    if (request.status >= 200 && request.status < 400) {
      data.holidays.forEach((holiday) => {
        if (holiday.name === 'Labor Day') {
          //console.log(holiday.date)
          // callback to buildCalendar()
          if (typeof callback === 'function') {
            callback(year, holiday.date, callback2)
          }
        }
      })
    } else {
      //console.log('error')
    }
  }
  // send request (?)
  request.send()
}

function getStartDate(year) {
  // ISO format, 06=July
  const dateStr = new Date(parseInt(year), parseInt(6), parseInt(5))
  return dateStr
}
// convert the string from API to a Date
function getEndDateStr(year, datestrobj) {
  //console.log(typeof datestrobj)
  const dateStr = new Date(
    parseInt(year),
    parseInt(8),
    parseInt(datestrobj.slice(8))
  )
  return dateStr
}
// get Start and End dates of ferry
function getSEDates(year, dateStr, callback) {
  //console.log(typeof dateStr)
  //console.log('in getDates')
  startDate = getStartDate(year)
  //console.log('startDate made: ' + startDate)
  endDate = getEndDateStr(year, dateStr)
  //console.log('endDate made: ' + endDate)
  //console.log('ooga booga')
  // filemaker(startDate, endDate);
  if (typeof callback === 'function') {
    //console.log('in callback for getSEDates')
    callback()
  }
}
// Function that gets called in page

module.exports = function calledFunction() {
    //console.log('in calledFunction')
    getEndDate(2018, getSEDates, makeReservationFiles)
      }

// make empty JSON files t0 store reservations Change out for SQL later
function makeReservationFiles() {
  //console.log('in make reservation files')
  // const startDay = startDate.getDay()
  // const endDay = 1
  const datesList = getDatesArr(startDate, endDate)
  //console.log('datesList gotten')
  // Gets current year. If there is no directory fo rthe current year, it goes ahead and makes one
  fs.access(getDepartureFileName(endDate), (err) => {
    //console.log('folders being made')
    if (err) {
      datesList.forEach(function(item, index) {
        addEmptyArrival(item)
        addEmptyDeparture(item)
        getLowTides(item, removeLowTides)
      })
    }
  })
}
// return current year to create new reservation files
function getCurrentYear() {
  return new Date().getFullYear()
}
// by enesn
function getDatesArr(start, end) {
    const arr = []
    for (let dt = new Date(start); dt <= new Date(end); dt = addDay(dt)) {
      arr.push(new Date(dt))
    }
    return arr
  }
  
function addDay(date) {
    var result = new Date(date);
    result.setDate(result.getDate() + 1);
    return result;
  }
// Receive tidechart for each date passed in. Gets high and low tides from NOAA tide API, marks tides around -3.0 feet as too low for ferry runs
// Also adds tide charts to data storage
function getLowTides(date, callback) {
    // pull from NOAA tide chart
    const url = getTideChartAPIURL(date)
    fetch(url) 
    .then((resp) => {
        return resp.json()
      })
    .then(content => {
      var newContent = JSON.stringify(content)
      fs.writeFileSync(
        getTideChartFileName(date),
        newContent
      )
      if(typeof callback === 'function'){
        callback(date)
      }
    })
    .catch(function(error){
        console.log(error)
    })
  }

function removeLowTides(date) {
  //console.log('in remove low tides')
  const lowTideArr = []
  // pull up tide chart to get low tide times
  var tideContents = JSON.parse(fs.readFileSync(getTideChartFileName(date), "utf8"))
  tideContents.data.forEach(interval =>{
        // if the tide is lower than -2.0 feet
        if (Number(interval.v) <= -2.0) {
          // add times to array
          lowTideArr.push(interval.t.slice(11))
        }
  })
  //console.log(lowTideArr)
  // pull up arriving and departing files
  // write the changes back to the file
  
  fs.writeFileSync(getArrivalFileName(date), JSON.stringify(changeResJSON(JSON.parse(fs.readFileSync(getArrivalFileName(date)), "utf8"), lowTideArr)))
  // pull up arriving and departing files
  // write the changes back to the file
  fs.writeFileSync(getDepartureFileName(date), JSON.stringify(changeResJSON(JSON.parse(fs.readFileSync(getDepartureFileName(date)), "utf8"), lowTideArr)))
}

function changeResJSON(source, lowTideArr){
    source.reservations.forEach((arrival) => {
        let usedDate = new Date()
        usedDate.setHours(arrival.time.slice(0, 2))
        usedDate.setMinutes(arrival.time.slice(3))
        lowTideArr.forEach((localMin) => {
          let ltDate = new Date()
          ltDate.setHours(localMin.slice(0, 2))
          ltDate.setMinutes(localMin.slice(3))
          // if the time of low tide is within 15 minutes on either side of the ferry run
          if (Math.abs(usedDate - ltDate) <= 900000) {
            arrival.open = 'false'
          }
        })
      })
      return source
}
// for each day in the range of usable dates,
// add an empty reservation file to the appropriate folder,
// Each file will be an empty template defined in
function addEmptyArrival(date) {
    
  var fileContents = "";
  //console.log('in addEmptyArrival' + date)
  // if we need a Sunday file
  if (date.getDay() === 0) {
    //console.log('adding sunday')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/sun_arr_template.json', "utf8")
  }
  // if we need a Friday/Saturday file
  if (date.getDay() === 5 || date.getDay() === 6) {
    //console.log('adding fri/sat')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/wkend_arr_template.json', "utf8")
  }
  // if we need a weekday file
  else {
    //console.log('adding weekday')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/wkday_arr_template.json', "utf8")
  }
  fs.writeFileSync(
    getArrivalFileName(date),
    fileContents,
  (err) => {
    if (err) throw err
  }
)
}
// for each day in the range of usable dates,
// add an empty reservation file to the appropriate folder,
// Each file will be an empty template defined in
function addEmptyDeparture(date) {
  //console.log('in addEmptyDeparture' + date)
  // if we need a Sunday file
  var fileContents = "";
  if (date.getDay() === 0) {
    //console.log('adding sunday')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/sun_dep_template.json', "utf8")
  }
  // if we need a Friday/Saturday file
  if (date.getDay() === 5 || date.getDay() === 6) {
    //console.log('adding fri/sat')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/wkend_dep_template.json', "utf8")
  }
  // if we need a weekday file
  else {
    //console.log('adding weekday')
    fileContents = fs.readFileSync(__dirname + '/reservations/templates/wkday_dep_template.json', "utf8")
  }
  fs.writeFileSync(
    getDepartureFileName(date),
    fileContents,
  (err) => {
    if (err) throw err
  }
)
}

function getArrivalFileName(date){
    return __dirname + '/reservations/' +
    date.getFullYear() +
    '/arriving/' +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0") +
    '.json'
}

function getDepartureFileName(date){
    return __dirname + '/reservations/' +
    date.getFullYear() +
    '/departing/' +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0") +
    '.json'
}

function getTideChartFileName(date){
    return __dirname + '/tidecharts/' +
    date.getFullYear() +
    '/' +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0") +
    '.json'
}

function getTideChartAPIURL(date){
    return 'https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=' +
    date.getFullYear() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
  date.getDate().toString().padStart(2, "0") +
    '%20' + '00:00&end_date=' +
    date.getFullYear() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
  date.getDate().toString().padStart(2, "0") +
   '%20' +  '23:59&station=9447130&product=water_level&datum=MSL&units=english&time_zone=lst_ldt&application=universityofwashington&format=json'
}