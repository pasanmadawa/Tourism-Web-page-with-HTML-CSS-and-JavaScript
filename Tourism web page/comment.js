var lableError = document.getElementById('label-error');
var textError = document.getElementById('text-error');
var commentError = document.getElementById('comment-error');
const massage = document.getElementById('massage');
const comment= document.getElementById('comment');
const form = document.getElementById('form-id');
const error = document.getElementById('error');

function validate() {
    var massage = document.getElementById("massage").value;
    var comment = document.getElementById("comment").value;
    var valid = false;
    var x = document.myform.option;

    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            valid = true;
            break;
        }
    }
    if(valid){
        lableError.innerHTML=""
    }else{
        lableError.innerHTML="Response required."
        return false;
    }
    
}

form.addEventListener('submit',(e) =>{
    let massages = []
    if(massage.value === '' || massage.value == null){
        massages = textError.innerHTML = 'Response required.';
    
    }else{
        textError.innerHTML = '';
    }

    if(comment.value === '' || massage.value == null){
        massages = commentError.innerHTML = 'Response required.';

    }else{
        commentError.innerHTML = '';
    }

    if(massages.length > 0){
    e.preventDefault()
    error.innerText = massages.join(',')
    } else{
    document.getElementById('error').style.display = 'none'; //https://docs.user.com/how-to-create-pop-ups-with-a-thank-you-message//
    document.getElementById('error-1').style.display = 'block'; 
    }
})


  
  
  