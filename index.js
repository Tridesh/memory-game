document.addEventListener("DOMContentLoaded", function () {
    var matches = 0, flips = 0, x = 0, y = 7;
    const colors = ["green", "red", "blue", "cyan", "yellow", "violet", "aqua", "brown"];
    const numbers = [0,1,2,3,4,5,6,7];
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
    shuffle(numbers);
    // console.log(colors);
    function colorAssignment(boxName) {
        // if (boxName === undefined) {
        //     var boxe = document.querySelector(`#${boxName}`);
        //     boxe.style.backgroundColor = colors[numbers[y]];
        //     // i <= 8 ? box.style.backgroundColor = colors[boxName-1] : box.style.backgroundColor = colors[16-boxName];
        //     y--;
        // } else {
        //     var boxe = document.querySelector(`#${boxName}`);
        //     boxe.style.backgroundColor = colors[numbers[x]];
        //     // i <= 8 ? box.style.backgroundColor = colors[boxName-1] : box.style.backgroundColor = colors[16-boxName];
        //     x++;
        // }
        var boxe = document.querySelector(`#${boxName}`);
        boxe.style.backgroundColor = colors[numbers[x]];
        x++;
        
    }
    var colorBoo;
    function checkColor(box1, box2) {
        box1.style.backgroundColor == box2.style.backgroundColor ? colorBoo = 1 : colorBoo = 0;
    }
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.addEventListener('click', function () {
            flips++;
            console.log(flips); 
            //  var element = document.getElementsByClassName('box');
            // box.classList.toggle("flipped");
            if (flips == 1) {
                box.classList.toggle("firstFlip");
                // var element;
                // element = document.getElementById(box);
                console.log(box);
                console.log(box.id);
                colorAssignment(box.id);
            } else {
                box.classList.toggle("flipped");
                colorAssignment(box.id);
            }
            // checkColor()
            setTimeout(function() {
                box.classList.remove("flipped");
                box.classList.remove("firstFlip");
            }, 1000);  
        })
    });
    
});



