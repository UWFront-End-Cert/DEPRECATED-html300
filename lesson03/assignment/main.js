//jQuery doc ready

$(function() {

//Constructor function used because there are 3+ objects. NEED TO SWITCH TO ES6+
  function Card(company, experience, school, major, email, linkedInUrl, codeLanguages) {
    this.company = company;
    this.experience = experience;
    this. school = school;
    this.major = major;
    this.email = email;
    this.linkedInUrl = linkedInUrl;
    this.codeLanguages = codeLanguages;
  }

const cards = [
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


//i want to append this whole SECTION to appear after the first card i hard coded. i want to loop over the objects with a method, use map() to apply a template string, would i use JSON.stringify? do i need a for loop or do i need to use for...in since it is specific for objects? The example on slide 19 is not showing an array of objects, just one object.
const cardsHTML = cards.map(function(el) {
  let card = `<section class="card-container">
    <ul>
      <li class="card_company">${el.company}</li>
      <li class="card_experience">${el.experience}</li>
      <li class="card_school">${el.school}</li>
      <li class="card_major">${el.major}</li>
      <li class="card_email">${el.email}</li>
      <li class="card_linkedInUrl">${el.linkedInUrl}</li>
      <li class="card_codeLanguages">${el.codeLanguages}</li>
    </ul>
  </section>
  `;
    });
$(".s").append(card);

});
