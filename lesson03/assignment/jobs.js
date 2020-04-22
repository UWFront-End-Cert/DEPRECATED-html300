//JS for Lession 3 mystery job cards - linkedin profiles

//database copied out from JSON file
const chicago = [
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


//This is the template for the box of each card
const inputs = chicago.map(function(el) {
				let career = `<div class="career">
			<section class="career1">
		<img class="headshot" src="img/unsplash-headshot.jpg" alt="20-something smiling developer in his nice button down shirt">
				<p class="career1_name">${el.name} </p>
				<p class="career1_jobTitle">${el.jobTitle}</p>
	</section>

		<section class="career2">
			 <ul>
				 <li class="career2_company"><b>Company:</b> ${el.company} </li>
				 <li class="career2_experience"><b>Experience:</b> ${el.experience}</li>
				 <li class="career2_school"><b>School:</b> ${el.school} </li>
				 <li class="career2_major"><b>Major:</b> ${el.major} </li>
				 <li class="career2_email"><b>Email:</b> ${el.email} </li>
				 <li class="career2_linkedInUrl"><img class="logo" src="img/linkedin.svg" alt="linkdin logo">  ${el.linkedInUrl} </li>
				 <li class="career2_codeLanguages">${el.codeLanguages} </li>
			 </ul>
		</section>
		</div>`;
		return career;
});


$(".main").append(inputs);
