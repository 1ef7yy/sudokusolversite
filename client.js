let inputs = document.getElementsByTagName('input');

// focusing on next element onkeyup

for (let input of inputs){
    input.onkeyup = function(evt) {
    if (input.className == 'bottom right'){
        var next = input.parentElement.nextElementSibling.firstElementChild;
    } else {
        var next = input.nextElementSibling;
    } 
    next.focus();      
    }  
}