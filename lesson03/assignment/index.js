// Pulling data
const Content = [
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
Content.map(function(el) {
  let Content = `<div class="Content">
         <ul>
           <li class="Content_name">${el.name}</li>
           <li class="jobTitle">${el.jopTitle}</li>
           <li class="Content_company">${el.company}</li>
           <li class="Content_experience">${el.experience}</li>
           <li class="Content_school">${el.school}</li>
           <li class="Content_major">${el.major}</li>
           <li class="Content_email">${el.email}</li>
           <li class="Content_linkedInUrl">${el.linkedInUrl}</li>
           <li class="Content_codeLanguages">${el.codeLanguages}</li>
         </ul>
       </div>
  `;
});

// using Jquery to append code to html
$(".Content").append(ContentHTML);
