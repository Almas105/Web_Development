let b=document.querySelector('button')
b.addEventListener('click',msg);

function msg(){
    var text=prompt("Enter the name:");
    b.textContent="The name"+text;
}

