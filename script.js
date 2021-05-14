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