// lesson16 servis CSS Generator
// делаем css generator, радиу углов

document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
	var div = document.getElementById('test');//Прямоугольник
	//Получить textarea
	var out = document.getElementById('out');

	// console.log(this.value)
	div.style.borderRadius = this.value + 'px';
	//border-radius: 30px;
	
	out.innerHTML = '-webkit-border-radius: '+ this.value + 'px;\n';
	out.innerHTML += 'border-radius: '+ this.value + 'px;';
}