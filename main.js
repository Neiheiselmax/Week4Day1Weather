$.ajax({url:
	"http://api.openweathermap.org/data/2.5/weather?zip=99501&units=imperial&APPID=f20e670d231db943d685d23aa9f11620",
	success:function(response){
		response.forEach(function(character)
			console.log(response)