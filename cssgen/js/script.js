document.getElementById('r1').oninput = cssGen;

function cssGen(){
	var div = document.getElementById('test'); // test square
	// console.log(this.value);
	div.style.borderRadius = this.value + 'px';

	var out = document.getElementById('out'); // textarea
	out.value = '-webkit-border-radius: '+div.style.borderRadius+'\n';
	out.value += 'border-radius: '+div.style.borderRadius;
}



document.getElementById('r2').oninput = cssBg;
document.getElementById('r3').oninput = cssBg;
document.getElementById('r4').oninput = cssBg;
document.getElementById('r5').oninput = cssBg;

function cssBg(){
	red = document.getElementById('r2').value;
	green = document.getElementById('r3').value;
	blue = document.getElementById('r4').value;
	alpha = document.getElementById('r5').value;
	var testdiv = document.getElementById('test2');

	testdiv.style.backgroundColor = "rgba("+red+','+green+','+ blue+','+ alpha+")";
	console.log(testdiv.style.backgroundColor);

	var out2 = document.getElementById('out2');
	out2.value = 'background-color: '+testdiv.style.backgroundColor+'\n';
	out2.value += 'color: '+testdiv.style.backgroundColor;
}