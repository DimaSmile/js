//lesson 5
//calculator

function plus() {//addition
	var num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 + num2;

	document.getElementById('out').innerHTML = result;
}

function minus() {//subtraction
	var num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 - num2;

	document.getElementById('out').innerHTML = result;
}

function multiplication() {
	var num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 * num2;

	document.getElementById('out').innerHTML = result;
}

function division() {
	var num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	if( num2 == 0 ){
		result = 'На ноль делить нельзя';
	}else{
		result = num1 / num2;
	}

	document.getElementById('out').innerHTML = result;
}