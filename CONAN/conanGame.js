var canvas = document.getElementById('gameCanvas'),
    ctx = canvas.getContext('2d'),
    scoreboard = document.getElementById('scoreboard'),


    ballRadius = 10,
    groundStartX = 0,
    groundStartY = ctx.canvas.height - 70,
    groundWidth = 90,
    groundHeight = 70,

    lengthUnit = 10,
    initAngle = Math.PI / 4,
    Angle0 = initAngle,
    deltaUnit = canvas.width / lengthUnit,

    passedTime = undefined,
    launchTime = undefined,

    score = 0,
    lastScore = 0,
    lastMouse = {left: 0, top: 0},

    // ground

    groundPaint = {
        groundColor: '#76450b',

        paint: function (ledge, ctx) {
            ctx.save();
            ctx.fillStyle = this.groundColor;
            ctx.fillRect(groundStartX, groundStartY,
                groundWidth, groundHeight);
            ctx.restore();
        }
    },

    ground = new Sprite('ground', groundPaint),

    // ball object

    ballPainter = {

        paint: function (ball, ctx) {
            ctx.save();
            ctx.shadowColor = undefined;
            ctx.lineWidth = 2;
            ctx.fillStyle = '#FFF';
            ctx.strokeStyle = '#000';

            ctx.beginPath();
            ctx.arc(ball.left, ball.top, ball.radius, 0, Math.PI * 2, false);

            ctx.clip();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    },

    // ball movement

    ballMovement = {
        lastTime: 0,
        Gravity: 9.81,

        applyGravity: function (elapsed) {
            ball.velocityY = (this.Gravity * elapsed) - (v0 * Math.sin(Angle0));
        },

        updateBallPosition: function (updateDelta) {
            ball.left += ball.velocityX * (updateDelta) * deltaUnit;
            ball.top += ball.velocityY * (updateDelta) * deltaUnit;
        },

        checkBallDrop: () => {
            if (ball.top > canvas.height || ball.left > canvas.width) {
                reset();
            }
        },

        execute: function (ball, ctx, time) {
            // var updateDelta,
            var flightTime, passTime;

            if (flyingBall) {
                passTime = (time - this.lastTime) / 1000;
                flightTime = (time - launchTime) / 1000;

                this.applyGravity(flightTime);
                this.updateBallPosition(passTime);
                this.checkBallDrop();
            }
            this.lastTime = time;
        }
    }, //ballMovement

    ball = new Sprite('ball', ballPainter, [ballMovement]),
    flyingBall = false,

    // criminal
    arrestCriminal = {
        hitCriminal: () => {
            return ball.left > criminal.left + criminal.width / 2 &&
                ball.left < criminal.left + criminal.width &&
                ball.top > criminal.top && ball.top < criminal.top + criminal.height / 7;
        },

        updateScore: () => {
            lastScore = 2;

            score += lastScore;
            scoreboard.innerText = 'Score: ' + score;
        },

        execute: function (criminal, ctx, time) {
            if (flyingBall && this.hitCriminal()) {
                reset();
                this.updateScore();
            }
        }
    },// arrestCriminal

    criminalX = 660,
    criminalY = canvas.height - 280,
    criminalImage = new Image(),

    criminal = new Sprite('criminal',
        {
            paint: function (sprite, ctx) {
                ctx.drawImage(criminalImage, criminalX, criminalY);
            }
        },

        [arrestCriminal]
    );

// Functions

// sub empty side-size
function windowToCanvas(x, y) {
    var ctx = canvas.getBoundingClientRect();

    return {x: x - ctx.left * (canvas.width / ctx.width), y: y - ctx.top * (canvas.height / ctx.height)};
}

// reset after shooting is finished
function reset() {
    ball.left = groundStartX + groundWidth / 2;
    ball.top = groundStartY - ball.height / 2;
    ball.velocityX = 0;
    ball.velocityY = 0;
    flyingBall = false;
    lastScore = 0;
}

//draw line
function drawLine() {
    ctx.moveTo(ball.left, ball.top);
    ctx.lineTo(lastMouse.left, lastMouse.top);
    ctx.stroke();
}

// update objects
function updateSprites(time) {
    criminal.update(ctx, time);
    ball.update(ctx, time);
}

// draw objects
function paintSprites() {
    ground.paint(ctx);
    criminal.paint(ctx);
    ball.paint(ctx);
}

// shoot ball
gameCanvas.onmousedown = function (e) {
    e.preventDefault();

    if (!flyingBall) {
        ball.velocityX = v0 * Math.cos(Angle0);
        ball.velocityY = v0 * Math.sin(Angle0);
        flyingBall = true;
        launchTime = +new Date();
    }
};
//set ball movement env
gameCanvas.onmousemove = function (e) {

    e.preventDefault();

    if (!flyingBall) {
        pos = windowToCanvas(e.clientX, e.clientY);
        lastMouse.left = pos.x;
        lastMouse.top = pos.y;

        dx = Math.abs(lastMouse.left - ball.left);
        dy = Math.abs(lastMouse.top - ball.top);

        Angle0 = Math.atan(parseFloat(dy) / parseFloat(dx));
        v0 = 4 * dy / Math.sin(Angle0) / deltaUnit;
    }
};

// animation
function animate() {
    var time = +new Date();

    passedTime = (time - launchTime) / 1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!flyingBall) {
        drawLine();
    }

    updateSprites(time);
    paintSprites();
    window.requestNextAnimationFrame(animate);
}

// Initialization

ball.width = ballRadius * 2;
ball.height = ballRadius * 2;
ball.left = groundStartX + groundWidth / 2;
ball.top = groundStartY - ball.height / 2;
ball.radius = ballRadius;

ctx.lineWidth = 0.5;
ctx.strokeStyle = '#fff';
ctx.shadowColor = '#fff';
ctx.stroke();

criminalImage.src = 'criminal.png';
criminalImage.onload = function (e) {
    criminal.left = criminalX;
    criminal.top = criminalY;
    criminal.width = criminalImage.width;
    criminal.height = criminalImage.height;
};

window.requestNextAnimationFrame(animate);
