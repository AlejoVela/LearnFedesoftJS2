// For
let $ejFor = document.getElementById("ejFor");



const emergente = ()  => {
    for (let index = 0; index < 5; index++) {
        alert("esto es span");
        window.open("https://www.digitaltoo.com/wp-content/uploads/sites/3/2020/07/Virus-2.jpg");
    }
};


$ejFor.onclick = function () {
    emergente();
};