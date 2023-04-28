document.getElementById("submit").addEventListener('click',myWindow)


// This is the tech skills list
let tech_skills_list = [];
document.getElementById("add_tech_skill").addEventListener("click", addToTechSkillList);
document.getElementById("deleteFirstTechSkill").addEventListener("click", removeFirstTechSkill);
document.getElementById("deleteLastTechSkill").addEventListener("click", removeLastTechSkill);

function addToTechSkillList(){
    boxvalue = document.getElementById('tech_skill').value;
    tech_skills_list.push(boxvalue);
    document.getElementById("list_of_tech_skills").innerHTML = '<ul><li>'+tech_skills_list.join("</li><li>"); + '</l></ul>';
}
function removeFirstTechSkill(){
    tech_skills_list.shift();
    document.getElementById("list_of_tech_skills").innerHTML = '<ul><li>'+tech_skills_list.join("</li><li>"); + '</l></ul>';
}

function removeLastTechSkill(){
    tech_skills_list.pop();
    document.getElementById("list_of_tech_skills").innerHTML = '<ul><li>'+tech_skills_list.join("</li><li>"); + '</l></ul>';
}
// This is the skills list
let skills_list = [];
document.getElementById("add_skill").addEventListener("click", addToSkillList);
document.getElementById("deleteFirstSkill").addEventListener("click", removeFirstSkill);
document.getElementById("deleteLastSkill").addEventListener("click", removeLastSkill);

function addToSkillList(){
    boxvalue = document.getElementById('skill1').value;
    skills_list.push(boxvalue);
    document.getElementById("list_of_skills").innerHTML = '<ul><li>'+skills_list.join("</li><li>"); + '</l></ul>';
}
function removeFirstSkill(){
    skills_list.shift();
    document.getElementById("list_of_skills").innerHTML = '<ul><li>'+skills_list.join("</li><li>"); + '</l></ul>';
}

function removeLastSkill(){
    skills_list.pop();
    document.getElementById("list_of_skills").innerHTML = '<ul><li>'+skills_list.join("</li><li>"); + '</l></ul>';
}

// This is the list of business references
let business_references = [];
document.getElementById("add_reference").addEventListener("click", addToReferenceList);
document.getElementById("deleteFirstReference").addEventListener("click", removeFirstReference);
document.getElementById("deleteLastReference").addEventListener("click", removeLastReference);

function addToReferenceList(){
    boxvalue = document.getElementById('references').value;
    business_references.push(boxvalue);
    document.getElementById("list_of_references").innerHTML = '<ul><li>'+business_references.join("</li><li>"); + '</l></ul>';
}
function removeFirstReference(){
    business_references.shift();
    document.getElementById("list_of_references").innerHTML = '<ul><li>'+business_references.join("</li><li>"); + '</l></ul>';
}

function removeLastReference(){
    business_references.pop();
    document.getElementById("list_of_references").innerHTML = '<ul><li>'+business_references.join("</li><li>"); + '</l></ul>';
}
function myWindow()
    {
        visitorName = document.getElementById("name").value; // This is the header
        visitorLName = document.getElementById("Lname").value;
        city = document.getElementById("city").value;
        state = document.getElementById("state").value;
        zipCode = document.getElementById("zip").value;
        phoneNumber = document.getElementById("phoneNumber").value;
        email = document.getElementById("email").value;
        socialMedia = document.getElementById("socialMedia").value;
        portfolio = document.getElementById("portfolio").value;
        job_title = document.getElementById("job_title").value;
        about_self = document.getElementById("myself").value;

         // This is the job skills section
        skill_list = document.getElementById("list_of_skills").innerHTML = '<ul><li>'+skills_list.join("</li><li>"); + '</l></ul>';
        tech_skill_list = document.getElementById("list_of_tech_skills").innerHTML = '<ul><li>'+tech_skills_list.join("</li><li>"); + '</l></ul>';
        

        employment1 = document.getElementById("employment1").value; // This is Employment 1
        start_date1 = document.getElementById("start_date1").value;
        end_date1 = document.getElementById("end_date1").value;
        job1 = document.getElementById("job1").value;

        employment2 = document.getElementById("employment2").value; // This is Employment 2
        start_date2 = document.getElementById("start_date2").value;
        end_date2 = document.getElementById("end_date2").value;
        job2 = document.getElementById("job2").value;

        employment3 = document.getElementById("employment3").value; // // This is Employment 3
        start_date3 = document.getElementById("start_date3").value;
        end_date3 = document.getElementById("end_date3").value;
        job3 = document.getElementById("job3").value;

        education = document.getElementById("education").value; // This is Education Background
        courses = document.getElementById("courses").value;
        reference_list = document.getElementById("list_of_references").innerHTML = '<ul><li>'+business_references.join("</li><li>"); + '</l></ul>';
        
        myText = ('<html>\n<head>\n<title>Welcome</title>\n<link rel="stylesheet" type="text/css" href="FinalProject.css">\n</head>\n<body>\n');
        myText += ('<header>\n<h1 id="firstName">'+ visitorName +'</h1>\n<h1>'+ visitorLName + '</h1>\n');
        myText += ('<ul id="personal">\n<li>'+ city +'</li>\n<li>'+ state +'</li>\n<li>'+ zipCode +'</li>\n<li>'+ phoneNumber +'</li>\n');
        myText += ('<li>'+ email +'</li>\n<li>'+ socialMedia +'</li>\n<li>'+ portfolio +'</li>\n</ul>\n</header>\n');
        myText += ('<div id="self">\n<h3 id="position">'+ job_title +'</h3>\n<p>'+ about_self +'</p>\n</div>\n');
        myText += ('<div id="skillset">\n<h4 class="headings">SKILLS</h4>\n'+ skill_list +'\n</div>\n');
        myText += ('<div id="technical_skillset">\n<h4 class="headings">TECHNICAL SKILLS</h4>\n'+ tech_skill_list +'\n</div>\n');
        myText += ('<h4 class="headings">EXPERIENCE</h4>\n<div id="experience">\n<h4>' + start_date1 +' through '+ end_date1 +'</h4>\n<h4>'+ employment1 +'</h4>\n<p1>'+ job1 +'</p1>\n');
        myText += ('<h4>' + start_date2 +' through '+ end_date2 +'</h4>\n<h4>'+ employment2 +'</h4>\n<p1>'+ job2 +'</p1>\n');
        myText += ('<h4>' + start_date3 +' through '+ end_date3 +'</h4>\n<h4>'+ employment3 +'</h4>\n<p1>'+ job3 +'</p1>\n</div>\n');
        myText += ('<h4 class="headings">EDUCATION</h4>\n<div id="education">\n<p class="position">'+ education +'</p>\n<h4>COURSES STUDIED</h4>\n<p>'+ courses +'</p>\n</div>\n');
        myText += ('<h4 class="headings">BUSINESS REFERENCES</h4>\n<div id="references">\n'+ reference_list +'\n</div>\n');
        myText += ('</body>\n</html>');

        if (email == "") { // This starts the email validation
            alert("You must enter an email address")
        } else {
            ValidateEmail(document.getElementById("email").value);
        }
        function ValidateEmail() // This is the validation function call
        {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(document.getElementById("email").value.match(mailformat))
        {
            flyWindow = window.open('about:blank','myPop','width=device-width', 'initial-scale=1.0'); // This opens the new window and writes the new webpage.
            flyWindow.document.write(myText);
        }
        else
        {
        alert("You have entered an invalid email address!");
        }
        }
    }
        
        