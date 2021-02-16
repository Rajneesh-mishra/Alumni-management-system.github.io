
  <html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Home</title>
  <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/starter-template/">
  <link rel="shortcut icon" href="resources/logo.png"></head>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.css" rel="stylesheet">
  	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  

  <!-- Custom styles for this template -->
  <link href="css/home.css" rel="stylesheet">
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  
  <script  type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Roboto&display=swap" rel="stylesheet">
	    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>

<style>
.navbar {
    position: fixed;
 }
 #container
 {
     margin: 50;
 }
 .bg-inverse {
 background-color: #cfd6ea !important;
    border-color: transparent !important;
}
.btn-primary {
    position: fixed;
    top: 100;
    /* width: auto; */
    left: 1;
    border-radius: 29px;
    font-size: 20;
    font-family: lato;
    font-weight: 200;
}

.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
    color: #fff;
    background-color: transparent;
    cursor: pointer !important;
    margin-right:50;
    font-size:20;
}


.image-preview-input {
    position: relative;
	overflow: hidden;
	margin: 0px;    
    color: #333;
    background-color: #fff;
    border-color: #ccc;    
}
.image-preview-input input[type=file] {
	position: absolute;
	top: 0;
	right: 0;
	margin: 0;
	padding: 0;
	font-size: 20px;
	cursor: pointer;
	opacity: 0;
	filter: alpha(opacity=0);
}
.image-preview-input-title {
    margin-left:2px;
}
.form-control image-preview-filename
{
	width:100px !important;
}
</style>
</head>
<body>
<input type="hidden" id="userId" value="${userId}">
<input type="hidden" id="username" value="${username}">

  <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
 <img style="margin-right:15;" src="http://www.fgips.in/admin/images/other/Picture1.png" width="180" height="65" class="default-logo" alt="GuestTek">
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="home">Home <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" href="#" id="event">Event <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" href="#">News<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link"  href="#">${username}<span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item active">
       
        <a class="nav-link"  id="logout">Logout &nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i> <span class="sr-only">(current)</span></a>

 
      </li>
      
    </ul>
    
    
    </div>
  </nav>
 <div  id="container">
 <div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
  </div><!-- /.container -->
  
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<!--   <script src="js/bootstrap.min.js"></script> -->
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <script src="js/ie10-viewport-bug-workaround.js"></script>
  <form id="logoutForm" class="nav-link"  action="http://localhost:8080/logout" method="post"></form>
</body>
</html>
 <script src="js/home_page.js"></script>
  <script type="text/javascript"> 
        window.history.forward(); 
        function noBack() { 
            window.history.forward(); 
        } 
    </script> 
