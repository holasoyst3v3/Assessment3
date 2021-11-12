console.log(".:*JavaScript initialized*:.");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Message sent successfully. We will respond shortly.");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duckyBat = document.querySelector('#duckyBat')
duckyBat.addEventListener('mouseover', () => {
    window.alert("BatDucky says: 'I'd rescue you ANY day!!'");
})