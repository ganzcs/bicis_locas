function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	if( nombre == null || nombre.length == 0) {
		alert("Escribir su nombre es obligatorio");
		return;
	}
	var apellido = document.getElementById("lastname").value;
	if( apellido == null || apellido.length == 0) {
		alert("Escribir su apellido es obligatorio");
		return;
	}
	var email = document.getElementById("input-email").value;
	if( email == null || email.length == 0) {
		alert("Escribir su correo electrónico es obligatorio");
		return;
	}
	var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
		alert("Escribir un correo electrónico valido");
		return;
	}
	var pass = document.getElementById("input-password").value;
	if( pass == null || pass.length == 0) {
		alert("La contraseña es obligatoria");
		return;
	}
	var pass6 = document.getElementById("input-password").value;
	if(pass6.length < 6) {
		alert("La contraseña debe tener al menos 6 caracteres");
		return;
	}
	var passno = document.getElementById("input-password").value;
	if(passno == "password" || passno =="123456" || passno =="0987654") {
		alert("Escoge otra contraseña");alert("Escoge otra contraseña");
		return;
	}
	var lista= document.getElementsByTagName("select")[0].value;
	if(lista==0){
		alert("Selecciona una Bici");
		return;
	}
	
}