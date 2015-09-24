var input = document.getElementById("input_box");
var button_one = document.getElementById("submit");
var button_two = document.getElementById("delete");

var chore_input = document.getElementById("chores");
var grocery_input = document.getElementById("grocery");
var want_input = document.getElementById("want");

button_one.addEventListener("click", function(){
	var li = document.createElement("li");
	var ul_chores = document.getElementById("chores_list");
	var ul_grocery = document.getElementById("grocery_list");
	var ul_want = document.getElementById("want_list");
	var input_value = input.value;

	if(input_value === '' || input_value === null){
		alert("Enter something");
		return '';
	}

	function checked_and_input_value() {
		if (chore_input.checked) {
			alert("checked chore");
			li.innerText = input_value;
			ul_chores.appendChild(li);
		}
		if (grocery_input.checked) {
			alert("checked grocery");
			li.innerText = input_value;
			ul_grocery.appendChild(li);
		}
		if (want_input.checked) {
			alert("checked want");
			li.innerText = input_value;
			ul_want.appendChild(li);
		}
	}

	input.value = '';

});

function check_box_change(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}