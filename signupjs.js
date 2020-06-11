function validate() {


    var name = document.forms["signupform"]["fname"].value;
    var email = document.forms["signupform"]["femail"].value;
    var password = document.forms["signupform"]["fpassword"].value;
    if (name == "") {
        alert('Please enter your name!');
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupform.femail.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

    if (password == "") {
        alert('Please enter a password!');
        return false;
    }

    window.location.href = "mainpage.html";

}