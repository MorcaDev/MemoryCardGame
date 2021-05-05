//buttons
const buttonS   = document.getElementById("buttonS");
const buttonNG  = document.getElementById("buttonNG");

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

    if(cardsArray.length != 0){

        cardsArrayRelation(ev);
        cardsArray[1].classList.remove("PlusCard")

    }else{
        cardsArrayRelation(ev);
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









/*

buttonS.addEventListener("click",CardsValidation);

function CardsValidation(){
    if(cardsRow.length != 0){   
        buttonS.removeEventListener("click",CardsValidation);

        cardsRow[0].classList.add("PlusCard");
    }
    else{
        alert("Please , choose a card")
    }
}
*/
