function handleOrientation(event){
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
}

function orientacion(){
    DeviceMotionEvent.requestPermission().then((state) =>{
        if(state === 'granted'){
            window.addEventListener('devicemotion', handleOrientation);
        }else{
            document.getElementById("miDiv").innerHTML = "rechazado";
        }
    })
    .catch()
}