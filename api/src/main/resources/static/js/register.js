$(document).ready(function(){
$("#sub").click(function(e)
{
	var MyForm = $("#register").serializeJSON();
$.ajax({
    contentType: 'application/json',
    data: JSON.stringify(MyForm),
    success: function(data){
    	 $("#register").trigger("reset");
    	alert("Success New User Added Successfully");    	
    },
    error: function () {
     	alert("Failed to save Please try after some time");
    	 },
    processData: false,
    type: 'POST',
    url: 'http://localhost:8080/saveuser'
});
});
});