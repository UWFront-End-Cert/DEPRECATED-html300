
$(document).ready(function(){

//gets the JSON data from the data file for each card and builds variables for card data
fetch('./data/data.json')
.then(response => response.json())
.then(function(data) {

  for (let i=0; i<data.length;i++){

        let langString = '';

    for (let j = 0; j < data[i].codeLanguages.length; j++) {

        if ((j + 1) === data[i].codeLanguages.length) {
            langString += data[i].codeLanguages[j];
        }
        else {
        langString += data[i].codeLanguages[j] + ", ";
        }
    }

        let name = data[i].name;
        let jobTitle = data[i].jobTitle;
        let company = data[i].company;
        let experience = data[i].experience;
        let school = data[i].school;
        let major = data[i].major;
        let linkedInUrl = data[i].linkedInUrl;
        let email = data[i].email;
        let codeLanguages = langString;
        let empID = data[i].EmployeeID;

        //calls function to create card and is returned a new card
        let newCard = createCard(name, jobTitle, company, experience, school, major, linkedInUrl, email, codeLanguages, empID)

        //appends the new card to the document body
        $('.template-hook').append(newCard);

    }
})
//function that creates a card takes in data variables
    function createCard(name, jobTitle, company, experience, school, major, linkedInUrl, email, codeLanguages, empID) {

        let card = 
        [
            '<div class="main-container"><div class="child">',
            '<div class="child21">',
            '<img class="img-class" src="/img/', empID, '.jpg" alt="steve" width="75%"/>',
            '<h2><span class="bold-span">', name,'</span></h2>',
            '<h2><span class="ital-span">', jobTitle,'</span></h2>',
            '</div><div class="child22">',
            '<h3><span class="bold-span">Company: </span>', company, '</h3>',
            '<h3><span class="bold-span">Experience: </span>', experience, '</h3>',
            '<h3><span class="bold-span">School: </span>', school, '</h3>',
            '<h3><span class="bold-span">Major: </span>', major, '</h3>',
            '<h3><span class="bold-span">Languages: </span>', codeLanguages, '</h3>',
            '<h3><span class="bold-span">Email: </span><a href="', email, '">', email, '</a></h3>',
            '<div class="linkedin"><img src="/img/linkedin.svg" alt="linkedin"/><a href="', linkedInUrl, '">&nbsp&nbsp', linkedInUrl, '</a></div>',
            '</div></div></div><br/><br/>'
        ];
        //joins each row to becaome a string html card with the data integrated and returns to calling function
        return card.join('');
    }

})