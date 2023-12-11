// CS601 O2 
// Fred Keepers
// 11-25-2023

function checkInput() {
    
    let fullNameValue = document.getElementById("fullName").value;
    let emailValue = document.getElementById("email").value;
    let messageValue = document.getElementById("messageContents").value;
    console.log(fullName);
        
    // Error messages
    let noneLetterFoundError = "Error: Letters only"
    let emailError = "Error: Please enter a valid email"
    let inputLengthError = "Error: Two or more letters required"

    // Checks that the input is only letters
    let regex = new RegExp("[0-9]");
    if (regex.test(fullNameValue)){
        //Prevents the page from refreshing, allow DOM change error messages to show.
        event.preventDefault();
        document.getElementById("fullNameLabel").innerHTML = noneLetterFoundError;
        document.getElementById("fullNameLabel").style.color = "red";
    }
    

    //Checks that input lengths are at least two char long
    if (fullNameValue.length < 2) {
        event.preventDefault();
        document.getElementById("fullNameLabel").innerHTML = fnErrorText + inputLengthError;
        document.getElementById("fullNameLabel").style.color = "red";
    }

    //Checks that a valid email has been entered
    regexString = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
    let regexEmail = new RegExp(regexString);
    if (!regexEmail.test(emailValue)){
        event.preventDefault();
        document.getElementById("emailLabel").innerHTML = emailError;
        document.getElementById("emailLabel").style.color = "red";
    }

    console.log(messageValue.length)
    console.log(messageValue.length)
    if (messageValue.length < 2) {
        event.preventDefault();
        document.getElementById("messageContentsLabel").innerHTML = inputLengthError;
        document.getElementById("messageContentsLabel").style.color = "red";
    }
    
}