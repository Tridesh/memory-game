document.addEventListener("DOMContentLoaded", function () {
    const matches = 0, flips = 0;
    const colors = ["green", "red", "blue", "cyan", "yellow", "violet", "aqua", "brown"];
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
      }
    shuffle(colors);
    // console.log(colors);
    function colorAssignment() {
        for (let i = 1; i < 17; i++) {
            var box = document.querySelector(`#box${i}`);
            i <= 8 ? box.style.backgroundColor = colors[i-1] : box.style.backgroundColor = colors[16-i];
        }
    }
    function checkColor(box1, box2) {
        var colorBoo;
        box1.style.backgroundColor == box2.style.backgroundColor ? colorBoo = 1 : colorBoo = 0;
    }
    
});



