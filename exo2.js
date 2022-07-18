// exercice 1 

// ⚠ cet exercice ne présente que peu d’intérêt: ce que nous allons faire pourrait être fait sans fetch, 
// en modifiant la valeur src de la balise image directement.
// Le but est de vous apprendre fetch sans avoir à apprendre JSON immédiatement
//
// ➡ Créer une page HTML, mettre une image avec un id et mettre un bouton
// ➡ Créer un script JS, ajouter un listener click au bouton et lui donner le code ci-dessous
// ➡ Ça devrait marcher :)

var myImage = document.querySelector("#myImage");
fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
    .then(response => response.blob())
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });

// exercice 2 
//
// Vous reprenez l’ancien exercice affichant la liste des étudiants (exo 5 de JS1),
// et vous refaites la même en affichant plus d’formations et en exploitant la donnée JSON fournie ci-dessus.
//
// On va recevoir du JSON: le premier then contiendra donc response => response.json()
// C’est magique, la fonction du second then est notre JSON déjà parsé ! Rien à faire, c’est un objet JS valide

myJSON = "https://pachyderme.net/students.json";

fetch("https://pachyderme.net/students.json")
    .then(response => response.json())
    .then(function (popStudents){
        console.log(popStudents);
        popStudents.students.forEach(function (student)
        {
            console.log(student)
            var newStudent = document.createElement("div")
            newStudent.innerHTML += `
            <h4>${student.firstname} ${student.lastname}</h4>
            <p>Sexe:${student.sex}</p>
            <p>Github:${student.githubid}</p>
            `;
            document.querySelector('#student').appendChild(newStudent);
        });
    });

// exercice 3 
// 
// Vous allez créer une page web avec un champ d’input pour enregistrer en localStorage un nom de promotion.
// Vous allez créer un bouton pour charger le nom de promotion et un dernier pour supprimer le nom enregistré.

var saveButton = document.querySelector("#save");
var loadButton = document.querySelector("#load");
var promotionNameInput = document.querySelector("#promotionName")

saveButton.addEventListener("click", saveName);
loadButton.addEventListener("click", loadName);

function saveName(event){
    localStorage.setItem("promotionName", JSON.stringify(promotionNameInput.value))
}

function loadName(event) {
    promotionNameInput.value = JSON.parse(localStorage.getItem("promotionName"));
}

