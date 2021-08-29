function videoBackground() {
    document.querySelector('.back-video').classList.toggle('activated');
    document.querySelector('video').playbackRate = 2.0;

}
var audio = new Audio('./sound.mp3');
var counter = 0;/*It's better to create variables outside of the addEventlistener scope, otherwise, the variable would only exist while the eventlistener is occurring*/
window.addEventListener('keydown', function () {

    ++counter;
    if (counter == 1) {

        document.querySelector('.back-video').classList.add("activated");
        document.querySelector('.toggle').checked = 'true';

    }
    audio.play();
    document.querySelector('#play').innerHTML = 'Pause';
    /**    if (audio.paused) {

        audio.play();

    }
    else {
        audio.pause()
        /audio.load(); 
    }*/
});


/*THIS IS FOR PLAY AND PAUSE ON DESKTOP MODE*/
document.querySelector('#play').addEventListener('click', function (e) {
    console.log('element that triggered the event: ' + this);
    console.log('event that was triggered: ' + e);
    if (audio.paused) {

        audio.play();

    }
    else {
        audio.pause()
        /*audio.load();*/
    }

    if (this.innerHTML == 'Play!') {
        this.innerHTML = 'Pause'
    }
    else {
        this.innerHTML = 'Play!'
    }

});

window.addEventListener('touchstart', function () {
    audio.play();
    document.querySelector('#play').innerHTML = 'Pause';
    ++counter;
    if (counter == 1) {

        document.querySelector('.back-video').classList.add("activated");
        document.querySelector('.toggle').checked = 'true';

    }
});