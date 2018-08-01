// var number = Math.floor(Math.random() * (10 - 1)) + 1;
var number = Math.floor(10*Math.random()) + 1; // random number from 1 to 10
var counter = 2;
console.log('The number is: '+number);

document.getElementById('check').onclick = function(){
	if( counter > 0 ){
		var usernum = document.getElementById('myNum'),
			out = document.getElementById('out');
		// usernum = parseInt(usernum);

		if (usernum.value == number){
			out.innerHTML = 'You won!';
			setTimeout(window.location.reload.bind(window.location), 2000);
		} else if (usernum.value > number) {
			out.innerHTML = 'Try lower number';
		} else {
			out.innerHTML = 'Try higher number';
		}

		usernum.value = '';
		document.getElementById('count').innerHTML = 'Counts left: ' + counter;
		counter--;
	} else {
		alert('Sorry, but you are out of luck');
		window.location.reload();
	}
	console.log('Current counts: '+counter);
}
