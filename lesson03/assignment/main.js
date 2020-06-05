//jQuery doc ready

$(function() {

//Constructor function used because there are 3+ objects. NEED TO SWITCH TO ES6+
  // function Card(company, experience, school, major, email, linkedInUrl, codeLanguages) {
  //   this.company = company;
  //   this.experience = experience;
  //   this. school = school;
  //   this.major = major;
  //   this.email = email;
  //   this.linkedInUrl = linkedInUrl;
  //   this.codeLanguages = codeLanguages;
  // }



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

//i want to append this whole SECTION to appear after the first card i hard coded. It is no longer throwing errors, but it is also not showing any events. WHY. Do i need to use create element? Am I  missing $?
//i want to loop over the objects with a method, use map() to apply a template string, would i use JSON.stringify? do i need a for loop or do i need to use for...in since it is specific for objects? The example on slide 19 is not showing an array of objects, just one object.
let cardsHTML = cards.map(function(el) {
  return `<section class="card-container">
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

//REPLACE ABOVE CODE WITH THIS CODE
  //<section class="profile">
  //   <ul>
  //     <li class="card_company">
  //       <p><span class="bold">Company:</span> Front End Dev Co</p>
  //     </li>
  //     <li class="card_experience">
  //       <p><span class="bold">Experience:</span> 3 years</p>
  //     </li>
  //     <li class="card_school">
  //       <p><span class="bold">School:</span> UW</p>
  //     </li>
  //     <li class="card_major">
  //       <p><span class="bold">Major:</span> Marketing</p>
  //     </li>
  //     <li class="card_email">
  //       <p><span class="bold">Email:</span> steve@fedc.com</p>
  //     </li>
  //     <li class="card_linkedInUrl"><i class="fab fa-linkedin"></i> <span class="linked-in">steve.linkedinprofile.com</span></li>
  //     <li class="card_codeLanguages">
  //       <p><span class="bold">Code Languages:</span> HTML, CSS, JavaScript, .NET, C#</p>
  //     </li>
  //   </ul>
  // </section>
    });
card = document.createElement('card');
$(".card-container").append(cardsHTML);


});
