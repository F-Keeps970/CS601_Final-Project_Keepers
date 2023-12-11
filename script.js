// CS601 O2 
// Fred Keepers
// 11-25-2023

function checkInput() {
    
  let firstNameValue = document.getElementById("firstName").value;
  let lastNameValue = document.getElementById("lastName").value;
  let facNameValue = document.getElementById("facName").value;
  console.log(firstNameValue);
  
  let fnErrorText = "First Name - Error: ";
  let lnErrorText = "Last Name - Error: ";
  let facErrorText = "Facilitator - Error: ";
  
  // Specific errors to append
  let noneLetterFoundError = "Letters only"
  let inputLengthError = "Two or more letters required"
  let facNameError = "Enter Jen, Behdad, Chris, Christian or Josh"

  // Checks that the input is only letters
  let regex = new RegExp("[^a-zA-Z]");
  if (regex.test(firstNameValue)){
      //Prevents the page from refreshing, allow DOM change error messages to show.
      event.preventDefault();

      document.getElementById("firstNameLabel").innerHTML = fnErrorText + noneLetterFoundError;
      document.getElementById("firstNameLabel").style.color = "red";
  }
  
  if (regex.test(lastNameValue)){
      event.preventDefault();
      document.getElementById("lastNameLabel").innerHTML = lnErrorText + noneLetterFoundError;
      document.getElementById("lastNameLabel").style.color = "red";
  }

  if (regex.test(facNameValue)){
      event.preventDefault();
      document.getElementById("facNameLabel").innerHTML = facErrorText + noneLetterFoundError;
      document.getElementById("facNameLabel").style.color = "red";
  }

  //Checks that input lengths are at least two char long
  if (firstNameValue.length < 2) {
      event.preventDefault();
      document.getElementById("firstNameLabel").innerHTML = fnErrorText + inputLengthError;
      document.getElementById("firstNameLabel").style.color = "red";
  }

  if (lastNameValue.length < 2) {
      event.preventDefault();
      document.getElementById("lastNameLabel").innerHTML = lnErrorText + inputLengthError;
      document.getElementById("lastNameLabel").style.color = "red";
  }

  if (facNameValue.length < 2) {
      event.preventDefault();
      document.getElementById("facNameLabel").innerHTML = facErrorText + inputLengthError;
      document.getElementById("facNameLabel").style.color = "red";
  }

  if (facNameValue == "Jen" ||
      facNameValue == "Behdad" ||
      facNameValue == "Chris" ||
      facNameValue == "Christian" ||
      facNameValue == "Josh"
  ){
     //Input is good, do nothing.
  } else {
      event.preventDefault();
      document.getElementById("facNameLabel").innerHTML = facErrorText + facNameError;
      document.getElementById("facNameLabel").style.color = "red";
  }

}