//lesson10 Циклы while and do...while 
//
function f1() {
	var p, p1;
	p = document.getElementById('out');
	p1 = document.getElementById('out');
	var i = 0;
	while (i<50) {
			p.innerHTML+=i +' ';
			i++;
		}
	p.innerHTML +='<br>';

	var j = 100;
	do{
		p.innerHTML+=j +' ';
			j = j- 2;
	} while (j > 0);
}