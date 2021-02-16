var base64;
initUpload = ()=>{

    $("#uploadStory").click(function(){

        let fd = new FormData();
        let description = $('#about').val();
        let userId = $('#userId').val();

        fd.append('image',base64);
        fd.append('userid',userId);
        fd.append('description',description);

        $.ajax({
            url: 'http://localhost:8080/uploadStory',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(response){
          	 
            	  alert('Story posted Successfully');
            },
            error:function(response)
            {
            }
        });
        
    });
    $("#uploadEvent").click(function(){

        let fd = new FormData();
        let description = $('#about').val();
        let userId = $('#userId').val();
        let name = $('#eventName').val();
        let date = $('#eventDate').val();
        let venue = $('#eventVenue').val();
        let created_by = $('#username').val();
     
        fd.append('image',base64);
        fd.append('created_by',created_by)
        fd.append('name',name)
        fd.append('date',date)
        fd.append('venue',venue)
        fd.append('userid',userId);
        fd.append('description',description);

        $.ajax({
            url: 'http://localhost:8080/uploadEvent',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(response){
          	 
            	  alert('Event posted Successfully');
            },
            error:function(response)
            {
            }
        });
        
    });
}
function getStories(){
	  $.ajax({
        url: 'http://localhost:8080/getStories',
        type: 'get',
        contentType: false,
        processData: false,
        success: function(response){
      	 let textArea = '<div class="form-group"><label for="exampleFormControlTextarea1">About</label><textarea class="form-control" id="about" rows="3"></textarea></div>'
       	 let ImageInput = '<div><div class="row"><div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"><div class="input-group image-preview"><input type="text" class="form-control image-preview-filename" disabled="disabled"><span class="input-group-btn"><button type="button" class="btn btn-default image-preview-clear" style="display:none;"><span class="glyphicon glyphicon-remove"></span> Clear</button><div class="btn btn-default image-preview-input"><span class="glyphicon glyphicon-folder-open"></span><span class="image-preview-input-title">Browse</span><input type="file" accept="image/png, image/jpeg, image/gif" name="input-file-preview"/> </div></span></div></div></div>';
      	 let uploadModal = '<button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  data-toggle="tooltip" data-placement="top" title="click to add new post">&#10010</button><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Post Story</h5></div><div class="modal-body">'+ImageInput+textArea+'</div><div class="modal-footer"><button type="button" id="uploadStory" class="btn btn-info">Upload</button></div></div></div></div>';
      	 let description;
      	 let image;
      	  
      	 $('#container').html(uploadModal);
      	 loadImageConfig();
      	 initUpload();
      	 for(var i=0;i<response.length;i++){
      		 description = response[i].description;
      		 image = response[i].image;
      	 $('#container').append('<div class="thumbnail"><div class="row"><div class="col-md-6"><a href="#"><img  class="img-responsive" style="max-height:400px;" src="'+image+'"> </a> </div><div class="col-md-6"> <div class="caption"><h2>Title</h2><hr><p>'+description+'</p><hr><p class="caption-footer"> <a href="#" class="btn"><span class="glyphicon glyphicon-heart"></span> Like it</a><a href="#" class="btn"><span class="glyphicon glyphicon-share"></span> Share it</a></p></div></div></div></div>')
      	 }
        },
        error:function(response)
        {
        }
    });
	}

function getEvents(){
	  $.ajax({
      url: 'http://localhost:8080/getEvents',
      type: 'get',
      contentType: false,
      processData: false,
      success: function(response){
    	 let about = '<div class="form-group"><label for="exampleFormControlTextarea1">Description</label><textarea class="form-control" id="about" rows="3"></textarea></div>'
         let venue = '<div class="form-group"><label for="exampleFormControlTextarea1">Venue</label><input class="form-control" id="eventVenue" rows="3"></div>'
         let name = '<div class="form-group"><label for="exampleFormControlTextarea1">Event Name</label><input class="form-control" id="eventName" rows="3"></div>'
         let date = '<div class="form-group"><label for="exampleFormControlTextarea1">Date</label><input type="date" class="form-control" id="eventDate" rows="3"></div>'
         let ImageInput = '<div><div class="row"><div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"><div class="input-group image-preview"><input type="text" class="form-control image-preview-filename" disabled="disabled"><span class="input-group-btn"><button type="button" class="btn btn-default image-preview-clear" style="display:none;"><span class="glyphicon glyphicon-remove"></span> Clear</button><div class="btn btn-default image-preview-input"><span class="glyphicon glyphicon-folder-open"></span><span class="image-preview-input-title">Browse</span><input type="file" accept="image/png, image/jpeg, image/gif" name="input-file-preview"/> </div></span></div></div></div>';
    	 let uploadModal = '<button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  data-toggle="tooltip" data-placement="top" title="click to add new post">&#10010</button><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Add Event</h5></div><div class="modal-body">'+ImageInput+name+venue+date+about+'</div><div class="modal-footer"><button type="button" id="uploadEvent" class="btn btn-info">Upload</button></div></div></div></div>';
    	 let description;
    	 let image;
    	 let created_by;
    	  
    	 $('#container').html(uploadModal);
    	 loadImageConfig();
    	 initUpload();
    	 for(var i=0;i<response.length;i++){debugger
    		 description = response[i].description;
    		 image = response[i].image;
    		 venue = response[i].venue;
    		 date = response[i].date;
    		 name = response[i].name;
    		 created_by = response[i].created_by;
    		 
    	 $('#container').append('<div class="max-w-sm w-full lg:max-w-full lg:flex" style="margin: 30px;"><img class="img-responsive" style="width:368" src="'+image+'"><div  class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"><div class="mb-8"><p class="text-sm text-gray-600 flex items-center"><svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" /></svg> Students only</p><div class="text-gray-900 font-bold text-xl mb-2" style="font-size:16px;">'+name+'</div><p class="text-gray-700 text-base"  style="font-size:13px;">'+description+'</p><p class="text-gray-700 text-base"  style="font-size:13px;">'+venue+'</p></div><div class="flex items-center"><img class="w-10 h-10 rounded-full mr-4" src="resources/logo.jpg" alt="fgips login"><div class="text-sm"><p class="text-gray-900 leading-none">'+created_by+'</p><p class="text-gray-600">'+date+'</p></div></div></div></div>')
    	 }
      },
      error:function(response)
      {
      }
  });
	}
$(document).ready(function(){
	getStories();	
	
});
$(window).scroll(function(){
	toScroll = $(document).height()-150;
//	debugger;
	if ( $(this).scrollTop() > toScroll ) {
		console.log('hellp');
	}
});

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

function loadImageConfig() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            base64 = e.target.result;
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
}
$("#logout").click(function(){
 $('#logoutForm').submit();
});
$("#home").click(function(){
	 getStories();
	});

$("#event").click(function(){
	 getEvents();
	});