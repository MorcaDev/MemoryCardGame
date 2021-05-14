const button1stChart    = document.getElementById("button1stChart");
const button2ndChart    = document.getElementById("button2ndChart");
const button3rdChart    = document.getElementById("button3rdChart");

let chart1 = document.getElementById("chartOne");
let chart2 = document.getElementById("chartTwo");
let chart3 = document.getElementById("chartThree");

button1stChart.addEventListener("click",close1);

function close1(ev){
    chart1.classList.add("Disapper");
    chart2.classList.add("Apper");

    button2ndChart.addEventListener("click",close2);
}

function close2(ev){
    chart2.classList.remove("Apper");
    chart3.classList.add("Apper");

    button3rdChart.addEventListener("click",close3);
}

function close3(ev){
    chart3.classList.remove("Apper");
}
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
let isTrue ;
let zero = 0;

let cardImage;

let lvl = 1;

let derrote = false;
let question = false;

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

        setCard();

        game();
    }else{
        swal({
            title: "Choose one Card, please",
            text: "then, click START button",
            icon: "info",
            button: "got it"
        });
        buttonS.classList.remove("PlusButton")
    }
}

function setCard(){
    cardImage = cardsArray[0];

    switch(cardImage.id){
        case "card1":
            cardImage = "True1";
            break;
        case "card2":
            cardImage = "True2";
            break;
        case "card3":
            cardImage = "True3";
            break;
        case "card4":
            cardImage = "True4";
            break;
        case "card5":
            cardImage = "True5";
            break;
        case "card6":
            cardImage = "True6";
            break;
        default:
            break;
    }
}

function printButtonNG(ev){

    buttonNG.classList.add("PlusButton");

    if(derrote){

        deletingClasses();

        question = swal({
                    title:"Do you want to cahnge you kind of cards?",
                    buttons: ["Obviusly", "No"]
                });

        if(question){
            cardsArray = [];
            clickNG = true;

            swal({
                title: "Choose One Card",
                text: "then, click NEW GAME again",
                icon: "info",
                button: "got it"
            });

            buttonNG.addEventListener("click",thereIsACard);
            buttonNG.removeEventListener("click",printButtonNG);
            
        }else{
            buttonNG.classList.remove("PlusButton")
            game();
        }
    }else{
        swal({
            title: "Only if you lose",
            icon: "info",
            button: "got it"
          });
          
        buttonNG.classList.remove("PlusButton")
    }

}

function thereIsACard(ev){
    if(cardsArray.length != 0){
        setCard();
        buttonNG.classList.add("PlusButton");
        game();
    }else{
        swal({
            title: "Choose One Card",
            Text: "then, click NEW GAME again",
            icon: "warning",
            button: "got it"
        });
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
            v.classList.add(cardImage);
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
                    v.classList.remove(cardImage);
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

    swal({
        title: "You're a loser",
        icon: "error",
        button: "T_T"
      });

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
                lvl1B.classList.add(cardImage);
                piecesValidation[0] = lvl1B;
                break;   
            case "lvl2A":
                lvl2A.classList.add(cardImage);
                piecesValidation[1] =lvl2A
                break;                        
            case "lvl4A":
                lvl4A.classList.add(cardImage);
                piecesValidation[2] =lvl4A
                break;    
            case "lvl5A":
                lvl5A.classList.add(cardImage);
                piecesValidation[3] =lvl5A
                break;    
            case "lvl6A":
                lvl6A.classList.add(cardImage);
                piecesValidation[4] =lvl6A
                break;   
            case "lvl7A":
                lvl7A.classList.add(cardImage);
                piecesValidation[5] =lvl7A
                break;   
            case "lvl8A":
                lvl8A.classList.add(cardImage);
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
                v.classList.remove(cardImage);
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
    cardsArray.map((v,i,a)=>{
        v.classList.remove("PlusButton")
    });
}

function winner(){
    swal({
        title: "You're the Winner!",
        icon: "success",
        button: "Good game",
      });
    derrote = true;
}
