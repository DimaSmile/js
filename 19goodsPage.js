 //Lesson 19
 // Вывод товаров на страницу
 
var goods = {
	"29322" : {
		"name": "Banana",
		"cost": 30,
		"img": "https://cdn3.iconfinder.com/data/icons/veggies/128/bananas.png",
		"sklad": "no",
	},
	"29323" : {
		"name": "Tomato",
		"cost": 25,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sklad": "yes",
	},
	"29325" : {
		"name": "Pepper",
		"cost": 41,
		"img": "https://cdn2.iconfinder.com/data/icons/peppers/128/fire_orange_pepper.png",
		"sklad": "yes",
	},
	"29326" : {
		"name": "Orange",
		"cost": 19,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits-29/294/fruit_orange-128.png",
		"sklad": "yes",
	},
	"29327" : {
		"name": "Apple",
		"cost": 23,
		"img": "https://cdn4.iconfinder.com/data/icons/X-Mac/education_icons/png/128/teachers_day.png",
		"sklad": "yes",
	},
	"33333" : {
		"name": "Strawberry",
		"cost": 50,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
		"sklad": "yes",
	},
};

console.log(goods);

var out = '';
for (var key in goods){
	out += 'Name: ' +goods[key].name + '<br>';
	out += 'Cost: ' +goods[key].cost + '<br>';
	out += 'Availability: ' +goods[key].sklad + '<br>';
	out += '<img src="' +goods[key].img + '"/>' +'<br>';
	out += '<hr>';
}

document.getElementById('out').innerHTML = out;