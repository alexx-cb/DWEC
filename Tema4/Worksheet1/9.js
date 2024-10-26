coche = document.getElementById("coche");

coche.onmousedown = (event)=> {

    let shiftX = event.clientX - coche.getBoundingClientRect().left;
    let shiftY = event.clientY - coche.getBoundingClientRect().top;
  
    coche.style.position = 'absolute';
    coche.style.zIndex = 1000;
    document.body.append(coche);
  
    mover(event.pageX, event.pageY);
  
    // mueve la pelota a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function mover(pageX, pageY) {
        coche.style.left = pageX - shiftX + 'px';
        coche.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      mover(event.pageX, event.pageY);
    }
  
    // mueve la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la pelota, elimina el manejador innecesario
    coche.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      coche.onmouseup = null;
    };
  
  };
  
  coche.ondragstart = function() {
    return false;
  };