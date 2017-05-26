//LESSON 21 
//Mouse events

var block = document.getElementById('one');

//mouse click
// block.onclick = function () {
// 	this.style.background = 'green';
// 	this.onclick = null;
// };

// double click
// block.ondblclick = function () {
// 	this.style.background = 'red';
// }

//click right mouse button
block.oncontextmenu = function () {
	this.style.background = 'black';
	return false;
}

// document.oncontextmenu = function () {
// 	return false;  //запрет вызова меню правой кнопкой мыши
// }

// hover effect
// block.onmouseenter = function () {
// 	console.log('in!!!');
// 	this.style.background = 'gold';
// }
// //Отвод мыши
// block.onmouseleave = function () {
// 	this.style.background = 'orange';
// }

//Mouse movement
// var a = 0;
// block.onmousemove = function () {
// 	a++;
// 	this.style.width = 100 + a+'px';
// }

//HOLD MOUSE BUTTON(ANY)
block.onmousedown = function (event) {
	block.style.background = 'cyan';
	console.log('button: ' +event.button);
	console.log('which: ' +event.which);
}

//Отпустить мышь
block.onmouseup = function  () {
	this.style.background = 'pink';
}