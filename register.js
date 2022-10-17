function myfun()
{

    var correct_way = /^[A-Za-z]+$/;
    
    var a = document.getElementById("name").value;


    if(a==""){
        document.getElementById("n_message").innerHTML="**Please fill Username";
        return false;
    }
    
    if(a.match(correct_way))
    true;
    else{
      alert("**Only Alphabets are allowed")
       document.getElementById("n_message").innerHTML="**Only Alphabets are allowed";
      return false;    
    }

    if(a.length<3){
        document.getElementById("n_message").innerHTML="**User name must be 3 character";
        return false;
    }

    if(a.length>30){
        document.getElementById("n_message").innerHTML="**User name must be less then 30 character";
        return false;
      } 


      var b = document.getElementById("password").value;

      if(b==""){
          document.getElementById("p_message").innerHTML="**Please Fill Password";
          return false;
      }

      if(b.length<6){
        document.getElementById("p_message").innerHTML="**Password length must be 6 characters.";
        return false;
      }

      if(b.length>32){
        document.getElementById("p_message").innerHTML="**Password length must be less then 32 characters.";
        return false;
      }

      var c = document.getElementById("c_password").value;
      if(b!=c){
        document.getElementById("c_message").innerHTML="**Password did not match";
        return false; 
      }


      var d = document.getElementById("phone").value;

      if(d == ""){
          document.getElementById("contact_message").innerHTML="** Please enter contact no"
          return false;
      }

      if(isNaN(d)){
        document.getElementById("contact_message").innerHTML="** Only digits are allowed";
        return false;
      }

      
      if(d.length<10){
        document.getElementById("contact_message").innerHTML="** Enter a valid contact no";
        return false;
      }

      if(d.length>10){
        document.getElementById("contact_message").innerHTML="** Enter a valid contact no";
        return false;
      }

      if((d.charAt(0)!=9) && (d.charAt(0)!=8)  && (d.charAt(0)!=7) && (d.charAt(0)!=6)){
        document.getElementById("contact_message").innerHTML="**Invalid contact no...";
        return false;  
      }         


    }

    function check(){
      var s = confirm("are you want to submit");
      if(s==true)
      {
        return true;
      }
      else{
        return false;
      }

    }