// Here is our JSON Data
let data = [
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
  },
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
]
// Initializing variables before loop
let card;
let dude;

// On Document = ready...
$(function() {
  // For each object in the JSON data...
  for (person in data) {
    // Making a temp variable to make the String interpolation slightly neater
    dude = data[person];
    // HTML Template
    card = `
      <div class="card">
        <div class="photoSide">
          <img src='https://raw.githubusercontent.com/DScheid/html300/master/lesson02/assignment/img/unsplash-headshot.jpg' class="image-cropper">
          <div class="name-title">
            <h4>${dude.name}</h4>
            <p>${dude.jobTitle}</p>
          </div>
        </div>
        <div class="content">
          <ul>
            <li><strong>Company:</strong> ${dude.company}</li>
            <li><strong>Experience:</strong> ${dude.experience}</li>
            <li><strong>School:</strong> ${dude.school}</li>
            <li><strong>Major:</strong> ${dude.major}</li>
            <li><strong>Email:</strong> ${dude.email}</li>
            <div class="linkedin">
                <img src="/img/linkedin.svg" alt="linked-in logo" id="lilogo">
                <li>${dude.linkedInUrl}</li>
            </div>
          </ul>
        </div>
      </div>
      `
      console.log(dude.name)
      // Adding each card or profile to the main class
      $(".main").append(card)
  }
});
