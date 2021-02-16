
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let randomWho = who[Math.floor(Math.random() * who.length)];
let randomWhat = what[Math.floor(Math.random() * what.length)];
let randomWhen = when[Math.floor(Math.random() * when.length)];


let excuse = document.getElementById("the-excuse-is");


function MyExcuse() {
    excuse.innerHTML = randomWho + " " + randomWhat + " " + randomWhen;
}


window.onLoad = MyExcuse();