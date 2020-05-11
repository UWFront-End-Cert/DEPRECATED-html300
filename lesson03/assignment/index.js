// Pulling data
const content = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }

];

// using map array method to generate articles for each object in my returned Data
$(document).ready(function() {

  const contentHTML = content.map(function(el) {
      let content = `
        <div class="main-container">
          <div class="box-1">
            <h1>${el.name}</h1>
            <p>${el.jobTitle}</p>
          </div>
          <div class="box-2">
             <ul>
               <li class="content_company">${el.company}</li>
               <li class="content_experience">${el.experience}</li>
               <li class="content_school">${el.school}</li>
               <li class="content_major">${el.major}</li>
               <li class="content_email">${el.email}</li>
               <li class="content_linkedInUrl">${el.linkedInUrl}</li>
               <li class="content_codeLanguages">${el.codeLanguages}</li>
             </ul>
           </div>
        </div>
      `;
      // adding a return statement
      return (content);
    });

    // using Jquery to append code to html
    $(".content").append(contentHTML);

  });
