$('#zip').submit(function(e){
	e.preventDefault();
	var name = $('#input').val();
	var url ='http://api.openweathermap.org/data/2.5/forecast/daily?q=' + name + "&cnt=7&units=imperial&APPID=f20e670d231db943d685d23aa9f11620"
	$('#input').val('');
	$('.weatherbox').html('');	


$.ajax({url: url,
	success:function(response){
		console.log(response)
	response.list.forEach(function(weather){
		console.log(weather)
			$('.weatherbox').append( `
				<div class="divide col-md-1 data">
				<h2 id="max">Max. Temp: ${weather.temp.max}</h2>
				<h2>Min. Temp: ${weather.temp.min}</h2>
				<img class="icon animated pulse infinite" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"
				</div>
				`);


	
 })
}})
})

