<?php
 	if(isset($_GET['member']) && isset($_GET['time']) && isset($_GET['date'])){
 		$member = $_GET['member'];
		$time = $_GET['time'];
		$date = $_GET['date'];
		$event = "food_white";	
		echo "<div data-role='page'>
				<script>window.location='../index.html'</script>
		 	  </div>";
 	}
	$dbhost = "182.50.133.146";
	$dbuser = "auxstudDB6c";
	$dbpass = "auxstud6cDB1!";
	$dbname = "auxstudDB6c";
	$connection = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	if(mysqli_connect_errno()){
		die("DB connection failed: " . mysqli_connect_errno() . "(" . mysqli_connect_errno() . ")");
		echo "connection fail!";
	}
	$query1 = "INSERT INTO tbl_user_233(member,time,date,event) 
		VALUES ('".$member."','".$time."','".$date."','".$event."')";
	if (mysqli_query($connection,$query1)){
		echo "query success";
		$i++;
	}else{
		echo $query1;
		echo "query failed";
}
?>