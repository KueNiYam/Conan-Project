/*pageload*/
//Navigation Page
function navInitiate() {
    var nav1 = document.getElementById('li1'),
        nav2 = document.getElementById('li2'),
        nav3 = document.getElementById('li3'),
        nav4 = document.getElementById('li4');

    nav1.addEventListener('click', function () {
        changeclass1(nav1, "news")
    });
    nav2.addEventListener('click', function () {
        changeclass1(nav2, "image")
    });
    nav3.addEventListener('click', function () {
        changeclass1(nav3, "video")
    });
    nav4.addEventListener('click', function () {
        changeclass1(nav4, "game")
    });
}
function nReset() {
    for (var i = 1; i < 5; i++)
        document.getElementById('li' + i).classList.remove("active");
    document.getElementById('home').classList.remove("active");
    document.getElementById('home').classList.add("unActive");
    document.getElementById('news').classList.remove("active");
    document.getElementById('news').classList.add("unActive");
    document.getElementById('image').classList.remove("active");
    document.getElementById('image').classList.add("unActive");
    document.getElementById('video').classList.remove("active");
    document.getElementById('video').classList.add("unActive");
    document.getElementById('game').classList.remove("active");
    document.getElementById('game').classList.add("unActive");
}
function changeclass1(v, na) {
    nReset();
    v.classList.add("active");
    document.getElementById(na).classList.remove("unActive");
    document.getElementById(na).classList.add("active");

    a_reset("news");
    a_reset("img");
    a_reset("video");
    switch (na) {
        case 'news':
            a_changeclass1(nsd1, 1);
            break;
        case 'image':
            a_changeclass1(isd1, 1);
            break;
        case 'video':
            a_changeclass1(vsd1, 1);
            break;
        case 'game':
            break;
    }
}
addEventListener('load', navInitiate);

//Aside Page
function asdInitiate() {
    var nsd1 = document.getElementById('nsd1'),
        nsd2 = document.getElementById('nsd2'),
        nsd3 = document.getElementById('nsd3'),
        nsd4 = document.getElementById('nsd4'),
        nsd5 = document.getElementById('nsd5'),

        isd1 = document.getElementById('isd1'),
        isd2 = document.getElementById('isd2'),
        isd3 = document.getElementById('isd3'),
        isd4 = document.getElementById('isd4'),
        isd5 = document.getElementById('isd5'),

        vsd1 = document.getElementById('vsd1'),
        vsd2 = document.getElementById('vsd2'),
        vsd3 = document.getElementById('vsd3'),
        vsd4 = document.getElementById('vsd4'),
        vsd5 = document.getElementById('vsd5');

    nsd1.addEventListener('click', function () {
        a_changeclass1(nsd1, 1)
    });
    nsd2.addEventListener('click', function () {
        a_changeclass1(nsd2, 2)
    });
    nsd3.addEventListener('click', function () {
        a_changeclass1(nsd3, 3)
    });
    nsd4.addEventListener('click', function () {
        a_changeclass1(nsd4, 4)
    });
    nsd5.addEventListener('click', function () {
        a_changeclass1(nsd5, 5)
    });

    isd1.addEventListener('click', function () {
        a_changeclass1(isd1, 1)
    });
    isd2.addEventListener('click', function () {
        a_changeclass1(isd2, 2)
    });
    isd3.addEventListener('click', function () {
        a_changeclass1(isd3, 3)
    });
    isd4.addEventListener('click', function () {
        a_changeclass1(isd4, 4)
    });
    isd5.addEventListener('click', function () {
        a_changeclass1(isd5, 5)
    });

    vsd1.addEventListener('click', function () {
        a_changeclass1(vsd1, 1)
    });
    vsd2.addEventListener('click', function () {
        a_changeclass1(vsd2, 2)
    });
    vsd3.addEventListener('click', function () {
        a_changeclass1(vsd3, 3)
    });
    vsd4.addEventListener('click', function () {
        a_changeclass1(vsd4, 4)
    });
    vsd5.addEventListener('click', function () {
        a_changeclass1(vsd5, 5)
    });
}
function a_reset(n) {
    switch (n) {
        case "news":
            for (var i = 1; i < 6; i++) {
                document.getElementById("nsd" + i).classList.remove("active");
                document.getElementById("news" + i).classList.remove("active");
                document.getElementById("news" + i).classList.add("unActive");
            }
            break;

        case "img":
            for (var i = 1; i < 6; i++) {
                document.getElementById("isd" + i).classList.remove("active");
                document.getElementById("img" + i).classList.remove("active");
                document.getElementById("img" + i).classList.add("unActive");
            }
            break;

        case "video":
            for (var i = 1; i < 6; i++) {
                document.getElementById("vsd" + i).classList.remove("active");
                document.getElementById("video" + i).classList.remove("active");
                document.getElementById("video" + i).classList.add("unActive");
            }
            break;
    }
}
function a_changeclass1(v, na) {
    switch (v) {
        case vsd1:
        case vsd2:
        case vsd3:
        case vsd4:
        case vsd5:
            a_reset("video");
            document.getElementById("video" + na).classList.remove("unActive");
            document.getElementById("video" + na).classList.add("active");
            break;
        case nsd1:
        case nsd2:
        case nsd3:
        case nsd4:
        case nsd5:
            a_reset("news");
            document.getElementById("news" + na).classList.remove("unActive");
            document.getElementById("news" + na).classList.add("active");
            break;
        case isd1:
        case isd2:
        case isd3:
        case isd4:
        case isd5:
            a_reset("img");
            document.getElementById("img" + na).classList.remove("unActive");
            document.getElementById("img" + na).classList.add("active");
            break;
    }
    v.classList.add("active");
}
addEventListener('load', asdInitiate);