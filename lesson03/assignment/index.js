// Ready event runs code immediately
$(document).ready(function() {

  // All other JS begins here
  const peopleList = [
    {
     "name": "Steve Smith",
     "jobTitle": "Project Manage",
     "Company": "Front End Dev Co",
     "Experience": "3 years",
     "School": "UW",
     "Major": "Marketing",
     "Email": "steve@fedc.com",
     "LinkedInUrl": "steve.linkedinprofile.com"
    },
    {
     "name": "Aaron Katz",
     "jobTitle": "Full Stack Developer",
     "Company": "Web Sites and More",
     "Experience": "5 years",
     "School": "SU",
     "Major": "Computer Science",
     "Email": "aaronNotMyEmail@uw.com",
     "LinkedInUrl": "aaron.linkedinprofile.com"
    },
    {
     "name": "Kyle Hendricks",
     "jobTitle": "Starting Pitcher",
     "Company": "Chicago Cubs",
     "Experience": "12 years",
     "School": "USC",
     "Major": "Pitching",
     "Email": "kyleH@cubs.com",
     "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
     "name": "Michael Jordan",
     "jobTitle": "Point Guard",
     "Company": "Chicago Buls",
     "Experience": "20 years",
     "School": "UNC",
     "Major": "Trash Talking",
     "Email": "mJordan@bulls.com",
     "LinkedInUrl": "mJordan.linkedinprofile.com"
    }
  ];

  let bioCardHTML = peopleList.map(function(el){
    return bioCard = `
    <div class="bio-card">
      <div class="bio-card__main">
        <img class="bio-card__img" src="./img/unsplash-headshot.jpg" alt="employee headshot">
        <h3 class="bio-card__name">${el.name}</h3>
        <h4 class="bio-card__title">${el.jobTitle}</h4>
      </div>
      <div class="bio-card__details">
        <p><span>Company: </span>${el.Company}</p>
        <p><span>Experience: </span>${el.Experience}</p>
        <p><span>School: </span>${el.School}</p>
        <p><span>Major: </span>${el.Major}</p>
        <p><span>Email: </span>${el.Email}</p>
        <p><img src="./img/linkedin.svg" alt="linkedin logo">${el.LinkedInUrl}</p>
      </div>
    </div>
    `;
  });

  $(".template-hook").append(bioCardHTML);
});




// const bioCard = {
//   name: 'Steve Smith',
//   jobTitle: 'Project Manager',
//   company: 'Front End Dev Co',
//   experience: '3 years',
//   school: 'UW',
//   major: 'Marketing',
//   email: 'steve@fedc.com',
//   linkedInUrl: 'steve.linkedinprofile.com',
//
//   greeting(){
//     console.log(`hello I am ${this.name}`);
//   }
// };
//
// console.log(Object.keys(bioCard));
//
// for (const apple in bioCard) {
//   console.log(`${bioCard[apple]}`);
// }
//
// console.log(Object.values(bioCard));
//
// console.log(Object.entries(bioCard));


// console.log(bioCard.jobTitle);
// bioCard.greeting();


// constructors
// function bioCard(name, jobTitle){
//   this.name = name;
//   this.jobTitle = jobTitle;
// }
//
// const steve = new bioCard('Steve Smith', 'Project Manager');
// console.log(steve.jobTitle);
