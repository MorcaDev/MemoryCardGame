//game pieces
let lvl1A = document.getElementById("lvl1A");
let lvl1B = document.getElementById("lvl1B");
let lvl1C = document.getElementById("lvl1C");
let lvl2A = document.getElementById("lvl2A");
let lvl3A = document.getElementById("lvl3A");
let lvl4A = document.getElementById("lvl4A");
let lvl4B = document.getElementById("lvl4B");
let lvl5A = document.getElementById("lvl5A");
let lvl5B = document.getElementById("lvl5B");
let lvl6A = document.getElementById("lvl6A");
let lvl6B = document.getElementById("lvl6B");
let lvl7A = document.getElementById("lvl7A");
let lvl7B = document.getElementById("lvl7B");
let lvl8A = document.getElementById("lvl8A");
let lvl8B = document.getElementById("lvl8B");

let piecesForLevel = [];

let piecesValidation = [];
let  isTrue ;
let  zero = 0;

let lvl = 1;

let derrote = false;
let question = undefined;

//buttons
const buttonS   = document.getElementById("buttonS");
const buttonNG  = document.getElementById("buttonNG");

let clickS  = false;
let clickNG = false;

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

    if(clickNG === false){
 
    }else{
        if(cardsArray.length != 0 ){
            cardsArrayRelation(ev);
            cardsArray[1].classList.remove("PlusCard") 
        }else{
            cardsArrayRelation(ev);
        }
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
        buttonS.removeEventListener("click",printButtonS)
        game();
    }else{
        alert("choose a card please");
        buttonS.classList.remove("PlusButton")
    }
}

function printButtonNG(ev){

    buttonNG.classList.add("PlusButton");

    if(derrote){

        deletingClasses();

        piecesForLevel = [];

        question = confirm("Do you want to change your kind of cards?");

        if(question){
            cardsArray = [];
            clickNG = true;

            alert("Choose one and then pick NEW GAME again");

            buttonNG.addEventListener("click",thereIsACard);
            buttonNG.removeEventListener("click",printButtonNG);
            
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

//game funciton
async function game(){
    if(lvl === 1){
        hidePieces();

        showPieces();

        await timer();

        flipFrontPieces();
    
        await flipReversePieces();

        addingEvents();
    }else if(lvl >= 2 && lvl <= 8){
        showPieces();

        await timer();
    
        flipFrontPieces();
        
        await flipReversePieces();
    
        addingEvents();
    }else{
        winner();
    }
}

function hidePieces(){
    lvl8A.classList.add("InvisibiltyPieces");
    lvl8B.classList.add("InvisibiltyPieces");
    lvl7A.classList.add("InvisibiltyPieces");
    lvl7B.classList.add("InvisibiltyPieces");
    lvl6A.classList.add("InvisibiltyPieces");
    lvl6B.classList.add("InvisibiltyPieces");
    lvl5A.classList.add("InvisibiltyPieces");
    lvl5B.classList.add("InvisibiltyPieces");
    lvl4A.classList.add("InvisibiltyPieces");
    lvl4B.classList.add("InvisibiltyPieces");
    lvl3A.classList.add("InvisibiltyPieces");
    lvl2A.classList.add("InvisibiltyPieces");
    lvl1A.classList.add("InvisibiltyPieces");
    lvl1B.classList.add("InvisibiltyPieces");
    lvl1C.classList.add("InvisibiltyPieces");
}

function showPieces(){
    switch (lvl) {
        case 1:
            lvl1A.classList.remove("InvisibiltyPieces");
            lvl1B.classList.remove("InvisibiltyPieces");
            lvl1C.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl1A,lvl1B,lvl1C)
            break;
        case 2:
            lvl2A.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl2A);
            break;
        case 3:
            lvl3A.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl3A);
            break;
        case 4:
            lvl4A.classList.remove("InvisibiltyPieces");
            lvl4B.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl4A,lvl4B);
            break;
        case 5:
            lvl5A.classList.remove("InvisibiltyPieces");
            lvl5B.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl5A,lvl5B);
            break;
        case 6:
            lvl6A.classList.remove("InvisibiltyPieces");
            lvl6B.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl6A,lvl6B);
            break;
        case 7:
            lvl7A.classList.remove("InvisibiltyPieces");
            lvl7B.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl7A,lvl7B);
            break;
        case 8:
            lvl8A.classList.remove("InvisibiltyPieces");
            lvl8B.classList.remove("InvisibiltyPieces");
            piecesForLevel.push(lvl8A,lvl8B);
            break;       
        default:
            break;
    }
}

function timer(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3sg");
        }, 0);
        setTimeout(() => {
            console.log("2sg");
        }, 500);
        setTimeout(() => {
            console.log("1sg");
        }, 1000);
        setTimeout(() => {
            console.log("///////////////");
            resolve();
        }, 1500);
    });
}

function flipFrontPieces(){
    piecesForLevel.map((v,i,a)=>{
        if(i%2 === 0){
            v.classList.add("False");
        }else{
            v.classList.add("True");
        }
    });
}

function flipReversePieces(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            piecesForLevel.map((v,i,a)=>{
                if(i%2 === 0){
                    v.classList.remove("False");
                }else{
                    v.classList.remove("True");
                }
            });
            resolve(); 
        }, 1250);
    });
}

function addingEvents(){
    piecesForLevel.map((v,i,a)=>{
        if(i%2 === 0){
            v.addEventListener("click",wrongAnswer);
        }else{
            v.addEventListener("click",rightAnswer);
        }
    });
}   

async function wrongAnswer(ev){
    await wrongRelation(ev);

    console.log(`sorry you lose this level (${lvl})`)
    derrote = true;
    lvl= 1;
    deletingEvents();
}

function wrongRelation(data){
    return new Promise((resolve,reject)=>{
        switch(data.target.id){
            case "lvl1A":
                lvl1A.classList.add("False");
                resolve();
                break;
            case "lvl1C":
                lvl1C.classList.add("False");
                resolve();
                break;
            case "lvl3A":
                lvl3A.classList.add("False");
                resolve();
                break;                      
            case "lvl4B":
                lvl4B.classList.add("False");
                resolve();
                break;
            case "lvl5B":
                lvl5B.classList.add("False");
                resolve();
                break;
            case "lvl6B":
                lvl6B.classList.add("False");
                resolve();
                break;
            case "lvl7B":
                lvl7B.classList.add("False");
                resolve();
                break;
            case "lvl8B":
                lvl8B.classList.add("False");
                resolve();
                break;
            default:
                reject();
        }
    });
}

async function rightAnswer(ev){

    for (zero ; zero < 1; zero++) {
        if(lvl >= 3){
            piecesValidation = new Array(lvl-1).fill(undefined)
        }else{
            piecesValidation = new Array(lvl).fill(undefined)
        }
    }

    rightAddRelation(ev);

    isTrue = piecesValidation.every((v,i,a)=>{
        return v != undefined
    });

    if(isTrue === true){

        isTrue = false;
        zero = 0;
    
        await rightRemoveRelation(ev);

        lvl++
        game();
    }  
}

function rightAddRelation(data){
        switch(data.target.id){
            case "lvl1B":
                lvl1B.classList.add("True");
                piecesValidation[0] = lvl1B;
                break;   
            case "lvl2A":
                lvl2A.classList.add("True");
                piecesValidation[1] =lvl2A
                break;                        
            case "lvl4A":
                lvl4A.classList.add("True");
                piecesValidation[2] =lvl4A
                break;    
            case "lvl5A":
                lvl5A.classList.add("True");
                piecesValidation[3] =lvl5A
                break;    
            case "lvl6A":
                lvl6A.classList.add("True");
                piecesValidation[4] =lvl6A
                break;   
            case "lvl7A":
                lvl7A.classList.add("True");
                piecesValidation[5] =lvl7A
                break;   
            case "lvl8A":
                lvl8A.classList.add("True");
                piecesValidation[6] =lvl8A;
                break;   
            default:
                break; 
    }
}

function rightRemoveRelation(){
    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {

            piecesValidation.map((v,i,a)=>{
                v.classList.remove("True");
            });

            resolve();

        }, 1250);

    });  
}

function deletingEvents(){
    piecesForLevel.map((v,i,a)=>{
        if(i%2 === 0){
            v.removeEventListener("click",wrongAnswer);
        }else{
            v.removeEventListener("click",rightAnswer);
        }
    });
}

function deletingClasses(){
    piecesForLevel.map((v,i,a)=>{
        if(i%2 === 0){
            v.classList.remove("False")
        }else{
            v.classList.remove("True")
        }
    });
}

function winner(){
    alert(`You are the winner`);
    derrote = true;
}