const form  =  document.getElementById('myForm');

form.addEventListener('submit' ,function(e){
    
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const errorMassage = document.getElementById('error');
    if (!email.includes("@")){
        errorMassage.textContent ='invalid sytax'

    }

    if (email === "" || password===""){
       errorMassage.textContent = 'All fields are required'
    }else{
        errorMassage.textContent = 'Sucssess'
        
    }
});




    


