  
function validation(){
	const Name = document.querySelector("#username");
	const password = document.querySelector("#password");
	const error_msg = document.querySelector(".error_msg");

	if(input_text.value.length  <= 4  || input_password.value.length <= 4 ){
		error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
		return true;
	}
	
}

const input_fields = document.querySelectorAll(".input");
const login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 4){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})