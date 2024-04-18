function validateInput(){
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();
    let errorMessage = document.getElementById("error-message");

//Validatiom logic 
if(inputValue === ""){
    //Invalid input, apply shake effect and display error message
    inputField.classList.add("shake");
    errorMessage.style.visibility = "visible";

    //Remove the shake class and hide the error message after the animation completes
    setTimeout(function () {
        inputField.classList.remove("shake");
        errorMessage.style.visibility = "visible";
    }), 500;
} else{
    // Valid input proceed with the logic
    alert("Valid input!")
}

}
