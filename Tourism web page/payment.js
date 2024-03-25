var nameError = document.getElementById("name_error");
var numberError = document.getElementById("number_error");
var emailError = document.getElementById("email_error");
var cardNameError = document.getElementById("cardName_error");
var creditNumberError = document.getElementById("creditNumber_error")
var cvvError = document.getElementById("cvv_error");

// validate name
function validateName(){
    var inputName = document.getElementById("name_errorInput").value;

    if(inputName.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z] */)){
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}
// validate phonr number
function validateNumber(){
    var inputNumber = document.getElementById("number_errorInput").value;

    if(inputNumber == 0){
        numberError.innerHTML = "Phone number is required";
        return false;
    }
    if(!inputNumber.match(/^[0-9]{10}$/)){
        numberError.innerHTML="Phone number Invalid";
        return false;
    }
    numberError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}
// validate email
function validateEmail(){
    var inputEmail = document.getElementById("email_errorInput").value;

    if(inputEmail.length == 0){
        emailError.innerHTML = "Email is required"
        return false;
    }
    if(!inputEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]/)){
        emailError.innerHTML = "Email Invalid"
        return false;
    }
    emailError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}
// validate card name
function validateCardName(){
    var inputCardName = document.getElementById("cardName_errorInput").value;

    if(inputCardName.length == 0){
        cardNameError.innerHTML = "Name is required";
        return false;
    }
    if(!inputCardName.match(/^[A-Za-z]*\s{1}[A-Za-z] */)){
        cardNameError.innerHTML = "write full name";
        return false;
    }
    cardNameError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}
// validate card number
function validateCardNumber(){
    var inputCardNumber = document.getElementById("cardNumber_errorInput").value;

    if(inputCardNumber == 0){
        creditNumberError.innerHTML = "Credit number is required";
        return false;
    }
    if(!inputCardNumber.match(/^4[0-9]{12}(?:[0-9]{3})?$/)){
        creditNumberError.innerHTML="Credit number Invalid";
        return false;
    }
    creditNumberError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}


//validate cvv
function validateCvv(){
    var inputCvvNumber = document.getElementById("cvv_errorInput").value;

    if(inputCvvNumber == 0){
        cvvError.innerHTML = "Credit number is required";
        return false;
    }
    if(!inputCvvNumber.match(/^[0-9]{3}$/)){
        cvvError.innerHTML = "CVV Invalid";
        return false;
    }
    cvvError.innerHTML = "<i class='bx bx-check-circle'></i>";
    return true;
}

function validateForm(){
    if (!validateName() || !validateNumber() || !validateCardName() || !validateCardNumber() || !validateCvv() || !validateEmail()) {
        alert("Please fill the details.");
    }
    else{
        alert("Payment Sccessful")
        window.location.href = "web_cw.html";
    }
}


// cancle button



let cancle_payment = document.querySelector(".cancle_button");
cancle_payment.addEventListener("click",validateCancle);



function validateCancle(){
    let result = confirm("Do you want to cancle the payment");
    if(result == true){
        window.location.href = "web_cw.html"
    }
    

}

// image = document.getElementById("imgPay1");

// function increaseSize(){
    
//     image.style.transform = "scale(1.5)";
//     image.style.transition = "transform 0,25s ease";
    
// }

// function descreaseSize(){
//     if(image. > ){
//         image.style.transform = "scale(1)";
//         image.style.transition = "transform 0,25s ease";
     
//     }
   
// }




