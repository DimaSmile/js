// lesson17 Object
// Associative array

var m = {};

var n = {
	"one": 12,
	"hello": "word",
	"prim": 2000,
	"double key": 777,
};
n.one = 900;
var ppp = 'hello';//Присвоение ключа в переменную

console.log(n['double key']);
// console.log(n.one);

console.log(n[ppp]); //Обращение к ключу через переменную ppp
var out = document.getElementById('out');
for (var key in n ) {//перебор объекта n
	out.innerHTML += key + ' ----- '+ n[key] + '<br>'; //поочередный вывод свойств объекта
}