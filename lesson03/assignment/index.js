const cards = [
  {
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


$( document ).ready(function() {

  const cardHTML = cards.map(function(el) {

    let card = `
    <div class="main-container">
        <div class="left-container">
            <img src="img/unsplash-headshot-round.png" class="profile-img" alt="linked-in profile pic">
            <h1>${el.name}</h1>
            <p>${el.jobTitle}</p>
        </div>
        <div class="right-container">
          <div class="card-content">
            <p>Company: ${el.company}</p>
            <p>Experience: ${el.experience}</p>
            <p>Education: ${el.school}</p>
            <p>Major: ${el.major}</p>
            <p><img src="img/linkedin.svg"/>Email: ${el.email}</p>
            <p>Code Languages: ${el.codeLanguages}</p>
          </div>
        </div>
      </div>

    `;

    //add a return statement at the end of the MAP function
    return(card);

  });

  // Use jQuery's append () to add the generated code to the Card section
  $(".card").append(cardHTML);


});
