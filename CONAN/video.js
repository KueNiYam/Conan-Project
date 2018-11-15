/* video play script */
var mmedia1, play1, bar1, progress1, mute1, volume1, loop1;
var mmedia2, play2, bar2, progress2, mute2, volume2, loop2;
var mmedia3, play3, bar3, progress3, mute3, volume3, loop3;
var mmedia4, play4, bar4, progress4, mute4, volume4, loop4;
var mmedia5, play5, bar5, progress5, mute5, volume5, loop5;
var maxim = 290;

function videoInitiate() {

    mmedia1 = document.getElementById('media1');
    mmedia2 = document.getElementById('media2');
    mmedia3 = document.getElementById('media3');
    mmedia4 = document.getElementById('media4');
    mmedia5 = document.getElementById('media5');
    play1 = document.getElementById('play1');
    play2 = document.getElementById('play2');
    play3 = document.getElementById('play3');
    play4 = document.getElementById('play4');
    play5 = document.getElementById('play5');
    bar1 = document.getElementById('bar1');
    bar2 = document.getElementById('bar2');
    bar3 = document.getElementById('bar3');
    bar4 = document.getElementById('bar4');
    bar5 = document.getElementById('bar5');
    progress1 = document.getElementById('progress1');
    progress2 = document.getElementById('progress2');
    progress3 = document.getElementById('progress3');
    progress4 = document.getElementById('progress4');
    progress5 = document.getElementById('progress5');
    mute1 = document.getElementById('mute1');
    mute2 = document.getElementById('mute2');
    mute3 = document.getElementById('mute3');
    mute4 = document.getElementById('mute4');
    mute5 = document.getElementById('mute5');
    volume1 = document.getElementById('volume1');
    volume2 = document.getElementById('volume2');
    volume3 = document.getElementById('volume3');
    volume4 = document.getElementById('volume4');
    volume5 = document.getElementById('volume5');

    play1.addEventListener('click', push1);
    play2.addEventListener('click', push2);
    play3.addEventListener('click', push3);
    play4.addEventListener('click', push4);
    play5.addEventListener('click', push5);
    mute1.addEventListener('click', sound1);
    mute2.addEventListener('click', sound2);
    mute3.addEventListener('click', sound3);
    mute4.addEventListener('click', sound4);
    mute5.addEventListener('click', sound5);
    bar1.addEventListener('click', move1);
    bar2.addEventListener('click', move2);
    bar3.addEventListener('click', move3);
    bar4.addEventListener('click', move4);
    bar5.addEventListener('click', move5);
    volume1.addEventListener('change', level1);
    volume2.addEventListener('change', level2);
    volume3.addEventListener('change', level3);
    volume4.addEventListener('change', level4);
    volume5.addEventListener('change', level5);

}

function push1() {
    if (!mmedia1.paused && !mmedia1.ended) {
        mmedia1.pause();
        play1.value = '재생';
        clearInterval(loop);
    } else {
        mmedia1.play();
        play1.value = '정지';
        loop = setInterval(status1, 1000);
    }
}
function push2() {
    if (!mmedia2.paused && !mmedia2.ended) {
        mmedia2.pause();
        play2.value = '재생';
        clearInterval(loop);
    } else {
        mmedia2.play();
        play2.value = '정지';
        loop = setInterval(status2, 1000);
    }
}
function push3() {
    if (!mmedia3.paused && !mmedia3.ended) {
        mmedia3.pause();
        play3.value = '재생';
        clearInterval(loop);
    } else {
        mmedia3.play();
        play3.value = '정지';
        loop = setInterval(status3, 1000);
    }
}
function push4() {
    if (!mmedia4.paused && !mmedia4.ended) {
        mmedia4.pause();
        play4.value = '재생';
        clearInterval(loop);
    } else {
        mmedia4.play();
        play4.value = '정지';
        loop = setInterval(status4, 1000);
    }
}
function push5() {
    if (!mmedia5.paused && !mmedia5.ended) {
        mmedia5.pause();
        play5.value = '재생';
        clearInterval(loop);
    } else {
        mmedia5.play();
        play5.value = '정지';
        loop = setInterval(status5, 1000);
    }
}

function status1() {
    if (!mmedia1.ended) {
        var size = parseInt(mmedia1.currentTime * maxim / mmedia1.duration);
        progress1.style.width = size + 'px';
    } else {
        progress1.style.width = '0px';
        play1.value = '재생';
        clearInterval(loop);
    }
}
function status2() {
    if (!mmedia2.ended) {
        var size = parseInt(mmedia2.currentTime * maxim / mmedia2.duration);
        progress2.style.width = size + 'px';
    } else {
        progress2.style.width = '0px';
        play2.value = '재생';
        clearInterval(loop);
    }
}
function status3() {
    if (!mmedia3.ended) {
        var size = parseInt(mmedia3.currentTime * maxim / mmedia3.duration);
        progress3.style.width = size + 'px';
    } else {
        progress3.style.width = '0px';
        play3.value = '재생';
        clearInterval(loop);
    }
}
function status4() {
    if (!mmedia4.ended) {
        var size = parseInt(mmedia4.currentTime * maxim / mmedia4.duration);
        progress4.style.width = size + 'px';
    } else {
        progress4.style.width = '0px';
        play4.value = '재생';
        clearInterval(loop);
    }
}
function status5() {
    if (!mmedia5.ended) {
        var size = parseInt(mmedia5.currentTime * maxim / mmedia5.duration);
        progress5.style.width = size + 'px';
    } else {
        progress5.style.width = '0px';
        play5.value = '재생';
        clearInterval(loop);
    }
}
function move1(e) {
    if (!mmedia1.paused && !mmedia1.ended) {
        var mouseX = e.pageX - bar1.offsetLeft;
        var newtime = mouseX * mmedia1.duration / maxim;
        mmedia1.currentTime = newtime;
        progress1.style.width = mouseX + 'px';
    }
}
function move2(e) {
    if (!mmedia2.paused && !mmedia2.ended) {
        var mouseX = e.pageX - bar2.offsetLeft;
        var newtime = mouseX * mmedia2.duration / maxim;
        mmedia2.currentTime = newtime;
        progress2.style.width = mouseX + 'px';
    }
}
function move3(e) {
    if (!mmedia3.paused && !mmedia3.ended) {
        var mouseX = e.pageX - bar3.offsetLeft;
        var newtime = mouseX * mmedia3.duration / maxim;
        mmedia3.currentTime = newtime;
        progress3.style.width = mouseX + 'px';
    }
}
function move4(e) {
    if (!mmedia4.paused && !mmedia4.ended) {
        var mouseX = e.pageX - bar4.offsetLeft;
        var newtime = mouseX * mmedia4.duration / maxim;
        mmedia4.currentTime = newtime;
        progress4.style.width = mouseX + 'px';
    }
}
function move5(e) {
    if (!mmedia5.paused && !mmedia5.ended) {
        var mouseX = e.pageX - bar5.offsetLeft;
        var newtime = mouseX * mmedia5.duration / maxim;
        mmedia5.currentTime = newtime;
        progress5.style.width = mouseX + 'px';
    }
}

function sound1() {
    if (mute1.value == '음소거') {
        mmedia1.muted = true;
        mute1.value = '소리';
    } else {
        mmedia1.muted = false;
        mute1.value = '음소거';
    }
}
function sound2() {
    if (mute2.value == '음소거') {
        mmedia2.muted = true;
        mute2.value = '소리';
    } else {
        mmedia2.muted = false;
        mute2.value = '음소거';
    }
}
function sound3() {
    if (mute3.value == '음소거') {
        mmedia3.muted = true;
        mute3.value = '소리';
    } else {
        mmedia3.muted = false;
        mute3.value = '음소거';
    }
}
function sound4() {
    if (mute4.value == '음소거') {
        mmedia4.muted = true;
        mute4.value = '소리';
    } else {
        mmedia4.muted = false;
        mute4.value = '음소거';
    }
}
function sound5() {
    if (mute5.value == '음소거') {
        mmedia5.muted = true;
        mute5.value = '소리';
    } else {
        mmedia5.muted = false;
        mute5.value = '음소거';
    }
}
function level1() {
    mmedia1.volume = volume1.value;
}
function level2() {
    mmedia2.volume = volume2.value;
}
function level3() {
    mmedia3.volume = volume3.value;
}
function level4() {
    mmedia4.volume = volume4.value;
}
function level5() {
    mmedia5.volume = volume5.value;
}

/* image script */
var image1, image2, image3, image4, image5;
var imageNote1, imageNote2, imageNote3, imageNote4, imageNote5;

function imageInitiate() {
    image1 = document.getElementById('image1');
    image2 = document.getElementById('image2');
    image3 = document.getElementById('image3');
    image4 = document.getElementById('image4');
    image5 = document.getElementById('image5');

    imageNote1 = document.getElementById('imageNote1');
    imageNote2 = document.getElementById('imageNote2');
    imageNote3 = document.getElementById('imageNote3');
    imageNote4 = document.getElementById('imageNote4');
    imageNote5 = document.getElementById('imageNote5');

    imageNote1.innerHTML = '<p style="text-align:left;color:white;">'
            + image1.alt + '</p>';
    imageNote2.innerHTML = '<p style="text-align:left;color:white;">'
            + image2.alt + '</p>';
    imageNote3.innerHTML = '<p style="text-align:left;color:white;">'
            + image3.alt + '</p>';
    imageNote4.innerHTML = '<p style="text-align:left;color:white;">'
            + image4.alt + '</p>';
    imageNote5.innerHTML = '<p style="text-align:left;color:white;">'
            + image5.alt + '</p>';


    image1.addEventListener('mouseover', showNote1);
    image2.addEventListener('mouseover', showNote2);
    image3.addEventListener('mouseover', showNote3);
    image4.addEventListener('mouseover', showNote4);
    image5.addEventListener('mouseover', showNote5);

    image1.addEventListener('mouseout', showNote1);
    image2.addEventListener('mouseout', showNote2);
    image3.addEventListener('mouseout', showNote3);
    image4.addEventListener('mouseout', showNote4);
    image5.addEventListener('mouseout', showNote5);

    imageNote1.addEventListener('mouseover', showNote1);
    imageNote2.addEventListener('mouseover', showNote2);
    imageNote3.addEventListener('mouseover', showNote3);
    imageNote4.addEventListener('mouseover', showNote4);
    imageNote5.addEventListener('mouseover', showNote5);

    imageNote1.addEventListener('mouseout', showNote1);
    imageNote2.addEventListener('mouseout', showNote2);
    imageNote3.addEventListener('mouseout', showNote3);
    imageNote4.addEventListener('mouseout', showNote4);
    imageNote5.addEventListener('mouseout', showNote5);
}

function showNote1() // 클래스 전환
{
    imageNote1.classList.toggle("imageNoteVisible");
    length = image1.offsetWidth - 20;
    imageNote1.style.width = length + 'px';

}
function showNote2() {
    imageNote2.classList.toggle("imageNoteVisible");
    length = image2.offsetWidth - 20;
    imageNote2.style.width = length + 'px';

}
function showNote3() {
    imageNote3.classList.toggle("imageNoteVisible");
    length = image3.offsetWidth - 20;
    imageNote3.style.width = length + 'px';

}
function showNote4() {
    imageNote4.classList.toggle("imageNoteVisible");
    length = image4.offsetWidth - 20;
    imageNote4.style.width = length + 'px';

}
function showNote5() {
    imageNote5.classList.toggle("imageNoteVisible");
    length = image5.offsetWidth - 20;
    imageNote5.style.width = length + 'px';

}


addEventListener('load', videoInitiate);
addEventListener('load', imageInitiate);