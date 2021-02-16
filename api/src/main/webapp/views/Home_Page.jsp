
<!DOCTYPE html>
<html>
<head>
	<title>Home Page</title>
	<link rel="stylesheet" type="text/css" href="css/home_style.css">
	<link rel="stylesheet" type="text/css" href="css/menubarstyle.css">
	<link rel="stylesheet" type="text/css" href="css/stories.css">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Roboto&display=swap" rel="stylesheet">
	    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</head>
<body>
	<div class="cname">
		feroze gandhi institute of professional studies
		<label id="username">${username}</label>
		 <input type="hidden" id="userId" value="${userId}">
	</div>
	<div class="menu-bar">
	<ul>
		<li class="active"><a href="#">Home </a><i class="fa fa-home"></i></li>
		<li><a href="#">Photos </a><i class="fa fa-picture-o"></i></li>
		<li><a href="#">News </a><i class="fa fa-newspaper-o" ></i></li>
		<li><a href="#">Event </a><i class="fa fa-calendar" ></i></li>
		<li><a href="#">Survey </a><i class="fa fa-server" ></i></li>
		<li><a href="#">Search </a><i class="fa fa-search" ></i></li>
		<li><a href="#">Logout </a><i class="fa fa-sign-out"></i></li> 

	</ul>
	</div>
	<div class="menu-wrap">
		<input type="checkbox" class="toggler">
		<div class="hamburger">
			<div></div>
		</div>
		<div class="menu">
			<div>
				<div>
					<ul>
						<li><a href="#">Help</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Credit</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="story"> 
		   <textarea id="name" placeholder="Write Your Text Here"></textarea>
			 <input type="file" id="file" onchange="readURL(this);" accept="image/*">
			 <label for="file">Add Image &nbsp;<i class="fa fa-picture-o"></i></label>
			 <button type="button" id="upload" class="upload-btn">upload&nbsp;<i class="fa fa-upload"></i></button>
	</div>
	
	 <!--      <input type='file' onchange="readURL(this);" />-->
	  <img id="blah" src="#" alt="your image" />
    <div id="container">
    </div>
    </body>
</html>

<script src="js/home_page.js"></script>
