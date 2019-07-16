var arr = []

/*  
 * Collects data from external JSON file and stores it in an array
 * 
 */
function buildData() {
    //alert("buildData");
        d3.json("data.json", function (error, data) {
            if (error)
                throw error;
            $.each(data, function (i) {

                arr.push(makePerson(data[i].name, data[i].jobTitle, data[i].Company, data[i].Experience, data[i].School, data[i].Major, data[i].Email, data[i].LinkedInUrl));
            });
        });
}

/*
 *  Makes a Person object 
 * 
 */
function makePerson(name, jobtitle, company, exp, school, major, email, url){
    return{
        name,
        jobtitle,
        exp,
        company,
        school,
        major,
        email,
        url
    }
}

/*
 * Adds text to the HTML page
 * 
 */ 
function addText() {
    //alert("addText");
    for (i = 0; i < arr.length; i++) {
        $(".template-hook").append("<div class='card'></div>");
    }
    $('.card').each(function (index) {
        $(this).attr("id", index);        
    });
    $('.card').append("<div class='left-image'></div>");
    //adds the left half of the card
    $('.left-image').each(function (index) {
        $(this).append("<img></img>");
        $(this).append("<h1></h1>");
        $(this).append("<h2></h2>");
    });
    addImages();
    addNames();
    addTitles();
    //adds the right half of the card
    $('.card').append("<div class='right-text'></div>");
    $('.right-text').each(function (index) {
        $(this).append("<p></p>");
    });

    addRightValues();
}

// Adds Names to each of the cards
// Current function does not routinely start at 0 and has been commented out
function addNames() {
    //alert("addNames");
    $('h1').each(function (index) {
        //$(this).append(arr[index].name);
    });
}

// Add Job titles to each card
// oddly enough, this one actually works
function addTitles() {
    //alert("addTitles");
    $('h2').each(function (index) {
        $(this).append(arr[index].jobtitle);
    });
}

// Adds images to each card
function addImages() {
    let imgarr = ['benjamin-parker-OhKElOkQ3RE-unsplash-cropped.jpg', 'MV5BMjAzNjYwNzkxMl5BMl5BanBnXkFtZTgwMTU1OTk4MDE@._V1_UY317_CR16,0,214,317_AL_.jpg', 'fdsdb.jpg', 'vsd.jpg'];
    $('img').each(function (index) {
        $(this).attr("src", "images/" + imgarr[index]);
        $(this).attr("width", "225px");
        $(this).attr("height", "225px");
    });
}

// adds all of the text on the right side of the card
function addRightValues() {
    //alert("addRightValues");
    $('p').each(function (index) {
        $(this).append("<b>Company:</b> " + arr[index].company + " <br/> <b>Experience: </b> " + arr[index].exp + " <br /><b>School: </b>" + arr[index].school + "<br/><b>Major:</b> " + arr[index].major + " <br /><b>Email:</b> "+ arr[index].email + "<br /><b>LinkedIn URL: </b><a><img src='thYWNRJ9SD.jpg' alt='linkedin widget logo' width='30' height='30' />" + arr[index].url + "</a>");
    });
    $('a').each(function (index) {
        $(this).attr("href", arr[index].url);
    });
}


// Adds HTML to the page from a JSON file
$(document).ready(function () {
    buildData();
    setTimeout(addText, 3000);
});