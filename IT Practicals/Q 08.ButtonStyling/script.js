var body = document.getElementById("body");
var h4 = document.getElementById("h4")
var p = document.getElementById("p");
var style1 = document.getElementById("style1");
var style2 = document.getElementById("style2");
var style3 = document.getElementById("style3");
console.log(body.classList);
const bodylist = body.classList;
const h4list = h4.classList;
const plist = p.classList;

style1.addEventListener("click", function () {

        for (var i = 0; i < bodylist.length; i++) {
                bodylist.remove(bodylist[i]);
        }
        for (var i = 0; i < h4list.length; i++) {
                h4list.remove(h4list[i]);
        }
        for (var i = 0; i < plist.length; i++) {
                plist.remove(plist[i]);
        }
        bodylist.add("style1body");
        h4list.add("style1h4");
});

style2.addEventListener("click", function () {
        for (var i = 0; i < bodylist.length; i++) {
                bodylist.remove(bodylist[i]);
        }
        for (var i = 0; i < h4list.length; i++) {
                h4list.remove(h4list[i]);
        }
        for (var i = 0; i < plist.length; i++) {
                plist.remove(plist[i]);
        }
        bodylist.add("style2body");
        h4list.add("style2h4");
        plist.add("style2p");
});

style3.addEventListener("click", function () {
        for (var i = 0; i < bodylist.length; i++) {
                bodylist.remove(bodylist[i]);
        }
        for (var i = 0; i < h4list.length; i++) {
                h4list.remove(h4list[i]);
        }
        for (var i = 0; i < plist.length; i++) {
                plist.remove(plist[i]);
        }
        bodylist.add("style3body");
        h4list.add("style2h4");
        plist.add("style2p");
});