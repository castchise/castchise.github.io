filterSelection("all")
function filterSelection(c){
	var x,i;
	x = document.getElementsByClassName("gcolumn");
	if (c == "all") c = "";

	for( i = 0; i < x.length; i++ ){
		funcRemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) funcAddClass(x[i], "show");
	}
}

function funcAddClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for ( i = 0; i < arr2.length; i++ ) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function funcRemoveClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for ( i = 0; i < arr2.length; i++){
		while (arr1.indexOf(arr2[i]) > -1){
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("searchbtns");
var btns = btnContainer.getElementsByClassName("btn");
for( var i = 0; i < btns.length; i++){
	btns[i].addEventListener("click", function(){
		var	current = document.getElementsByClassName("gactive");
		current[0].className = current[0].className.replace(" gactive", "");
		this.className += " gactive";
	})
}