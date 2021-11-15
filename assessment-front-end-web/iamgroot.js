console.log("I.AM.GROOT");

let babyGroot = document.querySelector('#iAmGroot')

babyGroot.addEventListener('mouseover', () => {
    alert("I!! AM!! GROOT!!'")
})




// colorButton.addEventListener('click', sayHello);


function iGroot(evt) {
    evt.preventDefault();
	alert("I......am GROOT!!");
}
let formGroot = document.querySelector('form#contactGroot')

formGroot.addEventListener('#groot-button', iGroot)

// formGroot.addEventListener('submit', iAMgroot);



let colorGroot = document.querySelector('#color')

function colorGroot(evt) {
    evt.preventDefault();
	alert("I Am GROOT!");
}
formGroot.addEventListener('#color', colorGroot);


let placeGroot = document.querySelector('#place')

function placeGroot(evt) {
    evt.preventDefault();
	alert("I Am GROOT!");
}
formGroot.addEventListener('#place', placeGroot);

let toDoGroot = document.querySelector('#to-do')

function toDoGroot(evt) {
    evt.preventDefault();
	
	alert("I Am GROOT!");
}
formGroot.addEventListener('#to-do', toDoGroot);