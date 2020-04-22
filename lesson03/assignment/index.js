//JSON data copied from package.json
const persons = [
  {
    "headshot": "img/unsplash-headshot.jpg",
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
    "headshot": "img/katz.jpg",
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
    "headshot": "img/hendricks.jpg",
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
    "headshot": "img/jordan.jpg",
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
 //use of object/array methods & components
$( document ).ready(function() {
  console.log("test")
    const personHTML = persons.map(function(el) {
      //component copied from lesson 2, data applied and templated through to html
      let person = `
        <main class="main-container">
          <div class="picture-container">
            <img class="img-circle" src=${el.headshot}>
            <h3>${el.name}</h3>
            <p>${el.jobTitle}</p>
          </div>
          <div class="contact-container">
            <p><span class="category">Company:</span> ${el.company}</p>
            <p><span class="category">Experience:</span> ${el.experience}</p>
            <p><span class="category">School:</span> ${el.school}</p>
            <p><span class="category">Major:</span> ${el.major}</p>
            <p><span class="category">Email:</span> <a href class="links">${el.email}</href></p>
            <p><img src="img/linkedin.svg" alt="linked in icon"><a href class="links linked-in">  ${el.linkedInUrl}</href></p>
            <p><span class="category">Code Languages:</span> ${el.codeLanguages}</p>
          </div>
        </main>
      `;
      return(person);
    });

    $(".person").append(personHTML);
  });
