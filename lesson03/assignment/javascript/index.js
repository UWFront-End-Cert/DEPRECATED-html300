console.log("Hello");

$(function(){
  const personDetails = [{
       "name": "Steve Smith",
       "jobTitle": "Project Manager",
       "Company": "Front End Dev Co",
       "Experience": "3 years",
       "School": "UW",
       "Major": "Marketing",
       "Email": "steve@fedc.com",
       "LinkedInUrl": "steve.linkedinprofile.com",
       "image": "./img/steve_smith.jpg"
     }, {
       "name": "Aaron Katz",
       "jobTitle": "Full Stack Developer",
       "Company": "Web Sites and More",
       "Experience": "5 years",
       "School": "SU",
       "Major": "Computer Science",
       "Email": "aaronNotMyEmail@uw.com",
       "LinkedInUrl": "aaron.linkedinprofile.com",
       "image": "./img/aaron_katz.jpg"
     }, {
       "name": "Kyle Hendricks",
       "jobTitle": "Starting Pitcher",
       "Company": "Chicago Cubs",
       "Experience": "12 years",
       "School": "USC",
       "Major": "Pitching",
       "Email": "kyleH@cubs.com",
       "LinkedInUrl": "kyle.linkedinprofile.com",
       "image": "./img/kyle_hendricks.jpg"
     },
     {
       "name": "Michael Jordan",
       "jobTitle": "Point Guard",
       "Company": "Chicago Buls",
       "Experience": "20 years",
       "School": "UNC",
       "Major": "Trash Talking",
       "Email": "mJordan@bulls.com",
       "LinkedInUrl": "mJordan.linkedinprofile.com",
       "image": "./img/michael_jordan.jpg"
     }
   ]  // Object array Decalaration

   let infoDisplay = personDetails.map(function(info){
      return display = `
                  <article class = "container">
                    <div class = "pic-side">
                        <img src="${info.image}" alt="Employee Image">
                        <h2>${info.name}</h2>
                        <h3>${info.jobTitle}</h3>
                    </div>
                    <div class = "details-side">
                        <p class = "content-fonts"><span class = "label-fonts">Company:</span> ${info.Company}</p>
                        <p class = "content-fonts"><span class = "label-fonts">Experince:</span> ${info.Experience}</p>
                        <p class = "content-fonts"><span class = "label-fonts">School:</span> ${info.School}</p>
                        <p class = "content-fonts"><span class = "label-fonts">Major:</span> ${info.Major}</p>
                        <p class = "content-fonts"><span class = "label-fonts">Email:</span> ${info.Email}</p>
                        <img src="./img/linkedin.svg" alt="">
                        <p class = "content-fonts"> <a href="${info.LinkedInUrl}">${info.LinkedInUrl}</a></p>
                    </div>
                  </article>`
   }) // end of map function
   $(".template-hook").append(infoDisplay);
}) // end of function
