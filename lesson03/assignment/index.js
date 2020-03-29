const data = [
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
];

let cardsHTML = data.map(function(el) {
    let card = `
        <article>
            <!--article specifies the width of the card, sets the primary background color-->
            <div class="prim">
                <!--prim div serves to hold the other two divs correctly, leaving a border and arranging
                differently depenending on the device the user is using-->
                <div class="pic">
                    <!--Creates the white part of the card with ${el.name}'s picture, name, and position-->
                    <img src="./img/unsplash-headshot.jpg" alt="Picture of ${el.name}">
                    <h1>${el.name}</h1>
                    <p><i>${el.jobTitle}</i></p>
                </div>
                <div class="info">
                    <!--Creates the gray part of the card with ${el.name}'s other information-->
                    <p><span>Company:</span> ${el.company}</p>
                    <p><span>Experience:</span> ${el.experience}</p>
                    <p><span>School:</span> ${el.school}</p>
                    <p><span>Major:</span> ${el.major}</p>    
                    <p><span>Email:</span> ${el.email}</p>
                    <p>
                        <img src="./img/linkedin.svg" alt="Linkedin logo">
                            ${el.linkedInUrl}
                    </p>
                </div>
            </div>
        </article>
    `;
});

console.log(cardsHTML);
$(".template-hook").append(cardsHTML);