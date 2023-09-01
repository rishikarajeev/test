function validateForm() {
  
    let username = document.userForm.username.value;
    let password =  document.userForm.password.value;  
    if (username == "" || username==null  ) {      
      alert("Username shouldnt be empty");  
      return false  
    }
    else if(password.length<6)
    {
        alert("password length shud be less than 6");     
        return false
    }
  
  }