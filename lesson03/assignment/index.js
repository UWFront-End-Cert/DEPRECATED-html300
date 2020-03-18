//Start Jquery
$(document).ready(function(){
	// Creat object from provided data
const bios = [
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

// Create Html and map objects
const cards = bios.map(bios =>
	`<div class="main">
		<div class="col">
			<div class="card">
				<div class="section-1">
					<img class="logo" src="img/unsplash-headshot.jpg" alt="profile-pic">
					<h3>${bios.name}</h3>
					<h4>${bios.jobTitle}</h4>
				</div>

				<div class="section-2">
					<p>Company: ${bios.company}</p>
					<p>Experience: ${bios.experience}</p>
					<p>School: ${bios.school}</p>
					<p>Major: ${bios.major}</p>
					<p>Email: ${bios.email}</p>
					<p>Languages: ${bios.codeLanguages}</p>
					<p>
					<img class="link" src="img/linkedin.svg" alt="linkedIn logo">
					${bios.linkedInUrl}</p>
				</div>

			</div>
		</div>
	</div>`
	);
	//Hook up Html
	martha = $('.martha')
	martha.append(cards);
	//close jquery
});
