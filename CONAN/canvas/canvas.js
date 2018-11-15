/**
 * Created by eunsoo on 2017-05-12.
 */

/*11-5~6 생략*/

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.fillStyle = "#000099"; // 안에 색
//     canvas.strokeStyle = "#990000"; // outline color
//     canvas.globalAlpha = 0.2; // 투명도 (0에 수렴할 수록 투명)
//
//     canvas.strokeRect(100, 100, 120, 120); // (x,y),(xLength,yLength)
//     canvas.fillRect(110, 110, 100, 100);
//     canvas.clearRect(120, 120, 80, 80);
//
//     //위 함수 사용시 한번에 캔버스에 나타나지만(유일함) 삼각형이나 원등 다른 경우 한 지점에서 시작해서 끝 지점까지 거치며 순차적으로 나타남
// }
//window.addEventListener("load", initiate);

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.beginPath();
//     canvas.moveTo(100, 100); //(x,y)
//     canvas.lineTo(200, 200); //(x,y)
//     // canvas.lineTo(100, 200); //(x,y)& 그렴서 움직입
//     // canvas.closePath(); //
//     // canvas.stroke(); // 캔버스위에 나타나도록 함
//     cnavas.fill();
// }
// window.addEventListener("load", initiate);

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.beginPath();
//     canvas.moveTo(100, 100);
//     canvas.lineTo(200, 200);
//     canvas.lineTo(100, 200);
//     canvas.clip();
//
//     canvas.beginPath();
//     for (var f = 0; f < 300; f = f + 10) {
//         canvas.moveTo(0, f);
//         canvas.lineTo(500, f);
//     }
//     canvas.stroke();
// }
// window.addEventListener("load", initiate);


// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     var radians = Math.PI / 45;
//
//     canvas.beginPath();
//     canvas.arc(100, 100, 50, 0, radians, true); // 원호
//     canvas.stroke();
// }
// window.addEventListener("load", initiate);

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.beginPath();
//     canvas.moveTo(50, 50);
//     canvas.quadraticCurveTo(100, 125, 50, 200);//(커,,,startpoint,curve정도)?
//
//     canvas.moveTo(250, 50);
//     canvas.bezierCurveTo(200, 125, 300, 125, 250, 200);
//     canvas.stroke();
// }
// // addEventListener("load", initiate)
// //
// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     //원//
//     canvas.beginPath();
//     canvas.arc(200, 150, 50, 0, Math.PI * 2, false); //각도 시계방향
//     canvas.stroke();
//
//     //width=10인 원
//     canvas.lineWidth = 10;
//     canvas.lineCap = "round"; //shape of lineend
//     canvas.beginPath();
//     canvas.moveTo(230, 150);
//     canvas.arc(200, 150, 30, 0, Math.PI, false);//(x,y,r,startpoint,단위?,방향)
//     canvas.stroke();
//
//     canvas.lineWidth = 5;
//     canvas.lineJoin = "miter"; //선분 만나는 지점 모양 처리
//     canvas.beginPath();
//     canvas.moveTo(195, 135);
//     canvas.lineTo(215, 155);
//     canvas.lineTo(195, 155);
//     canvas.stroke();
// }
// addEventListener("load", initiate);;

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.font = "bold 24px verdana, sans-serif";
//     canvas.textAlign = "start";
//     canvas.fillText("My message", 100, 100);
// }
// addEventListener("load", initiate);

// function initiate() {
//     var element = document.getElementById("canvas");
//     var canvas = element.getContext("2d");
//
//     canvas.shadowColor = "rgba(0, 0, 0, 0.5)";
//     canvas.shadowOffsetX = 4;
//     canvas.shadowOffsetY = 4;
//     canvas.shadowBlur = 5;
//
//     canvas.font = "bold 50px verdana, sans-serif";
//     canvas.fillText("My message", 100, 100);
// }
// window.addEventListener("load", initiate);
function backGround() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");
    var gradient = canvas.createLinearGradient(0, 0, 0, 400);
    canvas.beginPath();
    gradient.addColorStop(0, "#000036");
    gradient.addColorStop(0.2, "#000064");
    gradient.addColorStop(0.5, "#00007e");
    gradient.addColorStop(0.9, "red");
    gradient.addColorStop(1, "brown");
    canvas.fillStyle = gradient;
    canvas.moveTo(0, 0);
    canvas.fillRect(0, 0, 1020, 600);
    canvas.closePath();
}

function drawSun() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    //sun body
    canvas.strokeStyle = "#f22";
    canvas.arc(80, 80, 30, 0, Math.PI * 2, false);
    canvas.fillStyle = "#f22";
    canvas.fill();
    canvas.lineWidth = 2;
    //sun line
    canvas.strokeStyle = "#ff2";

    canvas.moveTo(80, 40);
    canvas.lineTo(80, 10);

    canvas.moveTo(80, 120);
    canvas.lineTo(80, 150);

    canvas.moveTo(120, 80);
    canvas.lineTo(150, 80);

    canvas.moveTo(40, 80);
    canvas.lineTo(10, 80);

    canvas.moveTo(80 + 28, 80 - 28);
    canvas.lineTo(80 + 50, 80 - 50);

    canvas.moveTo(80 + 28, 80 + 28);
    canvas.lineTo(80 + 50, 80 + 50);

    canvas.moveTo(80 - 28, 80 + 28);
    canvas.lineTo(80 - 50, 80 + 50);

    canvas.moveTo(80 - 28, 80 - 28);
    canvas.lineTo(80 - 50, 80 - 50);
    canvas.stroke();
    canvas.closePath();

    //sun eyes
    canvas.beginPath();
    canvas.strokeStyle = '#f7f1ff';
    canvas.moveTo(66 + 9, 75);
    canvas.arc(66, 75, 9, 0, Math.PI, true);
    canvas.moveTo(94 + 9, 75);
    canvas.arc(94, 75, 9, 0, Math.PI, true);
    canvas.stroke();
    canvas.closePath();

    //sun mouth
    canvas.beginPath();
    canvas.lineWidth = 6;
    canvas.strokeStyle = '#a50000';
    canvas.lineCap = "butt";
    canvas.beginPath();
    canvas.moveTo(80 + 20, 80);
    canvas.arc(80, 80, 20, 0, Math.PI, false);
    canvas.stroke();
    canvas.closePath();
}

function drawStar() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");
    canvas.beginPath();
    //star
    canvas.lineWidth = 2;
    canvas.moveTo(250, 20);
    canvas.lineTo(262, 60);
    canvas.lineTo(300, 60);
    canvas.lineTo(270, 82);
    canvas.lineTo(280, 120);
    canvas.lineTo(250, 97);
    canvas.lineTo(220, 120);
    canvas.lineTo(230, 82);
    canvas.lineTo(200, 60);
    canvas.lineTo(238, 60);
    canvas.lineTo(250, 20);
    canvas.fillStyle = '#ff0';
    canvas.fill();
    canvas.stroke();
    canvas.closePath();
}

function drawCloud() {
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');

    //back cloud
    canvas.beginPath();
    canvas.moveTo(375, 60);
    canvas.quadraticCurveTo(410, 0, 445, 60);
    canvas.quadraticCurveTo(480, 0, 515, 60);
    canvas.quadraticCurveTo(550, 0, 585, 60);
    canvas.quadraticCurveTo(550, 120, 515, 60);
    canvas.quadraticCurveTo(480, 120, 445, 60);
    canvas.quadraticCurveTo(410, 120, 375, 60);
    canvas.fillStyle = "#bfe";
    canvas.fill();
    canvas.strokeStyle = "#000";
    canvas.stroke();

    //front cloud
    canvas.beginPath();
    canvas.moveTo(350, 70);
    canvas.quadraticCurveTo(385, 10, 420, 70);
    canvas.quadraticCurveTo(455, 10, 490, 70);
    canvas.quadraticCurveTo(525, 10, 560, 70);
    canvas.quadraticCurveTo(525, 130, 490, 70);
    canvas.quadraticCurveTo(455, 130, 420, 70);
    canvas.quadraticCurveTo(385, 130, 350, 70);
    canvas.fillStyle = "#8cf";
    canvas.strokeStyle = "#000";
    canvas.fill();
    canvas.stroke();

    //front cloud right eye
    canvas.beginPath();
    canvas.arc(440, 65, 7, 0, Math.PI);
    canvas.stroke();

    //front cloud left eye
    canvas.beginPath();
    canvas.arc(470, 65, 7, 0, Math.PI);
    canvas.stroke();

    //front cloud right eye tear
    canvas.beginPath();
    canvas.moveTo(440, 72);
    canvas.quadraticCurveTo(433, 85, 440, 85);
    canvas.moveTo(440, 72);
    canvas.quadraticCurveTo(447, 85, 440, 85);
    canvas.fillStyle = "#2829e7";
    canvas.fill();
    canvas.stroke();

    //front cloud left eye tear
    canvas.beginPath();
    canvas.moveTo(470, 72);
    canvas.quadraticCurveTo(463, 85, 470, 85);
    canvas.moveTo(470, 72);
    canvas.quadraticCurveTo(477, 85, 470, 85);
    canvas.fillStyle = "#0032A0";
    canvas.fill();
    canvas.stroke();

    //Rain
    canvas.beginPath();

    canvas.moveTo(370, 130);
    canvas.lineTo(370, 190);

    canvas.moveTo(385, 250);
    canvas.lineTo(385, 310);

    canvas.moveTo(405, 180);
    canvas.lineTo(405, 250);

    canvas.moveTo(430, 120);
    canvas.lineTo(430, 180);

    canvas.moveTo(450, 270);
    canvas.lineTo(450, 330);

    canvas.moveTo(470, 140);
    canvas.lineTo(470, 200);

    canvas.moveTo(490, 240);
    canvas.lineTo(490, 300);

    canvas.moveTo(520, 145);
    canvas.lineTo(520, 205);

    canvas.moveTo(540, 305);
    canvas.lineTo(540, 365);

    canvas.moveTo(560, 190);
    canvas.lineTo(560, 260);

    canvas.strokeStyle = "#87cefa";
    canvas.stroke();
}


function drawMoon() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    canvas.fillStyle = "#ff0";
    canvas.strokeStyle = "#fff";
    canvas.lineWidth = 2;

    // moon body
    canvas.moveTo(700, 40);
    canvas.bezierCurveTo(800, 40, 800, 140, 700, 140);
    canvas.bezierCurveTo(760, 140, 760, 40, 700, 40);
    canvas.fill();
    canvas.moveTo(745, 75);
    canvas.lineTo(735, 85);
    canvas.lineTo(745, 90);
    canvas.stroke();
    canvas.closePath();

    //moon eye
    canvas.beginPath();
    canvas.moveTo(745, 75);
    canvas.quadraticCurveTo(755, 65, 765, 75);
    canvas.quadraticCurveTo(755, 85, 745, 75);
    canvas.fillStyle = "#fff";
    canvas.strokeStyle = "#0000ff";
    canvas.lineWidth = 2;
    canvas.stroke();
    canvas.fill();
    canvas.closePath();

    //moon eye black
    canvas.beginPath();
    canvas.arc(755, 75, 5, 0, Math.PI * 2);
    canvas.fillStyle = '#000';
    canvas.fill();
}


function drawPersonUmbrella() {
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');

    //person
    canvas.beginPath();
    canvas.arc(60, 320, 25, 0, Math.PI * 2);
    canvas.fillStyle = '#fff';
    canvas.fill();
    canvas.moveTo(60, 350);
    canvas.lineTo(30, 370);
    canvas.moveTo(60, 350);
    canvas.lineTo(90, 365);
    canvas.lineTo(100, 360);
    canvas.moveTo(60, 345);
    canvas.lineTo(60, 440);
    canvas.lineTo(90, 480);
    canvas.moveTo(60, 440);
    canvas.lineTo(30, 480);
    canvas.lineWidth = 2;
    canvas.strokeStyle = '#000';
    canvas.stroke();
    canvas.closePath();

    // umbrella hat
    canvas.lineWidth = 1;
    canvas.beginPath();
    canvas.moveTo(100, 190);
    canvas.lineTo(107, 210);
    canvas.lineTo(93, 210);
    canvas.lineTo(100, 190);
    canvas.strokeStyle = '#fff';
    canvas.stroke();
    canvas.fillStyle = '#6af';
    canvas.fill();
    canvas.closePath();


    //umbrella body
    canvas.beginPath();
    canvas.fillStyle = '#6af';
    canvas.strokeStyle = '#fff';
    canvas.fillRect(95, 270, 10, 100);
    canvas.strokeRect(95, 270, 10, 100);
    canvas.closePath();

    //umbrella handle
    canvas.beginPath();
    canvas.arc(110, 370, 15, 0, Math.PI, false);
    canvas.lineTo(105, 370);
    // canvas.
    canvas.arc(110, 370, 5, Math.PI, 0, true);
    canvas.arc(120, 370, 5, Math.PI, 0, false);
    canvas.strokeStyle = '#bef';
    canvas.fillStyle = '#8dfffd';
    canvas.fill();
    canvas.stroke();
    canvas.closePath();

    // umbrella head
    canvas.beginPath();
    canvas.arc(100, 300, 90, 0, Math.PI, true); //우산
    canvas.quadraticCurveTo(40, 250, 70, 300);
    canvas.quadraticCurveTo(100, 250, 130, 300);
    canvas.quadraticCurveTo(160, 250, 190, 300);
    canvas.strokeStyle = '#69f';
    canvas.stroke();
    canvas.fillStyle = '#bef';
    canvas.fill();
    canvas.closePath();

    // umbrella line
    canvas.beginPath();
    canvas.moveTo(100, 210);
    canvas.lineTo(70, 300);

    canvas.moveTo(100, 210);
    canvas.lineTo(130, 300);

    canvas.stroke();
    canvas.closePath();
}

function drawHouse() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();

    //houseBody and root
    canvas.strokeStyle = '#000000';
    canvas.lineWidth = 2;
    canvas.fillStyle = "#b1e6b4";
    canvas.fillRect(180, 350, 100, 120);
    canvas.strokeRect(180, 350, 100, 120);
    canvas.moveTo(160, 350);
    canvas.lineTo(300, 350);
    canvas.lineTo(230, 280);
    canvas.lineTo(160, 350);
    canvas.fillStyle = "#af637b";
    canvas.stroke();
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    //root line
    canvas.strokeStyle = "#ff717a";
    for (var i = 1; i < 7; i++) {
        canvas.moveTo(160 + i * 10, 350 - i * 10);
        canvas.lineTo(300 - i * 10, 350 - i * 10);
    }
    for (var idx = 0; idx < 8; idx++) {
        canvas.moveTo(160 + idx * 10, 350);
        canvas.lineTo(160 + idx * 10, 350 - idx * 10);
        canvas.moveTo(300 - idx * 10, 350);
        canvas.lineTo(300 - idx * 10, 350 - idx * 10);
    }
    canvas.stroke();
    canvas.closePath();

    canvas.beginPath();
    canvas.strokeStyle = "black";
    canvas.globalCompositeOperation = "source-over";
    //house door
    canvas.fillStyle = "#eba365";
    canvas.fillRect(230, 400, 40, 70);
    canvas.strokeRect(230, 400, 40, 70);


    canvas.moveTo(243, 440);
    canvas.fillStyle = '#130ed0';
    canvas.arc(240, 440, 3, 0, Math.PI * 2);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();
    canvas.beginPath();
    canvas.moveTo(250, 280);
    canvas.lineTo(280, 280);
    canvas.lineTo(280, 330);
    canvas.lineTo(250, 300);
    canvas.lineTo(250, 280);
    canvas.fillStyle = "#ff8a6c";
    canvas.fill();
    canvas.stroke();
    canvas.closePath();

    //house window
    canvas.beginPath();
    canvas.fillStyle = "#a8e4ff";
    canvas.fillRect(184, 356, 40, 40);
    canvas.strokeRect(184, 356, 40, 40);
    canvas.moveTo(204, 356);
    canvas.lineTo(204, 396);
    canvas.moveTo(184, 376);
    canvas.lineTo(224, 376);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();
}

function drawRiver() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    canvas.moveTo(360, 430);
    canvas.lineTo(560, 430);
    canvas.bezierCurveTo(580, 450, 550, 490, 560, 520);
    canvas.lineTo(360, 520);
    canvas.bezierCurveTo(365, 500, 353, 440, 360, 430);
    canvas.fillStyle = '#88c8ee';
    canvas.fill();
    canvas.strokeStyle = "#aeeaff";
    canvas.stroke();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(365, 455);
    canvas.bezierCurveTo(370, 470, 440, 475, 460, 455);
    canvas.bezierCurveTo(480, 440, 490, 430, 555, 455);
    canvas.moveTo(370, 480);
    canvas.bezierCurveTo(400, 490, 450, 500, 465, 470);
    canvas.bezierCurveTo(480, 450, 490, 440, 545, 470);
    canvas.moveTo(370, 510);
    canvas.bezierCurveTo(410, 514, 450, 510, 470, 500);
    canvas.bezierCurveTo(500, 480, 510, 470, 550, 490);
    canvas.strokeStyle = "#264377";
    canvas.stroke();
    canvas.closePath();
}

function drawPersonWearHat() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    canvas.strokeStyle = '#000';
    canvas.fillStyle = '#fff';
    canvas.lineWidth = 2;
    canvas.arc(670, 310, 30, 0, Math.PI * 2);
    canvas.fill();
    canvas.moveTo(670, 340);
    canvas.lineTo(670, 450);
    canvas.moveTo(600, 370);
    canvas.lineTo(625, 350);
    canvas.lineTo(715, 390);
    canvas.lineTo(740, 370);
    canvas.moveTo(650, 535);
    canvas.lineTo(630, 490);
    canvas.lineTo(670, 450);
    canvas.lineTo(695, 490);
    canvas.lineTo(740, 525);
    canvas.stroke();
    canvas.closePath();

    canvas.beginPath();
    canvas.strokeStyle = '#500476';
    canvas.fillStyle = '#b68eff';
    canvas.lineWidth = 2;
    canvas.strokeRect(620, 270, 100, 25);
    canvas.fillRect(620, 270, 100, 25);
    canvas.strokeRect(640, 240, 60, 40);
    canvas.fillRect(640, 240, 60, 40);
    canvas.closePath();
}

function studentId() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    canvas.font = "bold 35px verdana, sans-serif";
    canvas.fillStyle = '#87fc68';
    canvas.strokeStyle = '#ff0d00';
    canvas.fillText("16101403", 800, 100);
    canvas.strokeText("16101403", 800, 100);
    canvas.closePath();
}
function drawName() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");

    canvas.beginPath();
    //E
    canvas.moveTo(800, 180);
    canvas.lineTo(850, 180);
    canvas.lineTo(850, 195);
    canvas.lineTo(815, 195);
    canvas.lineTo(815, 210);
    canvas.lineTo(850, 210);
    canvas.lineTo(850, 225);
    canvas.lineTo(815, 225);
    canvas.lineTo(800, 210);
    canvas.lineTo(800, 180);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(815, 225);
    canvas.lineTo(815, 240);
    canvas.lineTo(850, 240);
    canvas.lineTo(850, 255);
    canvas.lineTo(800, 255);
    canvas.lineTo(800, 210);
    canvas.lineTo(815, 225);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    canvas.closePath();

    //U
    canvas.beginPath();
    canvas.moveTo(870, 180);
    canvas.lineTo(885, 180);
    canvas.lineTo(885, 229);
    canvas.lineTo(870, 233);
    canvas.lineTo(870, 180);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(885, 229);
    canvas.lineTo(885, 240);
    canvas.lineTo(905, 240);
    canvas.lineTo(905, 211);
    canvas.lineTo(920, 200);
    canvas.lineTo(920, 255);
    canvas.lineTo(870, 255);
    canvas.lineTo(870, 233);
    canvas.lineTo(885, 229);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(920, 180);
    canvas.lineTo(920, 200);
    canvas.lineTo(905, 211);
    canvas.lineTo(905, 180);
    canvas.lineTo(920, 180);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    //N
    canvas.beginPath();
    canvas.moveTo(940, 180);
    canvas.lineTo(955, 180);
    canvas.lineTo(960, 193);
    canvas.lineTo(940, 193);
    canvas.lineTo(940, 180);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(960, 193);
    canvas.lineTo(975, 230);
    canvas.lineTo(975, 198);
    canvas.lineTo(990, 208);
    canvas.lineTo(990, 255);
    canvas.lineTo(975, 255);
    canvas.lineTo(955, 205);
    canvas.lineTo(955, 255);
    canvas.lineTo(940, 255);
    canvas.lineTo(940, 193);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(975, 180);
    canvas.lineTo(990, 180);
    canvas.lineTo(990, 208);
    canvas.lineTo(975, 198);
    canvas.lineTo(975, 180);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    // line
    canvas.beginPath();
    canvas.strokeStyle = '#006';
    canvas.moveTo(800, 210);
    canvas.bezierCurveTo(820, 240, 880, 240, 900, 220);
    canvas.bezierCurveTo(920, 180, 980, 190, 990, 210);
    canvas.moveTo(990, 210);
    canvas.closePath();
    canvas.stroke();

    //S
    canvas.beginPath();
    canvas.moveTo(850, 305);
    canvas.bezierCurveTo(850, 280, 800, 280, 800, 305); //out_up_curv
    canvas.lineTo(850, 330);
    canvas.bezierCurveTo(850, 315, 815, 315, 815, 305);//in_middle_curv
    canvas.bezierCurveTo(815, 295, 835, 295, 835, 305);//in_up_curv
    canvas.lineTo(850, 305);
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(850, 330);
    canvas.lineTo(800, 305);
    canvas.bezierCurveTo(800, 315, 835, 315, 835, 330);// out_middle_curv
    canvas.bezierCurveTo(835, 345, 815, 345, 815, 330);//in_down_curv
    canvas.lineTo(800, 330);
    canvas.bezierCurveTo(800, 360, 850, 360, 850, 330);//out_down_curv
    canvas.moveTo(815, 305);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    canvas.closePath();

    //O
    canvas.beginPath();
    canvas.moveTo(920, 325);
    canvas.bezierCurveTo(920, 285, 870, 285, 870, 325);// out_up_curv
    canvas.lineTo(885, 325);
    canvas.bezierCurveTo(885, 300, 905, 300, 905, 325);// in_up_curv
    canvas.lineTo(920, 325);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(870, 325);
    canvas.bezierCurveTo(870, 365, 920, 365, 920, 325);
    canvas.lineTo(905, 325);
    canvas.bezierCurveTo(905, 350, 885, 350, 885, 325);
    canvas.lineTo(870, 325);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    // canvas.stroke();
    canvas.closePath();
    // canvas.arc(895,235,10,0,Math.PI*2);

    //O
    canvas.beginPath();
    canvas.moveTo(990, 325);
    canvas.bezierCurveTo(990, 285, 940, 285, 940, 325);// out_up_curv
    canvas.lineTo(955, 325);
    canvas.bezierCurveTo(955, 300, 975, 300, 975, 325);// in_up_curv
    canvas.lineTo(990, 325);
    canvas.fillStyle = "#b6ffe7";
    canvas.fill();
    canvas.closePath();

    canvas.beginPath();
    canvas.moveTo(940, 325);
    canvas.bezierCurveTo(940, 365, 990, 365, 990, 325);
    canvas.lineTo(975, 325);
    canvas.bezierCurveTo(975, 350, 955, 350, 955, 325);
    canvas.lineTo(940, 325);
    canvas.fillStyle = '#e3afff';
    canvas.fill();
    canvas.closePath();
}

function init() {
    backGround();
    drawSun();
    drawStar();
    drawCloud();
    drawMoon();
    drawPersonUmbrella();
    drawHouse();
    drawRiver();
    drawPersonWearHat();
    studentId();
    drawName();
}
function pos(e) {
    console.log("x: " + e.clientX + ", y: " + e.clientY);
}
window.addEventListener("load", init);
window.addEventListener("click", pos);
