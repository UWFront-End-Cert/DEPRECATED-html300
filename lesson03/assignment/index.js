// $( document ).ready(function() {

//     const profiles =
//     [{
//         "name": "Steve Smith",
//         "jobTitle": "Project Manage",
//         "Company": "Front End Dev Co",
//         "Experience": "3 years",
//         "School": "UW",
//         "Major": "Marketing",
//         "Email": "steve@fedc.com",
//         "LinkedInUrl": "steve.linkedinprofile.com"
//       }, {
//         "name": "Aaron Katz",
//         "jobTitle": "Full Stack Developer",
//         "Company": "Web Sites and More",
//         "Experience": "5 years",
//         "School": "SU",
//         "Major": "Computer Science",
//         "Email": "aaronNotMyEmail@uw.com",
//         "LinkedInUrl": "aaron.linkedinprofile.com"
//       }, {
//         "name": "Kyle Hendricks",
//         "jobTitle": "Starting Pitcher",
//         "Company": "Chicago Cubs",
//         "Experience": "12 years",
//         "School": "USC",
//         "Major": "Pitching",
//         "Email": "kyleH@cubs.com",
//         "LinkedInUrl": "kyle.linkedinprofile.com"
//       },
//       {
//         "name": "Michael Jordan",
//         "jobTitle": "Point Guard",
//         "Company": "Chicago Buls",
//         "Experience": "20 years",
//         "School": "UNC",
//         "Major": "Trash Talking",
//         "Email": "mJordan@bulls.com",
//         "LinkedInUrl": "mJordan.linkedinprofile.com"
//       }
//       ]

// });

// let profile = profiles.map(function(el) {
//     return card =  `
//     <div class="container">
//     <div>
//     <img class="profile-pic" src = "img/unsplash-headshot.jpt">
//     <h1>${el.name}</h1>
    
//     </div>


//     </div>
//     `

// });



$(function () {

    const profiles =  [
        {
        "image": "",
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
      ]
    
    
    
    $(document).ready(function() {
        document.getElementById("headline").innerHTML = `
        <h1>Assignment 01 | Week 02</h1>
        <p>By | Mikyas Ayele</p>
        `
    });
    
    let profilesHTML = profiles.map(function(el) {
      let users = `
      <section id="user-info">
          <div id="box-2">
            <ul id="order-list">
              <li><span>Company:</span>${el.name}</li>
              <li><span>Company:</span>${el.jobTtitle}</li>
              <li><span>Company:</span>${el.Company}</li>
              <li><span>Company:</span>${el.Experience}</li>
              <li><span>Company:</span>${el.School}</li>
              <li><span>Company:</span>${el.Major}</li>
              <li><span>Company:</span>${el.Email}</li>
              <li><span>Company:</span>${el.LinkedInUrl}</li>
            </ul
        </section>`
    });
    
    $("user-info").append(profilesHTML);
    
    }
    )
