/*lesson 20 
FUNCTIONS*/

function one() {
	alert('Hello');
	// return 3;
}

// console.log(5 + one());

function summa(a, b) {
	a = a || 10;// undefined или 10 = 10
	b = b || 20;
	alert( a + b);
}

// console.log(summa ());

// alert(c);
document.getElementById('b1'). onclick = function () { // анонимная функция
	summa (12, 6); 
};