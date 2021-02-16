<!DOCTYPE html>
<html>
    <head>
        <title>login page</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="shortcut icon" href="resources/logo.png"></head>
    <body>
     
        <div class="wallpaper">
         <img src="resources/6.jpg"> 
        </div>
        <div class="container">
            <div class="thought">OUR STUDENTS GET THE TOP opportunities</div>
           </div> 
            <div class="form-box">
         <div class="button-box">
             <div id="btn"></div>
             <button type="button" class="toggle-btn" onclick="Student()">Student</button>
             <button type="button" class="toggle-btn" onclick="Staff()">Staff</button>         
            </div> 
            <img src="resources/logo.jpg" class="center">
     <form id="Student" class="input-group" action="http://localhost:8080/welcome" method="post">
         <input type="text" class="input-field" name="uname" placeholder="User Id" required>
         <br><br>
         <input type="password" class="input-field" name="password" placeholder="Enter Password" required>
         <label id="invalid">${error}</label>
         <br><br> <br><input type="submit" class="submit-btn" value="Log In">
         <br> <a class="forget" href="jsp/registration-form.jsp">Forgotten Password</a> 
          
        </form>
        <form id="Staff" class="input-group" action="http://localhost:8080/welcome" method="post">
            <input type="text" class="input-field" name="uname" placeholder="User Id" required>
            <br><br>
            <input type="password" class="input-field"  name="password" placeholder="Enter Password" required>
            <label id="invalid">${error}</label>
            <br><br> <br><input type="submit" class="submit-btn" value="Log In">
            <br> <a class="forget" href="registration-form.jsp">Forgotten Password</a> 
           </form>
     </div>
    
         <p>Welcome To Alumni Web Page</p>
       
       <div class="container-right">
        <div class="thought-right">Your limitation — it's only your imagination</div>
       </div> 
       <script>
           var x=document.getElementById("Student");
           var y=document.getElementById("Staff");
           var z=document.getElementById("btn");
           function Staff()
           {
           x.style.left="-400px";
           y.style.left="10px";
           z.style.left="110px";
           }
           function Student()
           {
           x.style.left="10px";
           y.style.left="400px";
           z.style.left="0px";
           }
       </script>
    </body>
</html>
 <script type="text/javascript"> 
        window.history.forward(); 
        function noBack() { 
            window.history.forward(); 
        } 
    </script> 