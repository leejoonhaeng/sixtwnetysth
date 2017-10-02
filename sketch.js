
$(document).ready(function() {


	//needed list of numbers
	var M1 = [0,1,0] ;
	var M2 = [1,1,1] ;
	var M3 = [1,1,0] ;
	var F1 = [1,1,0] ;
	var F2 = [1,1,0] ;
	var F3 = [1,1,0] ;

	var sumM1 = 


	if ( F1[1]==1){
		//$( "#informationM" ).text( "1번 화장실을 사용하세요" );
	}

	setInterval(function(){

				

		var M1total=0;
		for(var i in arr) { total += arr[i]; }



		var thehours = new Date().getSeconds();
		if (thehours >= 0 && thehours < 20) {
			themessage = thehours; 
			$("#target").css("color", "yellow");

		} else if (thehours >= 20 && thehours < 40) {
			themessage = thehours;
			$("#target").css("color", "blue");

		} else if (thehours >= 40 && thehours < 60) {
			themessage = thehours;
			$("#target").css("color", "red");
		}


		$( "#informationM" ).text( themessage);






	}, 100);



});