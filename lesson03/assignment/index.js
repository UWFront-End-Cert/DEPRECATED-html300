//Start jquery
$(document).ready(function() {

// Create object from provided Data
const bios = [
  { name: "Steve Smith",
    jobTitle: "Project Manager",
    company: "Front End Dev Co",
    experience: "3 years",
    school: "UW",
    major: "Marketing",
    email: "steve@fedc.com",
    linkedInUrl: "steve.linkedinprofile.com"  },
  { name: "Aaron Katz",
    jobTitle: "Full Stack Developer",
    company: "Web Sites and More",
    experience: "5 years",
    school: "SU",
    major: "Computer Science",
    email: "aaronNotMyemail@uw.com",
    linkedInUrl: "aaron.linkedinprofile.com" },
  { name: "Kyle Hendricks",
    jobTitle: "Starting Pitcher",
    company: "Chicago Cubs",
    experience: "12 years",
    school: "USC",
    major: "Pitching",
    email: "kyleH@cubs.com",
    linkedInUrl: "kyle.linkedinprofile.com" },
  { name: "Michael Jordan",
    jobTitle: "Point Guard",
    company: "Chicago Buls",
    experience: "20 years",
    school: "UNC",
    major: "Trash Talking",
    email: "mJordan@bulls.com",
    linkedInUrl: "mJordas.linkedinprofile.com" }
];

// Create html and map objects
const cards = bios.map(bios => `
      <main class="main">
       <div class="card">
         <div class="item1">
         <img class="headshot" src="img/unsplash-headshot.jpg" alt="Professional headshot of Steve Smith in blue checked shirt">
         <h1>${bios.name}</h1>
         <h2>${bios.jobTitle}</h2>
         </div>
           <div class="item2">
             <p><strong>Company:</strong> ${bios.company}</p>
             <p><strong>Experience:</strong> ${bios.experience}</p>
             <p><strong>School:</strong> ${bios.school}</p>
             <p><strong>Major:</strong> ${bios.major}</p>
             <p><strong>Email:</strong> <a href="mailto:${bios.email}">${bios.email}</a></p>
             <p><img class="logo" src="img/linkedin.svg" class="linkedin" alt="LinkedIn logo">
             <a href="${bios.linkedInUrl}" target="_blank">${bios.linkedInUrl}</a></p>
           </div>
       </div>
       </main> `
  );

  // Hook up HTML
martha = $('.martha')
  martha.append(cards);

//close jquery
});
