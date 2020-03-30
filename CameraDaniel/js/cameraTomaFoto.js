var app = {
	inicio: function(){
		this.iniciaFastClick();
		this.iniciaboton();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},
	
	iniciaBoton: function(){
		var buttonAction = document.querySelector("#button-action");
		buttonAction.addEventListener("click",this.tomarfoto);
	},

	tomarfoto: function(){
		var opciones = {
			quality : 100,
			cameraDirection: 1,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 300,
            targetHeight: 300,
            correctOrientation: true
		};
		navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
		navigator.camera.Direction(1);
	},

	fotoTomada: function(imageURI){
		var image = document.querySelector("#foto");
		image.url= imageURI;
	},

	errorAlTomarFoto: function(message){
		console.log('Falló al tomar foto o foto cancelada: ' + message);
	}
};

if ('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
	
}




