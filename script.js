//your JS code here. If required.
window.onload = function() {
let fname=document.getElementById("firstname");
let lname=document.getElementById("lastname");
let pnum=document.getElementById("phonenumber");
let emailid=document.getElementById("emailid");
function show()
{
	alert(`First Name:${fname.value} Last Name:${lname.value} Phone Number:${pnum.value} Email ID:${emailid.value}`)
}
document.querySelector("form").onsubmit=function(event)
	{
		event.preventDefault();
		show();
	};
};
