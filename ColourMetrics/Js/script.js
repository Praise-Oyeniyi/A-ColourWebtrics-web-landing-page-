function display(){

    var time = document.querySelector('.time'); 

    const now = new Date();

    var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(seconds < 10){
        seconds = "0"+seconds;
    }
    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }

    time.innerHTML= `${days[now.getDay()]} ${hours}: ${minutes}: ${seconds}`;

};
setInterval(display, 1000);;

/* form dom */

var button = document.querySelectorAll('button');
var popIn = document.querySelector('.pop-in');

function Close() {
     popIn.style.cssText = 'display:none;';
};


for(var i = 0; i < button.length ; i++){
    button[i].addEventListener('click', ()=> { popIn.style.cssText = 'display:block;';})
}

   

