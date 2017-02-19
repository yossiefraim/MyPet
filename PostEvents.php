<?php
    if (isset($_POST['events'])){
    	getEventsData($_POST['events']);
    }
	function connectToDB(){
		$mysqliLink = new mysqli('182.50.133.146','auxstudDB6c','auxstud6cDB1!','auxstudDB6c');
		if(mysqli_error($mysqliLink)){
			die();
		}
		return $mysqliLink;
	}
	function getEventsData($events){
		$mysqliLink = connectToDB();
		$result = mysqli_query($mysqliLink,"SELECT * FROM tbl_user_233");
		$event="";
		$date="";
		$time="";
		$member="";		
		while($row = mysqli_fetch_assoc($result)){
			$html .= '<div class="timeline-item">
			       <div class="timeline-icon">
			            <img src="images/'.$row["event"].'.png">
			        </div>
			        <div class="timeline-content right">
			            <h2>' . $row["time"] .' '. $row["member"] .'<a href="#" class="btn" id="event">Sign</a></h2> 
			        </div>
			    </div>';
		}
		echo $html;
	}
?>