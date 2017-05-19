// alert(); нужен для вывода сообщений во всплывающем окне
// alert('hi');



function f1() {
	alert('You click on button');
}

function f2() {
	alert('This is cat!');
}



function pow2() {//вывод квадрата числа
	
	//var - нужно для объявления переменной
	//так же исп.:
	//let
	//const - объявление константы
	var num = document.getElementById("inp1").value;
	
	alert(num * num);
}