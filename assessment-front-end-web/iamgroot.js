console.log("I.AM.GROOT");

let babyGroot = document.querySelector('#iAmGroot')
babyGroot.addEventListener('mouseover', () => {
    window.alert("I!! AM!! GROOT!!'");
})




// colorButton.addEventListener('click', sayHello);

let formGroot = document.querySelector('form#contactGroot');

// formGroot.addEventListener('button', iAMgroot);
function iAMgroot(event) {
    event.preventDefault();
	
	window.alert("I......am GROOT!!");
}

formGroot.addEventListener('submit', iAMgroot);



let colorGroot = document.querySelector('#color')

function colorGroot(evt) {
    evt.preventDefault();
	
	window.alert("I Am GROOT!");
}
formGroot.addEventListener('#color', colorGroot);


let placeGroot = document.querySelector('#place')



let toDoGroot = document.querySelector('#to-do')