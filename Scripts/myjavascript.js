//modified from http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript

function matrixRain() {


    var c = document.getElementById("matrix");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //random characters - taken from the unicode charset
    var randomCharacter = "019014";
    //converting the string into an array of single characters
    randomCharacter = randomCharacter.split("");

    var font_size = 14;
    var columns = c.width / font_size; //number of columns for the rain
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
        ctx.fillStyle = "rgba(0, 20, 51, 0.03)";
        ctx.fillRect(0, 0, c.width, c.height);

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
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }
    setInterval(draw, 46);

    introduction();
    //resultTable();
    
}



// canvas fade out to reveal cv
function introduction() {
    var pause = 3400;
    var out = 3000;
    var fadeIn = 4200
    $("#matrix").delay(pause).fadeOut(out, "swing");
    $(".default").delay(pause).show("highlight", { color: "#e6ffff" }, 2600);
}

// fade intro page to reveal cv
function pageTransition() {
    $("body").delay(5400).fadeOut(3000, "linear", redirectPage);

    function redirectPage() {
        window.location = "index.html";
    }
}

// button events to show/hide divs

function toggleSkills() { 
    $('#Skills').toggle(600, "swing");
}

function toggleEducation() {
    $('#Education').toggle(600, "swing");
}

function toggleProjects() {
    $('#Projects').toggle(600, "swing");
}

function toggleWork() {
    $('#Employment').toggle(600, "swing");
}






