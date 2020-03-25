var app={
  inicio: function(){
    this.iniciaBotones();
    this.iniciaFastClick();
    this.iniciaHammer();
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
  },
  
  iniciaBotones: function(){
    var botonClaro = document.querySelector('#claro');
    var botonOscuro = document.querySelector('#oscuro');
    
    botonClaro.addEventListener('click',this.ponloClaro,false);
    botonOscuro.addEventListener('click',app.ponloOscuro,false);
  },

  iniciaHammer: function() {
    var zona = document.getElementById('zona-gestos');
    var hammertime = new Hammer(zona);
    
    hammertime.get('pinch').set({ enable: true });
    hammertime.get('rotate').set({ enable: true });

    zona.addEventListener('webkitAnimationEnd',function(e){
      zona.className='';
      document.getElementById("zona-gestos").innerHTML = "";
    });
    
     hammertime.on('doubletap', function(ev) {
      document.getElementById("zona-gestos").innerHTML = "Double tap";
      
      zona.className='doubletap';
    });

    hammertime.on('press', function(ev) {
      document.getElementById("zona-gestos").innerHTML = "Press";
      zona.className='press';
    });

    hammertime.on('swipe', function(ev) {
      var clase=undefined;
      direccion=ev.direction;
      
      if (direccion==4) {
        clase='swipe-derecha';
        document.getElementById("zona-gestos").innerHTML = "Swipe derecha";
      }
      if (direccion==2) {
        clase='swipe-izquierda'
        document.getElementById("zona-gestos").innerHTML = "Swipe izquierda";
      }
      
      zona.className=clase;
    });


    hammertime.on('rotate', function(ev) {
      var umbral=25;
      document.getElementById("zona-gestos").innerHTML = "Rotate";
      if (ev.distance > umbral) zona.className='rotate';
    });
  },

  ponloClaro: function(){
    document.body.className = 'claro';
  },

  ponloOscuro: function(){
    document.body.className = 'oscuro';
  },

};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}

