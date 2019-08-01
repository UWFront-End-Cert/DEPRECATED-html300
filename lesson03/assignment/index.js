//setting some employees parameters 
const employees = [
{
  "picture": "img/Smith-Stephen.jpg",
  "name": "Steve Smith",
  "jobTitle": "Project Manage",
  "Company": "Front End Dev Co",
  "Experience": "3 years",
  "School": "UW",
  "Major": "Marketing",
  "Email": "steve@fedc.com",
  "LinkedInUrl": "steve.linkedinprofile.com",
   "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
        ]
}, 
{
  "picture": "img/aaron-katz.jpg",
  "name": "Aaron Katz",
  "jobTitle": "Full Stack Developer",
  "Company": "Web Sites and More",
  "Experience": "5 years",
  "School": "SU",
  "Major": "Computer Science",
  "Email": "aaronNotMyEmail@uw.com",
  "LinkedInUrl": "aaron.linkedinprofile.com",
   "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ] 
}, 
{
  "picture": "img/Kyle Hendricks.jpg",
  "name": "Kyle Hendricks",
  "jobTitle": "Starting Pitcher",
  "Company": "Chicago Cubs",
  "Experience": "12 years",
  "School": "USC",
  "Major": "Pitching",
  "Email": "kyleH@cubs.com",
  "LinkedInUrl": "kyle.linkedinprofile.com",
   "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
},
{
  "picture": "img/michael-jordan.jpg",
  "name": "Michael Jordan",
  "jobTitle": "Point Guard",
  "Company": "Chicago Buls",
  "Experience": "20 years",
  "School": "UNC",
  "Major": "Trash Talking",
  "Email": "mJordan@bulls.com",
  "LinkedInUrl": "mJordas.linkedinprofile.com",
   "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
},
];
//making employee card template with a picture and the rest of parameters.
const employeesHTML = employees.map(function(el){
  let employee = `
  <div class="employee_card">
        <h1>Employee Card</h1>
      <div class="box">
        <div class="box_card">
          <div class="box_card_picture">
            <div class="employee_picture"><img src="${el.picture}" alt="${el.name}"></div>
            <div class="box_card_picture_text">
              <h2 class="employee_name">${el.name}</h2>
              <span class="employee_jobTitle">${el.jobTitle}</span>
            </div>
          </div>
          <!-- /.box_card_picture -->
          <div class="box_card_text">
            <ul>
              <li class="employee_Company"><span class="box_card_text_bold">Company: </span>${el.Company}</li>
              <li class="employee_Experience"><span class="box_card_text_bold">Experience: </span>${el.Experience}</li>
              <li class="employee_School"><span class="box_card_text_bold">School: </span>${el.School}</li>
              <li class="employee_Major"><span class="box_card_text_bold">Major: </span>${el.Major}</li>
              <li class="employee_Email"><span class="box_card_text_bold">Email: </span>${el.Email}</li>
              <li class="employee_codeLanguages"><span class="box_card_text_bold">Code Languages: </span>${el.codeLanguages.join(', ')}</li>
              <li class="employee_LinedInUrl"><img src="img/linkedin.svg" alt="linkedIn logo">${el.LinkedInUrl}</li>
            </ul>
          </div>
        </div>
  `;
  //something that can make you suffer for 2-5 hours to figure out why your code isn't working
  return employee;
});
// $(".template-hook").append(employeesHTML);
jQuery(document).ready(function(){
  jQuery('.template-hook').append(employeesHTML);
});