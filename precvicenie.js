const secretNumber = Math.floor(Math.random() * 10) + 1; // nahodne cislo od 1 do 10

let attempts = 3; // tip pouzivatela
let guess = 0; //pocet pokusov

const input = prompt("Hádaj číslo od 1 do 10");
guess = Number(input);

if (secretNumber === guess) 

{
    alert("Gratulujem! Uhadol si");
    
    
}

else if (guess < secretNumber)

{
    alert("Secret je vacsie ako tvoj tip");
}

else 
{
    alert("Secret je mensie ako tvoj tip"); 
    }
     
    if (secretNumber === guess) {
        alert("Secret number = " + secretNumber);
            }