let substract = document.querySelector('#substract');
let add = document.querySelector('#add');

substract.addEventListener('click', function () {
let output = document.querySelector('#result');
let result = Number(output.innerHTML) - 1;
output.textContent = result;
});

add.addEventListener('click', function () {
	let output = document.querySelector('#result');
	let result = Number(output.innerHTML) + 1;
	output.textContent = result;
});
