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
            
                <a class= "contact__name">${el.name}</a>
                <a class= "contact__jobTitle">${el.jobTitle}</a>
            

       </article>`;
       return con
    });
    
$("#name").append(contacts);




let details = linkedin.map(function(el){
    let con=`<article>
         
             
             <a class= "details__company">${el.company}</a>
             <a class= "details__experience">${el.experience}</a>
             <a class= "details__school">${el.school}</a>
             <a class= "details__major">${el.major}</a>
             <a class= "details__email">${el.email}</a>
             <a class= "details__linkedInUrl">${el.linkedInUrl}</a>
         

    </article>`;
    return con
 });
 
$("#company").append(details);



});
