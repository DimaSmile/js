//lesson 8
//Игра "Угадай число"
var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);// Генерация числа от 0 до 10;
												 //random -- генерирует число от 0 до 1;
												 //floor =- округляет число в меньшую сторону;
	// tempOut = document.getElementById('temp-out');
	// tempOut.innerHTML = prNum;
	console.log(prNum);// Вывод числа в консоле

function f1() {
	var num, out;

	num = document.getElementById('mynum').value;

	out = document.getElementById('out');
	if (num == prNum) {
		out.innerHTML = 'Вы угадали';
	}else if(num > prNum){
		out.innerHTML = 'Слишком большое число';
	}else{
		out.innerHTML = 'Слишком маленькое число';
	}
}