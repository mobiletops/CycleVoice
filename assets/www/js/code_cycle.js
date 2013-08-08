var WebServiceUrl = "http://";
var lat='';
var lng='';
var firstname_display='';
var address_display='';
var email_display='';
var mobileno_display='';
var city_contact_display='';
var location_find_display='';
var taxi_number='';
var taxi_company='';
var what_happened='';
var day_history_array=new Array();
var happened_history_array=new  Array();
var address_history_array = new Array();

function ondeviceready()
{
	document.addEventListener("deviceready",indexcheck, false);
	alert("Device Ready");
	
	 
	navigator.geolocation.getCurrentPosition (function (pos)
	{
			 lat = pos.coords.latitude;
			 lng = pos.coords.longitude;
	});
}
function indexcheck()
{
	  document.addEventListener("backbutton", onBackButton, false);
	  histroylog();
	
}
function reg()
{
	 $("#letsride").on('click',function()
	 {
		  alert("hello-345");
		  window.location="displayDetails.html";
		  
	 });
}
function displayRegistration()
{
//	window.location="displayDetails.html";
	
    alert("Call display");
	
	email=$('#email').val();
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if($('#firstname').val()=='')
	{
		alert("First Name  Should not be blank.");
	}
	else if($('#address').val()=="") 
	{ 
		alert("Address Should not be blank.");
	}
	else if($('#email').val()=='')
	{
		alert("Email address  Should not be blank.");
	}
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		alert("Not a valid e-mail address.");
	}
	else if($('#mobile').val()=='')
	{
		alert("Mobile Field  Should not be blank.");
	}
	else
	{	
		var location='';
		
		if($("#chk_location").is(":checked"))
		{
			location="checked";
		}
		else
		{
			location="unchecked";
		}
		setValueForRegistration();
	}	
}
function setValueForRegistration()
{
		var name = $('#firstname').val();var address=$('#address').val();var email=$('#email').val();var mobile=$('#mobile').val();
		
		firstname_display=name;
		address_display=address;
		email_display=email;
		mobileno_display=mobile;
		
		location_find_display=location;
		
		console.log(name);
		console.log(address);
		console.log(email);
		console.log(mobile);
		
		console.log(location);
		
		alert($('#firstname_display'));
		
		alert(firstname_display);
		
		
		//setValue(firstname_display);
			
			/*if(location=="checked")
			{
				$('#chk_location_display').prop('checked', true);
			}
			else
			{
				$('#chk_location_display').prop('checked', false);
			}	*/
			/* $('#subbtn').on('click', function() 
			 {
				 alert("registration");  
				 
				   $.ajax({
					contentType: "application/json; charset=utf-8",
		            dataType: "json",
					url : ""+WebServiceUrl+"method=register",
					beforeSend: function(){$.mobile.showPageLoadingMsg(true);},
		            complete: function(){$.mobile.hidePageLoadingMsg();},	
				    success : function(data) 
				    {
				    	if(data.Register=="TRUE"){showAlert("Registration Successfully", "Alert !");
				    	  
						  	$.mobile.defaultPageTransition = 'slide';
						  	$.mobile.changePage("displayDetails.html");
				    	}
				    	else
				    	{
				    		
				    	}	
				    }
			    });
			 });*/
	
	/*window.location="displayDetails.html";
	*/
	
	  $('#firstname_display').val(name);
	  $('#address_display').val(address);
	  $('#email_display').val(email);
	  $('#mobile_display').val(mobile);
	  
	  window.location="displayDetails.html";
}
function complaint()
{

	if($('#taxicompany_complaint').val()=='')
	{
		alert("Taxi Company Name Field  Should not be blank.");
	}
	else if($('#taxino_complaint').val()=='')
	{
		alert("Taxi Number   Field  Should not be blank.");
	}
	else if($('#whathappened_complaint').val()=='')
	{
		alert("Select Field Should not be blank.");
	}
	else
	{	
	/*if(internetconn()==true)
	{
		//var name = $('#name').val();var email=$('#reg_email').val();var password=$('#password').val();var contact=$('#contact').val();
	    $.ajax({
			contentType: "application/json; charset=utf-8",
            dataType: "json",
			url : ""+WebServiceUrl+"method=",
			beforeSend: function(){$.mobile.showPageLoadingMsg(true);},
            complete: function(){$.mobile.hidePageLoadingMsg();},	
		    success : function(data) 
		    {
		    	if(data.Register=="TRUE"){showAlert("Registration Successfully", "Alert !");
				  	$.mobile.defaultPageTransition = 'slide';
				  	$.mobile.changePage("");
		    	}
		    	else
		    	{
		    		
		    	}	
		    	
		    }
	    });
	}else{showAlert("Please connect your device to Internet.","No Network Connectivity");}	
	}*/
		
		setvalueForComplaint();
   }
}

function setvalueForComplaint()
{
	 $('#label1').val(name);
	 $('#label2').val(name);
	 window.location="complaint2.html";
}



function onBackButton() 
 {
	if($.mobile.activePage.is('#homepage'))
	{
       // e.preventDefault();
        navigator.app.exitApp();
    }
}
function errorCB(){}

function internetconn()
{
    var _check=true;
    
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
  
    if(networkState==="unknown" || networkState==="none")
    {
        _check=false;
        showAlert();
        return _check;
    }
    else {
        return true;
    }
}
//for alert function
function alertpop(){alert("hello-1");}

function histroylog()
{
	
 alert($("#historylog"));
	$("#historylog").append('<div class="history_block">'+
		    '<div class="history_block_right"><img src="images/thumb_icon.png" width="44" height="39" alt="" />'+
		      '<p>4 days ago</p>'+
		    '</div>'+
		    '<div class="history_block_left">'+
		      '<h1>Driver obstructing bike lane</h1>'+
		      '<p class="discraption"><img src="images/history_streetaddress_icon.png" width="14" height="21" alt="" /><span>1234 Main St New York, NY 11110</span></p>'+
		      '<div class="clear"></div>'+
		    '</div>'+
	  '</div>');
}


//for complaint


/*$(document).on('pageinit', '#complaint', function() 
{
		$('#continueBtn_complaint').on('click', function() 
		{
			 $.mobile.defaultPageTransition = 'slide';
			 $.mobile.changePage("complaint2.html");
			 
			// initialize(); 
			 alert($('#taxi_number').val());
			 
			 taxi_company = $('#taxi_company').val();
			 taxi_number = $('#taxi_number').val();
			 what_happened = $('#select_happened').val();
		});
});*/















/*
//for registration
function display()
{
	email=$('#email').val();
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if($('#firstname').val()=='')
	{
		showAlert("First Name  Should not be blank.","Alert !");
	}
	else if($('#address').val()=="") 
	{ 
	     showAlert("Address Should not be blank.","Alert !");
	}
	else if($('#email').val()=='')
	{
		showAlert("Email address  Should not be blank.","Alert !");
	}
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		showAlert("Not a valid e-mail address.","Alert !");
	}
	else if($('#mobile').val()=='')
	{
		showAlert("Mobile Field  Should not be blank.","Alert !");
	}
	else
	{	
		var contactCity='';
		var location='';
		if($("#chk_contact").is(":checked"))
		{
			contactCity="checked";
		}
		else
		{
			contactCity="unchecked";
		}
		if($("#chk_location").is(":checked"))
		{
			location="checked";
		}
		else
		{
			location="unchecked";
		}
		
		var name = $('#firstname').val();var address=$('#address').val();var email=$('#email').val();var mobile=$('#mobile').val();
		
		firstname_display=name;
		address_display=address;
		email_display=email;
		mobileno_display=mobile;
		city_contact_display=contactCity;
		location_find_display=location;
		
		console.log(name);
		console.log(address);
		console.log(email);
		console.log(mobile);
		console.log(contactCity);
		console.log(location);
		$.mobile.changePage("displayDetails.html");
	 
	}
}


$(document).on('pageinit', '#index', function() 
{
	alert("hello");
	historylog();
	                  
	$("#historylog").append('<div class="history_block">'+
    '<div class="history_block_right"><img src="images/thumb_icon.png" width="44" height="39" alt="" />'+
      '<p>4 days ago</p>'+
    '</div>'+
    '<div class="history_block_left">'+
      '<h1>Driver obstructing bike lane</h1>'+
      '<p class="discraption"><img src="images/history_streetaddress_icon.png" width="14" height="21" alt="" /><span>1234 Main St New York, NY 11110</span></p>'+
      '<div class="clear"></div>'+
    '</div>'+
  '</div>');
	
	
	 
	 $('#test').on('click', function() 
	 {
		 alert("registration call....");
		 $.mobile.defaultPageTransition = 'slide';
		 $.mobile.changePage("registration.html");
	 });
	
	
});

$(document).on('pageinit', '#map-page', function() 
{
	 initialize(); 
	 var currentdate = new Date(); 
	 $('#label1').html(taxi_company +","+ taxi_number);
	 $('#label2').html(what_happened);
	 $('#date').html(currentdate.getDate());
	 $('#time').html(currentdate.getHours() + ":" + currentdate.getMinutes() + ":"+ currentdate.getSeconds());
	 
	 $('#editcomplaint').on('click', function() 
	 {
         alert("edit complaint");
		 $.mobile.defaultPageTransition = 'slide';
		 $.mobile.changePage("editcomplaint.html");
		 
	 });
	
	 
	 
});
$(document).on('pageinit', '#displaypage', function() 
{
		    $('#firstname_display').val(firstname_display);
			$('#address_display').val(address_display);
			$('#email_display').val(email_display);
			$('#mobile_display').val(mobileno_display);
			
			if(city_contact_display=="checked")
			{
				$('#chk_contact_display').prop('checked', true);
			}
			else
			{
				$('#chk_contact_display').prop('checked', false);
			}	
			
			if(location_find_display=="checked")
			{
				$('#chk_location_display').prop('checked', true);
			}
			else
			{
				$('#chk_location_display').prop('checked', false);
			}	
			 $('#subbtn').on('click', function() 
			 {
				 alert("registration");  
				 
				   $.ajax({
					contentType: "application/json; charset=utf-8",
		            dataType: "json",
					url : ""+WebServiceUrl+"method=register",
					beforeSend: function(){$.mobile.showPageLoadingMsg(true);},
		            complete: function(){$.mobile.hidePageLoadingMsg();},	
				    success : function(data) 
				    {
				    	if(data.Register=="TRUE"){showAlert("Registration Successfully", "Alert !");
				    	  
						  	$.mobile.defaultPageTransition = 'slide';
						  	$.mobile.changePage("displayDetails.html");
				    	}
				    	else
				    	{
				    		
				    	}	
				    }
			    });
			 });
});

function initialize()
{
	alert(lat);
	alert(lng);
    var mapCenter = new google.maps.LatLng(lat, lng),
    myOptions = 
    {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    },
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
    new google.maps.Marker ( 
	  { 
	    map : map, 
	    animation : google.maps.Animation.DROP,
	    position : mapCenter 
	  });  
}

function historylog()
{
	 $.ajax({
			contentType: "application/json; charset=utf-8",
            dataType: "json",
			url : ""+WebServiceUrl+"history=",
			beforeSend: function(){$.mobile.showPageLoadingMsg(true);},
            complete: function(){$.mobile.hidePageLoadingMsg();},	
		    success : function(data) 
		    {
		    	day_history_array.push();
		    	happened_history_array.push();
		    	address_history_array.push();
		    }
	    });
}
function edit_complaint()
{
	
	var taxi_company_update = $("#taxi_company_edit").val();
	var taxi_number_update = $("#taxi_number_edit").val();
	var taxi_happened_update = $("#select_happened_edit").val();
	var taxi_ethnicity_update = $("#ethncity_edit").val;
	//var taxi_gender_update = $("#taxi_company");
	
	console.log(taxi_company_update + taxi_number_update + taxi_happened_update + taxi_ethnicity_update);
	alert("Your Complaint Sucessfully Updated");
	
}

*/