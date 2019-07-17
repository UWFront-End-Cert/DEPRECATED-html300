// Confirms page loads before executing js
$(document).ready(function()

// Adds personal details from json file for custom cards
let person = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
    "profile-pic": "img/unsplash-headshot.jpg";
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
    "profile-pic": "img/unsplash-headshot.jpg";
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
    "profile-pic": "img/unsplash-headshot.jpg";
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
    "pic": "img/unsplash-headshot.jpg";
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
  }
 ];

// maps personal details from array above
 let personHTML = person.map(function(el)) {
// creates div for card and personal details
   let details =
   '<div class="main">
     <div class="headshot">
       <img src="{el.pic}" class="main__image" alt="headshot">
       <div class="headshot__caption">
         <h1>{el.name}</h1>
         <p class="headshot__title">{el.jobTitle}</p>
       </div>
     </div>

   </div>
   ';
 });

 (".person").append(personHTML);

 });
