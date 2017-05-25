//lesson18
// Solution of the problem with associative arrays

//Задача 3
//Метод подсчета суммы всех элементов массива

var m = {
	"mas": [5, 6],
	"sum": function () {
		var sum = 0;
		for(var i = 0; i < this.mas.length; i++){
			sum += this.mas[i];
		}
		return sum;
	}
}
console.log(m.sum());

//Задача 2
//метод кот расчитывает дату рождения человека исходя из его возраста
// var man2 = {
// 	"name": "Dima",
// 	"age": 24,
// 	"id": "22324d",
// 	"sex": "male",
// 	"year": function () {
// 		return 2017- this.age;
// 	}
// };

// console.log(man2.year());

//Задача 1
//Вывод свойст объекта в консоль
// var man = {
// 	"name": "Dima",
// 	"age": 23,
// 	"id": "22324d",
// 	"sex": "male",

// };

// console.log(man);
// var a = 'name';
// conssole.log(man.name);
// console.log(man['name']);
// console.log(man[a]);