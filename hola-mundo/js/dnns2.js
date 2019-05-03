$(document).ready(function(){
	
	$('#datos').load('https://reqres.in/api/users?page=2');


	$.get('https://reqres.in/api/users', {page:3},function(response){
		console.log(response);
		response.data.forEach((elemento,index)=>{
			$('#datos').append('<p>'+elemento.first_name+ " "+ elemento.last_name+ '</p>' );
		});
	});

	$('#formulario').submit(function(e){

			e.preventDefault();
			var usuario ={
					name:$('input[name="name"]').val(),
					web:$('input[name="web"]').val()
				};

			$.post($(this).attr('action'),usuario, function(response){
				console.log(response);
	}).done(function(){
		alert('Usuario añadido bien');
	});
	return false;		
	});

});