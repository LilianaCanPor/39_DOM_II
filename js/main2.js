var regexName = /^[A-Z][a-z]*$/;

//hay que checar si keypress es el evento correcto.

$(document).ready(function () {//cuando el document este cargado ejecutara la funcion
	console.log("Esta listo");//para comprobar imprimira este console
	
	$("#name").on('input', function(evt){//cuando cambie el contenido del input ejecutara la funcion de validacion
		console.log("cambios en el input name");
		var texto = $("#name").val();//obtine el valor del input#name
		//var texto = $(evt.target).val();
		//probar si this funciona tambien.
		//$("span").remove();remueve UN span tras ejecutar la funcion.
		$('.name-container > span').each(function(){
			$(this).remove()
		});//remueve todos los span


		if (texto.trim() == "") {//.trim quita los espacios en blanco.
			console.log("Campo vacio");
			var span = $('<span class="error"> Campo Vacio </span>');
			$(".name-container").append(span);//crea un span con la clase errorcon ese texto y lo incrusta dentro del elemento con la clase name-container
		} else if(!regexName.test(texto)) {//testea la expresion regular de campo vacio
			console.log("Valor invalido");
			var span = $('<span class="error"> Texto invalido </span>');//testea la expresion regular de primer letra mayus
			$(".name-container").append(span);//lo incrusta en el elemente con clase name-container
		}

	});

	$("#lastname").on('input', function(evt){
		console.log("cambio en el input lastname");
		var lsn = $("#lastname").val();
		$('.lastname-container > span').each(function(){
			$(this).remove()

	});

	$("#email").on('input', function(evt){
		console.log("cambio en el input email");
		var eml = $("#email").val();
		$('.email-container > span').each(function(){
			$(this).remove()

	});

	$("#password").on('input', function(evt){
		console.log("cambio en el input password");
		var pwd = $("#password").val();
		$('.email-container > span').each(function(){
			$(this).remove()

	});

});