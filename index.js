const image = document.querySelector('#BulbImg');

function turnOnOFF(){
    if(image.scroll.match('Off')){
        image.src = 'bulbOn.png';
    }else{
        image.src = 'bulbOff.png';
    }
}