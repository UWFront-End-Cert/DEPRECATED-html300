// Ready event runs code immediately
$(document).ready(function() {

  // All other JS begins here

  // Create const for JSON data
  const peopleList = [
    {
     "name": "Steve Smith",
     "jobTitle": "Project Manage",
     "Company": "Front End Dev Co",
     "Experience": "3 years",
     "School": "UW",
     "Major": "Marketing",
     "Email": "steve@fedc.com",
     "LinkedInUrl": "steve.linkedinprofile.com"
    },
    {
     "name": "Aaron Katz",
     "jobTitle": "Full Stack Developer",
     "Company": "Web Sites and More",
     "Experience": "5 years",
     "School": "SU",
     "Major": "Computer Science",
     "Email": "aaronNotMyEmail@uw.com",
     "LinkedInUrl": "aaron.linkedinprofile.com"
    },
    {
     "name": "Kyle Hendricks",
     "jobTitle": "Starting Pitcher",
     "Company": "Chicago Cubs",
     "Experience": "12 years",
     "School": "USC",
     "Major": "Pitching",
     "Email": "kyleH@cubs.com",
     "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
     "name": "Michael Jordan",
     "jobTitle": "Point Guard",
     "Company": "Chicago Buls",
     "Experience": "20 years",
     "School": "UNC",
     "Major": "Trash Talking",
     "Email": "mJordan@bulls.com",
     "LinkedInUrl": "mJordan.linkedinprofile.com"
    }
  ];

  // Create template for bio card that uses JSON data
  let bioCardHTML = peopleList.map(function(el){
    return bioCard = `
    <div class="bio-card">
      <div class="bio-card__main">
        <img class="bio-card__img" src="./img/unsplash-headshot.jpg" alt="employee headshot">
        <h3 class="bio-card__name">${el.name}</h3>
        <h4 class="bio-card__title">${el.jobTitle}</h4>
      </div>
      <div class="bio-card__details">
        <p><span>Company: </span>${el.Company}</p>
        <p><span>Experience: </span>${el.Experience}</p>
        <p><span>School: </span>${el.School}</p>
        <p><span>Major: </span>${el.Major}</p>
        <p><span>Email: </span>${el.Email}</p>
        <p><img src="./img/linkedin.svg" alt="linkedin logo">${el.LinkedInUrl}</p>
      </div>
    </div>
    `;
  });

  // Output templated data to main page
  $(".template-hook").append(bioCardHTML);
});
