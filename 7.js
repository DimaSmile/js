//lesson 7
//if, elseif, else 

function f1() {
	var n, p;
	n = document.getElementById('num1').value;
	p = document.getElementById('out');
	n = parseInt(n);

	if (n == 100) {
		p.innerHTML = 'Число равно 100';
	}else if(n < 100){
		p.innerHTML = 'Число < 100';
	}else{
		p.innerHTML = 'Число > 100';
	}
}