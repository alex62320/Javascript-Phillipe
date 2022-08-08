var participants=["Alexandre.C","Benoît","Donatien","Hugo","Myriam","Nicolas","Vlad","Quentin R","Quentin F","Steven","Julian","Maxence","Thomas","Amandine", "Tristan"];
var participantsRestants=participants.slice(0);
var threeAleatoires=[];
while (threeAleatoires.length<3) threeAleatoires.push(participantsRestants.splice(Math.floor(Math.random()*participantsRestants.length),1)[0]);

var buttonTas = document.querySelector("#tas")

buttonTas.addEventListener("click", () => {
    console.log(threeAleatoires)
})