//jQuery doc ready
$(function() {

//objects containing key-value pairs to generate information for additional employee cards
const cards = [
  //Steve Smith's first employee card is hard coded in index.html
  {
    "img": "./img/unsplash-headshot.jpg",
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
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
    "img": './cheyenne.jpg',
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
    "img": './cheyenne.jpg',
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
    "img": './cheyenne.jpg',
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Bulls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordan.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
];

//
//Loop over the objects using .map() to create a new array of key-value pairs for each iteration
let cardsHTML = cards.map(function(el) {
  //Return to create HTML elements populated with local JSON data
  return `<section>
    <figure class="img">
      <img src=${el.img} alt="Headshot">
      <h1 class="name">${el.name}</h1>
      <figcaption>
        <h2 class="card_jobTitle"><span class="italic">${el.jobTitle}</span></h2>
      </figcaption>
    </figure>
  </section>

  <section class="profile">
    <ul>
      <li class="card_company">
        <p><span class="bold">Company:</span> ${el.company}</p>
      </li>
      <li class="card_experience">
        <p><span class="bold">Experience:</span> 3 years</p>
      </li>
      <li class="card_school">
        <p><span class="bold">School:</span> UW</p>
      </li>
      <li class="card_major">
        <p><span class="bold">Major:</span> Marketing</p>
      </li>
      <li class="card_email">
        <p><span class="bold">Email:</span> steve@fedc.com</p>
      </li>
      <li class="card_linkedInUrl"><i class="fab fa-linkedin"></i> <span class="linked-in">steve.linkedinprofile.com</span></li>
      <li class="card_codeLanguages">
        <p><span class="bold">Code Languages:</span> HTML, CSS, JavaScript, .NET, C#</p>
      </li>
    </ul>
  </section>
  `;
});

card = document.createElement('card');
$(".card-container").append(cardsHTML);


});
