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


      var aa = document.getElementById("lname").value;


      if(aa==""){
          
          document.getElementById("ln_message").innerHTML="**Please fill Username";
          return false;
      }
      
      if(aa.match(correct_way))
      true;
      else{
     
         document.getElementById("ln_message").innerHTML="**Only Alphabets are allowed";
        return false;    
      }
  
      if(aa.length<3){
         
          document.getElementById("ln_message").innerHTML="**User name must be 3 character";
          return false;
      }
  
      if(aa.length>30){
         
          document.getElementById("ln_message").innerHTML="**User name must be less then 30 character";
          return false;
        } 


        var e = document.forms.gender;
        for(i=0; i<e.length; i++ ) {
            if(e[i].checked==true)
            return true;
        }
          document.getElementById("g_message").innerHTML="**Please select one";
        return false;

  
      var cel = document.getElementById("phone").value;

      if(cel == " "){
          document.getElementById("contact_message").innerHTML="** Please enter contact no";
          return false;
      }

      if(isNaN(cel)){
        document.getElementById("contact_message").innerHTML="** Only digits are allowed";
        return false;
      }

      
      if(cel.length<10){
        document.getElementById("contact_message").innerHTML="** Enter a valid contact no";
        return false;
      }

      if(cel.length>10){
        document.getElementById("contact_message").innerHTML="** Enter a valid contact no";
        return false;
      }

      if((cel.charAt(0)!=9) && (cel.charAt(0)!=8)  && (cel.charAt(0)!=7) && (cel.charAt(0)!=6)){
        document.getElementById("contact_message").innerHTML="**Invalid contact no...";
        return false;  
      }   
      
     }

    