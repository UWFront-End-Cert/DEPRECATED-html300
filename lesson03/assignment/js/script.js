const data = [
  {
    "name": "Steve Smith",
    "img": "unsplash-headshot.jpg",
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
    "img": "lloyd-dirks-R1oSj2m-7Ks-unsplash.jpg",
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
    "name": "Grace Hopper",
    "img": "512px-Grace_Hopper.jpg",
    "jobTitle": "Badass Woman in Tech",
    "company": "UNIVAC, COBOL",
    "experience": "28 years",
    "school": "Yale",
    "major": "Mathematics and Physics",
    "email": "ghopper@brilliant.com",
    "linkedInUrl": "ghopper.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "img": "MichaelJordan.jpg",
    "jobTitle": "Point Guard",
    "company": "Chicago Bulls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
]

data.map((person) => {
  const card =
    `<div class="card">
      <div class="title">
       <img src=../img/${person.img}
                    alt="Headshot of ${person.name}"> 
        <h2 class="person__name"><strong>${person.name}</strong></h2>
        <p class="person__jobTitle"><em>${person.jobTitle}</em></p>
      </div>
      <div class="personal-info">
        <p class="person__company"><strong>Company: </strong>${person.company}</p>
        <p class="person__experience"><strong>Experience: </strong>${person.experience}</p>
        <p class="person__school"><strong>School: </strong>${person.school}</p>
        <p class="person__majore"><strong>Major: </strong>${person.major}</p>
        <p class="person__email"><strong>Email: </strong>${person.email}</p>
        <p class="person__linkedInUrl"><img src="../img/linkedin.svg" alt="linkedin icon"> ${person.linkedInUrl}</p>
      </div>
    </div>`;

  const hook = $('.hook');
  hook.append(card);
});
