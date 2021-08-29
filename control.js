var context, controller, circle, loop;
context = document.querySelector('canvas').getContext('2d');

context.canvas.height = 270;
context.canvas.width = 500;


circle = {
    height: 50,
    jumping: true,
    width: 30,
    x: 240, // canvas center
    x_velocity: 0,
    y: 0,
    y_velocity: 0,

};


controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;/*if event type is equal to keydown, then key_state is equal to true, else is false   console.log(key_state);*/

        switch (event.keyCode) {
            case 37://left key
                controller.left = key_state;
                break;
            case 38: //Up key
                controller.up = key_state;
                break;
            case 39: // Right key
                controller.right = key_state;
                break;
        }



    },
    touchListener: function (event) {
        var touchState = (event.type == 'touchstart') ? true : false;
        switch (this.className) {
            case 'left-arrow'://left key
                controller.left = touchState;
                console.log(this.className + ' left');
                break;
            case 'up-arrow': //Up key
                controller.up = touchState;
                console.log(this.className + ' up');
                break;
            case 'right-arrow': // Right key
                controller.right = touchState;
                console.log(this.className + ' right');
                break;
        }
        /**  
        
        
       */



    }

};
loop = function () {
    if (controller.up && circle.jumping == false) {
        circle.y_velocity -= 20;
        circle.jumping = true;
        color = randomColor();

    }
    //movement code for left and right
    if (controller.left) {
        circle.x_velocity -= 0.5;

    }

    if (controller.right) {
        circle.x_velocity += 0.5;

    }
    // Physic stuff
    circle.y_velocity += 1.5;// gravity
    circle.x += circle.x_velocity;
    circle.y += circle.y_velocity;
    circle.x_velocity *= 0.9;//friction
    circle.y_velocity *= 0.9;//friction


    //Colision detection
    //if circle is falling below floor line
    if (circle.y > 300 - 16 - 50) {
        circle.jumping = false;
        circle.y = 300 - 16 - 50;
        circle.y_velocity = 0;
    }

    //if circle is going off the left of the screen
    if (circle.x < -50) {
        circle.x = 500;
    }
    else if (circle.x > 500) {
        //if  circle goes past right
        circle.x = -50;
    }

    context.fillStyle = 'rgba(40, 48, 56, 0.25)';
    // x, y, width, height
    context.fillRect(0, 0, 500, 300);
    // hex for red
    context.fillStyle = `${color}`;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.width, circle.height, 94, 20, 40, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = 'rgba(133, 43, 216, 0.863)';
    context.lineWidth = 40;
    context.beginPath();
    context.moveTo(0, 284);
    context.lineTo(500, 284);
    context.stroke();
    //call update when the broswer is ready to draw again
    window.requestAnimationFrame(loop);
};






var color = randomColor();
function randomColor() {


    var arr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256)
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] +
        ',' + arr[2] + ')';
    return newRgb;

}
/*The keydown and keyup events provide a code indicating which key is pressed*/
window.addEventListener('keydown', controller.keyListener);/*The keydown event is fired when a key is pressed.*/
window.addEventListener('keyup', controller.keyListener);/*The keyup event is fired when a key is released.*/
document.querySelector('.left-arrow').addEventListener('touchstart', controller.touchListener);
document.querySelector('.up-arrow').addEventListener('touchstart', controller.touchListener);
document.querySelector('.right-arrow').addEventListener('touchstart', controller.touchListener);
document.querySelector('.left-arrow').addEventListener('touchend', controller.touchListener);
document.querySelector('.up-arrow').addEventListener('touchend', controller.touchListener);
document.querySelector('.right-arrow').addEventListener('touchend', controller.touchListener);

window.requestAnimationFrame(loop);




/* object: controller

method: keyListener*/
