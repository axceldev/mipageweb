function registrar()
{
	var bandera=false;
	console.log("\nEstoy en registrar()");
	var name = $("#name").val();
	var email= $("#email").val();
	var phone= $("#phone").val();
	var msg  = $("#msg").val();
	var file = $("#file").val();

	console.log("nombre: "+name+", correo: "+email+", telefono : "+phone+", mensaje : "+msg+", fecha_registro : "+file);
	
	var datos = []; //arreglo
	datos.push({ 
		"name"   : name,
		"email"  : email,
		"phone"  : phone,
		"msg"    : msg,
		"file"   : file
	});
	alert("hice el push, veamos el nombre : "+datos[0].name);
	var objeto = {}; //objeto
	objeto.clientes = datos;
	console.log(JSON.stringify(objeto.clientes));
	alert(JSON.stringify(objeto.clientes));
	console.log("llamo a ajax para que registre en la BD....");

	var cad=JSON.stringify(objeto);
	$.ajax({
		type:"POST",
		url:"control/control.php ",
		data:{
			v_cad:cad
		},
		dataType: 'text', 
		beforeSend: function(x)	{},
		success: function(data)
		{
			console.log("\nla respuesta : "+data);
			if(data=="OK")
			{
			    alert("El mensaje fue enviado con exito.");
			}
			else
			{
				alert("El mensaje no fue enviado con exito.");
			}
		},
		error: function(error) 	
		{ 
			console.log("Se presento un error : " + error) 
		},
		error: function( jqXHR, textStatus, errorThrown ) 
		{
			if (jqXHR.status === 0) { console.log('Not connect: Verify Network.');  } 
			else if (jqXHR.status == 404) { console.log('Requested page not found [404]'); } 
					else if (jqXHR.status == 500) { console.log('Internal Server Error [500].');  } 
							else if (textStatus === 'parsererror') {	console.log('Requested JSON parse failed.');  } 
									else if (textStatus === 'timeout') {console.log('Time out error.');  } 
											else if (textStatus === 'abort') { console.log('Ajax request aborted.');  } 
													else { console.log('Uncaught Error: ' + jqXHR.responseText); 	}
        },
		complete: function() {}
	});
}