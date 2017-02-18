//change color of event when it's done
$("#page1").ready(function() {
	    $("#page1").on('click', "#event", function(){
    	$(this).text("Done!");
        $(this).parent().addClass("done");
        $(this).parent().parent().siblings().addClass("done");
        $(this).hide();
     });
   });

//send event data
// $("#page4").ready(function() {
 //$("input[type=button]").click(function(e) {
		// var time = $("#time").val();
		// var member = $("#member").val();
		// var event = "food_white.png"
// 		
// 		
// 		
		// console.log(time);
        // var x1 = $("<div></div>");
        // x1.addClass("timeline-item");
        // var x2 = $("<div></div>");
        // x2.addClass("timeline-icon");
        // var x3 = $("<img />");
        // x3.attr('src','images/food_white.png');
        // x2.append(x3);
        // x1.append(x2);
    	// var x4 = $("<div></div>");
    	// x4.addClass("timeline-content right");
    	// var x5 = $("<h2></h2").text(time+" "+member);
    	// var x6 = $("<a></a>").text("Sign");
    	// x6.attr('href','#');
    	// x6.addClass("btn ui-link");
    	// $(x6).attr('id','event');
    	// x5.append(x6);
    	// x4.append(x5);
    	// x1.append(x4);
    	// var timeline = $("#timeline");
        // timeline.append(x1);
        // console.log( timeline.text());
        // $("#newEvent")[0].reset();
        // $.mobile.changePage( "#page1", {} );
// 
    // });
// });
//create group stats
$("#page7").ready(function() {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		
		backgroundColor: "#c6c6c6",
		title:{
		},
                animationEnabled: true,
                animationDuration: 2000,
                interactivityEnabled: false,
		legend: {
			
		},
		theme: "theme1",
		data: [
		{        
			type: "doughnut",
			indexLabelFontFamily: "Garamond",
			indexLabelFontStyle: "italic",       
			indexLabelFontSize: 13,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "#f5f5f5",       
			indexLabelPlacement: "inside", 
			showInLegend: false,
			indexLabel: "{label} \t#percent%",
			dataPoints: [
              {  y: 40, label: "Tamar",color:"#37474f"},
              {  y: 30, label: "Oren",color:"#546e7a"},
              {	 y: 20, label: "Haim",color:"#607d8b"},
			  {  y: 10, label: "Dan",color:"#78909c"}
			]
		}
		]
	});
	chart.render();
	$("#page7").on('click', "#chartContainer", function(){
		$.mobile.changePage("#page8",{});
		location.reload();
	
	});
		
});
//tamar levi stats
$("#page8").ready(function() {
		var chart = new CanvasJS.Chart("chartContainer2",
	{
				backgroundColor: "#c6c6c6",
				width:340,
                animationEnabled: true,
      			animationDuration: 2500,
      			
       axisY: {
                tickThickness: 0,
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
       axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 15,
         		labelFontWeight: "bold",
         		labelFontStyle: "italic", 
        	 	labelFontColor: "#212121",
             	valueFormatString: "",
            },
     
		data:[
		{        
			type: "stackedBar100",
          	color:"#78909c",
			indexLabelFontFamily: "Garamond",
			indexLabelFontStyle: "italic",       
			indexLabelFontSize: 15,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "#f5f5f5",       
			indexLabelPlacement: "inside", 
			showInLegend: false,
			indexLabel: "{y}",
			dataPoints: [
				{y: 46, label: "Walk event" },
				{y: 40, label: "Food events" },
				{y: 45, label: "Water events" },
				
			]
		},
		{        
			type: "stackedBar100",
            color:"#455a64",
			indexLabelFontFamily: "Garamond",
			indexLabelFontStyle: "italic",       
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "#f5f5f5",       
			indexLabelPlacement: "inside", 
			showInLegend: false,
            indexLabel: "{y}",
			dataPoints: [
				{y: 4, label: "Water events" },
				{y: 10, label: "Food events" },
				{y: 5, label: "Walk event" },
				
			]
		}, 
	 
		]
	});
	chart.render();
});
//refresh page too show animation
$("#page6").ready(function() {
$("#page6").on('click', "#selectFrequency", function(){
		$.mobile.changePage("#page7",{});
		location.reload();
	
	});
});
//near petshops using Json file
$("#page9").ready(function() {
	$.getJSON("includes/events.json",function(data){
		var sHTML;
		$.each(data.city,function(key){
			if(key=="Ramat_Gan"){
				 sHTML="<h2>Pet shopes in "+key+"</h2>";
				$.each(data.city.Ramat_Gan,function(k,v){
					sHTML+="<img src="+"images/waze.png"+">";
					sHTML+="<ul><b>" +v.name+ ":</b>";
					 sHTML+="<li>"+v.address+"</li>";
					 sHTML+= "<li>"+v.tel+"</li></ul>";					 
				});
			}
			 
		});
		$("#petShopsNearMe").append(sHTML);
	});
});
//adding Menu and Footer dinamic - they same for all pages
var panel='<div data-role="panel" data-position="left" id="myPanel" data-display="reveal"> <div data-role="controlgroup" data-type="vertical"><ul data-role="listview" data-inset="true" data-theme="b"><li data-icon="false"><a id="profile"><span>Profile<span></a></li><li data-icon="false"><a id="petshop" href="#page9"><span>Pet Shops<span></a></li><li data-icon="false"><a id="vets"><span>Vets</span></a></li><li data-icon="false"><a id="trainers"><span>Trainers</span></a></li><li data-icon="false"><a id="dayCare"><span>Day cares</span></a></li></ul></div></div> ';
var footer = '<div id="footer" data-role="footer" data-position="fixed" class="ui-grid-c"><a href="#page1" class="ui-block-a ui-btn ui-btn-b ui-icon-calendar ui-btn-icon-notext ui-nodisc-icon"></a><a href="#page5" class="ui-block-b ui-btn ui-btn-b ui-icon-user  ui-btn-icon-notext ui-nodisc-icon"></a><a href="#page6" class="ui-block-c ui-btn ui-btn-b ui-icon-arrow-u-r  ui-btn-icon-notext ui-nodisc-icon"></a><a href="#" class="ui-block-d ui-btn ui-btn-b ui-nodisc-icon ui-icon-camera  ui-btn-icon-notext ui-nodisc-icon "></a></div>';  
  	$(document).one('pagebeforecreate', function () {
  		for(var i=1;i<10;i++){
  			
  			 $("#page"+i).append(panel);
  			 $("#mypanel").panel();
  			 $("#page"+i).append(footer);
  		}

 
});
//DB creat event list
function getEventsData(events){
	var posting = $.post("includes/PostEvents.php",{
		events:events
	});	
	posting.done(function(data){
		//alert(data);
		$("#timeline").append(data);
		// ("#content").html(data);
	});
	posting.fail(function(){
		alert("failed");
	});
}
	
$("#page1").ready(function() {
	getEventsData("events");
	//location.reload();
	
});

//star rate function
$("#page5").ready(function() {
	for (var i=1;i<5;i++){
		$("#rateYo"+i).rateYo({
    	starWidth: "20px",
    	rating: 3.5,
    	halfStar: true
	});
	}
});


