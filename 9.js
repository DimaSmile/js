//lesson9 Цикл for 

function f1() {
	var p;
	p = document.getElementById('out');
	for (var i = 0; i < 20; i = i + 2) {
		p.innerHTML += i + '<br>';	
	}
}