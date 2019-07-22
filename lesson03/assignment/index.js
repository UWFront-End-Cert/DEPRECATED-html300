$(document).ready(function(){


const linkedin = [
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
   ]


let contacts = linkedin.map(function(el){
       let con=`<article>
            
               
  <!-- entire contact card-->
	  <section class = "card">
		  <!--left portion with headshoot-->
		  <div class = "headshot">
			  <img class= "head_pic" src="img/unsplash-headshot.jpg" alt="Head Shot">
			  <p class = "text__name" id="name">${el.name}</p>
			  <p class= "text__title" id="title">${el.jobTitle}</p>
		  </div>
		  <!-- right portion with details-->
		  <div class = "inlay">
			  <a class = "text__bold">Company:</a><a class = "text__normal" id="company">${el.company}</a>
			    <br>
			  <a class = "text__bold">Experience:</a><a class = "text__normal">${el.experience}</a>
			    <br>
			  <a class = "text__bold">School:</a><a class = "text__normal">${el.school}</a>
			    <br>
			  <a class = "text__bold">Major:</a><a class = "text__normal">${el.major}</a>
			    <br>
			  <a class = "text__bold">Email:</a><a class = "text__normal">${el.email}</a>
			    <br>
			  <img  class= "logo-pic" src="img/linkedin.svg" alt="LinkedIn Icon"><a class = "text__normal">${el.linkedInUrl}</a>
		  </div>
	  </section>
            

       </article>`;
       return con
    });
    
$(".template-hook").append(contacts);



});
