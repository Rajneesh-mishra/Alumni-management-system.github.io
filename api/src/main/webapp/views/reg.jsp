<!DOCTYPE html>
<html>
    <head>
        <title>Registration page</title>
  <link rel="stylesheet" type="text/css" href="css/registration-style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.serializeJSON/2.9.0/jquery.serializejson.min.js"></script>
  
  <script src="js/register.js"></script>
</head>
    <body>
      
    <div class="cname">     
      feroze gandhi institute of professional studies
      <div class="heading">alumni registration form</div>
  </div>
  
      <div class="register"> 
      <form id="register" onsubmit="return false;">
          <h2>Register Here</h2>
          <div class="left">
           <input type="hidden" name="id" value="0">
        <label> First Name :</label><br>
        <input type="text" name="fname" id="name" placeholder="Enter your first name"><br><br>
        <label> Father's Name :</label><br>
        <input type="text" name="fathername" id="name" placeholder="Enter your Father's name"><br><br>
        <label> E-mail :</label><br>
        <input type="email" name="email" id="name" placeholder="Enter your E-mail"><br><br>
        <label> Mobile Number :</label><br>
        <select id="ph" name="isdCode">
            <option>+91</option>
            <option>+92</option>
            <option>+93</option>
            <option>+94</option>
         </select>
         <input type="number" name="number" id="num" placeholder="Enter your mobile number"><br><br>
         <label> Course :</label>
         <input type="radio" name="course" id="Course" value="BCA" checked><span id="Course">&nbsp;BCA</span>&nbsp;&nbsp;
         <input type="radio" name="course" id="Course"  value="BBA"  ><span id="Course">&nbsp;BBA</span>&nbsp;&nbsp;<br><br>
         <label> Year Of Passing :</label>
         <select id="ph" name="yrofpassing">
             <option>2020</option>
             <option>2021</option>
             <option>2022</option>
             <option>2023</option>        
             <option>2024</option>
             <option>2025</option>
             <option>2026</option>
             <option>2027</option>
             <option>2028</option>
             <option>2029</option>
             <option>2030</option>
            </select>
          <br><br> 
        </div>
          <div class="right">
            <label> Last Name :</label><br>
        <input type="text" name="lname" id="name" placeholder="Enter your last name"><br><br>
        
          <label> Address :</label><br>
          <input type="text" name="address" id="name" placeholder="Street Address"><br><br>
          <input type="text" name="city" id="name" placeholder="City"><br><br>
          <input type="number" name="pin" id="name" placeholder="Pincode"><br><br>
          <label> Region :</label>
          <select id="region" name="region">
              <option>Andaman and Nicobar Islands</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option> 
              <option>Bihar</option> 
              <option>Chandigarh</option>
              <option>Chhattisgarh</option>
              <option>Dadra & Nagar Haveli and Daman & Diu</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Jammu and Kashmir	</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Puducherry</option>
              <option>Punjab</option>
              <option>Rajasthan</option> 
              <option>Sikkim</option> 
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option selected>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          <br><br>
        
         <label> Gender :</label>
         <input type="radio" name="gender" id="male"  value="male" checked><span id="male">&nbsp;Male</span>&nbsp;&nbsp;
         <input type="radio" name="gender" value="female" id="male" ><span id="male">&nbsp;female</span>&nbsp;&nbsp;
         <input type="radio" name="gender" value="others" id="male" ><span id="male">&nbsp;Others</span>&nbsp;&nbsp;
         <br><br>
          <label> Account type :</label>
          <input type="radio" name="acctype" value="student" id="student" checked><span id="student">&nbsp;Student</span>&nbsp;&nbsp;
          <input type="radio" name="accttype" value="staff" id="student" ><span id="student">&nbsp;Staff</span>&nbsp;&nbsp;
          <input type="radio" name="acctype" value="admin" id="student" ><span id="student">&nbsp;Admin</span>&nbsp;&nbsp; 
         <br> <br>
         </div>
         <button id="sub">Submit</button>      
          </form>
      </div>
    </body>
</html>