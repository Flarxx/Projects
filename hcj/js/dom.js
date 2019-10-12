//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var parent = document.getElementById("demao");
    var child = document.getElementById("p1");
    parent.removeChild(child);
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demao");
    var child = document.getElementById("p2");
    parent.replaceChild(p, child);
    var pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);

    function move() {
        if(pos >= 150) {
            //clearInterval(t);
        pos = 0;
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
    var x = document.getElementById('time');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};
function setText() {
    var a = document.getElementById("demo");
    var arr = a.childNodes;
    for(var x=0;x<arr.length;x++) {
        arr[x].innerHTML = "new text";
    }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 500);
function srcimg() {
    var el = document.getElementById("myimg");
    el.src = "https://cdn-images-1.medium.com/max/1200/1*CtbRlUx4gzE74L7yFaQxxg.png";
}
setTimeout(srcimg, 500);
function a1() {
    var a = document.getElementsByTagName("a");
    a[0].href = "http://www.sololearn.com";
}
setTimeout(a1, 500);
function div() {
    var x = document.getElementById("demo");
    x.style.backgroundColor = "6600FF";
    x.style.width = "100px";
}
setTimeout(div, 500);
function show() {
    alert("Hi there");
}
var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/2.jpg',
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}