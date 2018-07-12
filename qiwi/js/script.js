window.onscroll = function() {stickyMenu()};

var bar = document.getElementById('headbar');
var sticky = bar.offsetTop;

function stickyMenu(){
	if(window.pageYOffset >= sticky){
		bar.classList.add('sticky')
	} else {
		bar.classList.remove('sticky');
	}
}