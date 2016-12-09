//modified from http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
function matrixRain() {
    var canvas = document.getElementById("matrix");
    var ctx = canvas.getContext("2d");

    //making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    

    //random characters - taken from the unicode charset
    var randomCharacter = "01010110";
    //converting the string into an array of single characters
    randomCharacter = randomCharacter.split("");

    var font_size = 12;
    var columns = canvas.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(152, 180, 224, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ffffff"; //colour of text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            //randomCharacter character to print
            var text = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 82);

    function addAsBackground() {
        var data = canvas.toDataURL();
        var myElement = document.getElementById('myelement');
        myElement.style.backgroundImage = 'url('+data+')'; 
    }

    addAsBackground();
}

// set rain effect as background
function addAsBackground() {
        var data = canvas.toDataURL();
        var myElement = document.getElementById('myelement');
        var height = myElement.style.height;
        var width = myElement.style.width;

        myElement.style.backgroundImage = 'url('+data+')';
        alert(document.getElementById("myelement").style.backgroundImage);
    }


// Unused functions

// canvas fade out to reveal cv
//function introduction() {
//    var pause = 3400;
//    var out = 3000;
//    var fadeIn = 4200
//    $("#matrix").delay(pause).fadeOut(out, "swing");
//    $(".default").delay(pause).show("highlight", { color: "#e6ffff" }, 2600);
//}


//function multiCollapse() {
//    $('.row-offcanvas').toggleClass('active');
//    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
//}

///* alert for contact form */
//$('#contact_form').click(function () {
//    alert('Message sent. Thank you.');
//});



