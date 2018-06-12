var prNum, tempOut;

prNum = Math.floor((Math.random() * 10) + 1); // генерация рандомного числа
// tempOut = document.getElementById('temp-out');
// tempOut.innerHTML = prNum; // вывод подсказки

function guess(){
	var num, out;

	num = document.getElementById('mynumb').value;
	num = parseInt(num);
	out = document.getElementById('out');

	if(num == prNum){
		out.innerHTML = 'Бинго!';
	} else if ( num > prNum ){
		out.innerHTML = 'Вы ввели число больше';
	} else {
		out.innerHTML = 'Вы ввели число меньше';
	}

	document.getElementById('mynumb').value = '';
}