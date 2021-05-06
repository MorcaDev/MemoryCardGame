//buttons
const buttonS   = document.getElementById("buttonS");
const buttonNG  = document.getElementById("buttonNG");

let clickS  = false;
let lvl = 1;
let clickNG = false;
let derrote = false;
let answer;

//cards
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

let cardsArray = []

//validación de cartas

card1.addEventListener("click",cardsArraySetter);
card2.addEventListener("click",cardsArraySetter);
card3.addEventListener("click",cardsArraySetter);
card4.addEventListener("click",cardsArraySetter);
card5.addEventListener("click",cardsArraySetter);
card6.addEventListener("click",cardsArraySetter);

function cardsArraySetter(ev){
    if(clickS === false){
        if(cardsArray.length != 0 ){
            cardsArrayRelation(ev);
            cardsArray[1].classList.remove("PlusCard") 
        }else{
            cardsArrayRelation(ev);
        }
    }else{

    }

    if(clickNG === true){
        cardsArray[0].classList.remove("PlusCard");    
        cardsArrayRelation(ev);
    }else{

    }
}

function cardsArrayRelation(ev){
    switch(ev.target.id){
        case "card1":
            cardsArray.unshift(card1)
            card1.classList.add("PlusCard")
            break;
        case "card2":
            cardsArray.unshift(card2)
            card2.classList.add("PlusCard")
            break;
        case "card3":
            cardsArray.unshift(card3)
            card3.classList.add("PlusCard")
            break;
        case "card4":
            cardsArray.unshift(card4)
            card4.classList.add("PlusCard")
            break;
        case "card5":
            cardsArray.unshift(card5)
            card5.classList.add("PlusCard")
            break;
        case "card6":
            cardsArray.unshift(card6)
            card6.classList.add("PlusCard")
            break;
    }
}

// validación Botones

buttonS.addEventListener("click",printButtonS);
buttonNG.addEventListener("click",printButtonNG);

function printButtonS(ev){
    buttonS.classList.add("PlusButton");

    if(cardsArray.length != 0 && lvl == 1){
        clickS = true;
        game();
    }else{
        if(lvl != 1){

        }else if(cardsArray.length == 0){
            alert("choose a card please");
            buttonS.classList.remove("PlusButton")
        }else{}
    }
}

function printButtonNG(ev){

    buttonNG.classList.add("PlusButton");

    derrote = confirm("true or false");
    //jugar con derrota -> game
    //post alert -> derrote

    if(derrote){
        answer = confirm("Do you want to change your kind of cards?");

        if(answer){
            alert("Choose one and then pick NEW GAME again");
            clickNG = true;
            buttonNG.removeEventListener("click",printButtonNG)

            buttonNG.addEventListener("click",thereIsACard);
        }else{
            game();
        }
    }else{
        alert("you only can use this button for fail situations ")
        buttonNG.classList.remove("PlusButton")
    }

}

function thereIsACard(ev){
    if(cardsArray.length != 0){
        game();
    }else{
        alert("Choose one please");
    }
}

function game(){
    console.log("welcome to the paradise")
}
