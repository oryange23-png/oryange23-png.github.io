function validateForm() {

    let errors = document.getElementById("errors");
    errors.innerHTML = "";

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let emptyFields = [];
    let invalidFields = [];

    // Regex
    let usernameRegex = /^[a-z0-9]{4,12}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.(net|com|org|edu)$/;
    let phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    let passwordRegex = /^[A-Za-z0-9_]{9,}$/;

    let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{9,}$/;

    // Empty checks
    if(username === "") emptyFields.push("Username");
    if(email === "") emptyFields.push("Email");
    if(phone === "") emptyFields.push("Phone Number");
    if(password === "") emptyFields.push("Password");
    if(confirm === "") emptyFields.push("Confirm Password");
    if(!gender) emptyFields.push("Gender");
    if(age === "") emptyFields.push("Age Group");

    // Validation checks
    if(username && !usernameRegex.test(username))
        invalidFields.push("Username");

    if(email && !emailRegex.test(email))
        invalidFields.push("Email");

    if(phone && !phoneRegex.test(phone))
        invalidFields.push("Phone Number");

    if(password && !passwordRegex.test(password))
        invalidFields.push("Password");

    // Print empty fields in red
    if(emptyFields.length > 0){
        let red = document.createElement("p");
        red.style.color = "red";
        red.innerHTML = "Empty Fields: " + emptyFields.join(", ");
        errors.appendChild(red);
    }

    // Print invalid fields in orange
    if(invalidFields.length > 0){
        let orange = document.createElement("p");
        orange.style.color = "orange";
        orange.innerHTML = "Invalid Fields: " + invalidFields.join(", ");
        errors.appendChild(orange);
    }

    if(emptyFields.length > 0 || invalidFields.length > 0)
        return;

    // Password match
    if(password !== confirm){
        alert("passwords do not match");
        return;
    }

    // Redirect if everything is valid
    window.location.href = "https://your-vm-webpage-url.com";
}


function clearErrors(){
    document.getElementById("errors").innerHTML = "";
}
