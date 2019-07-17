// Confirms page loads before executing js
$(document).ready(function() {

// Adds personal details from json file for custom cards
const person = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
    "pic": "img/unsplash-headshot.jpg",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "pic": "img/unsplash-headshot.jpg",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "pic": "img/unsplash-headshot.jpg",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "pic": "img/unsplash-headshot.jpg",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
  }
 ];

// maps personal details from array above
 let personHTML = person.map(function(el) {
// creates div for card and personal details
   let details = `<div class="id">
       <img src="{el.pic}" class="id__image" alt="headshot">
       <div class="id__caption">
         <h1 class="id__name">{el.name}</h1>
         <p class="id__title">{el.jobTitle}</p>
       </div>
       <div class="details">
         <p class="details__label">Company: <span class="details__info">${el.Company}</span></p>
         <p class="details__label">Experience: <span class="details__info">${el.Experience}</span></p>
         <p class="details__label">School: <span class="details__info">${el.School}</span></p>
         <p class="details__label">Major: <span class="details__info">${el.Major}</span></p>
         <p class="details__label">Email: <span class="details__info">${el.Email}</span></p>
         <img src="img/linkedin.svg" class="linkedin" alt="linkedin icon">
             <span class="details__info">${el.LinkedInUrl}</span>
       </div>
     </div>`;
 });

 $(".id").append(details);

});
