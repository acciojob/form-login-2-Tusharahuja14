window.onload = function() {
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let pnum = document.getElementById("phonenumber");
    let emailid = document.getElementById("emailid");

    function show(event) {
        event.preventDefault(); // Prevent form submission
        alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${pnum.value} Email ID: ${emailid.value}`);
    }

    // Attach event listener to the form
    document.querySelector("form").onsubmit = show;
};
