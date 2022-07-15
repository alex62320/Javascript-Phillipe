// exo1

// affichez hello world dans la console 
console.log('Hello World !');

// exo2

// mettre un hello world dans le body 
var hello = document.body.innerHTML= document.body.innerHTML += ("Hello world");

// exo3

// créez une balise h1 et mettre hello world dedans
var helloWorldH1 = document.createElement("h1");
helloWorldH1.innerHTML += "Hello World !"
document.body.appendChild(helloWorldH1);

// exo4

// ajoutez hello word dans une div avec un id 
document.querySelector('#greetings').innerHTML += "Hello world in div";

// exo5

// console log une liste de students
var students = ["Alexandre.C","Alexandre.B","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad","Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas","Amandine", "Tristan"];

students.forEach(students => {
    console.log(students);
});

// exo6

// mettre en ordre une liste de students

students.forEach(student => {
    var li = document.createElement("li");
    li.innerHTML += student;
    document.querySelector('#studentsList').appendChild(li);
});

// exo 7 

// faire une function qui change au clique le background de la balise main

function loadStyle(event){
    event.target.className = "dynamicStyle";
};
document.querySelector("main").addEventListener("click", loadStyle);

// exercice calculette

// au clique sur le boutton calcul on recupere les valeur 1 et 2 puis ont sort le resultat
function calculator(val1, val2){
    val1 = parseInt(document.querySelector("#val1").value);
    val2 = parseInt(document.querySelector("#val2").value);
    const result = val1+val2;
    document.querySelector("#result").innerHTML = `Resultat: ${result}`;
}
document.querySelector("#calcul").addEventListener("click", calculator);