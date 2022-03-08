function registrar()
{
	var bandera=false;
	console.log("\nEstoy en registrar()");
	//alert("\nEstoy en registrar()");
	var cedula= $("#cedula").val();
	var nombre= $("#nombre").val();
	var apellido= $("#apellido").val();
	var ciudad= $("#ciudad").val();
	var fecha_registro= $("#fecha_registro").val();
	console.log("cedula : "+cedula+", nombre: "+nombre+", apellido : "+apellido+", ciudad : "+ciudad+", fecha_registro : "+fecha_registro);
	alert("cedula : "+cedula+", nombre: "+nombre+", apellido : "+apellido+", ciudad : "+ciudad+", fecha_registro : "+fecha_registro);
	
	var datos = []; //arreglo
	datos.push({ 
		"cedula"    : cedula,
		"nombre"    : nombre,
		"apellido"  : apellido,
		"ciudad"    : ciudad,
		"fecha_registro": fecha_registro
	});
	alert("hice el push, veamos el nombre : "+datos[0].nombre);
	var objeto = {}; //objeto
	objeto.clientes = datos;
	//Esta es una visualizacion en pantalla, temporal para pruebas
	//$("#res").text(JSON.stringify(objeto.clientes));
	console.log(JSON.stringify(objeto.clientes));
	alert(JSON.stringify(objeto.clientes));
	console.log("llamo a ajax para que registre en la BD....");
	//alert("llamo a ajax para que registre en la BD....");
	var cad=JSON.stringify(objeto);
	$.ajax({
		type:"POST",
		url:"control/proc.php",
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
			    alert("El cliente ha sido registrado en la base de datos Json !!!");
				$("#form_datos").hide();
				//$("#res").hide(); 
				//$("#principal").show();
				window.location.href = "http://localhost/loginjson/pagina.html";
			}
			else
			{
				alert("Su base de datos de clientes NO ha podido ser actualizada");
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