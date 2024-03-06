document.addEventListener("DOMContentLoaded", function () {
    const colours = ["pink", "cyan", "green", "blue", "yellow", "violet", "brown", "orange"];
    var boxes = document.querySelectorAll(".flippable");
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            // Toggle the 'flipped' class to trigger the animation
            box.classList.toggle("flipped");
            // Add logic here to handle the color assignment (random or predefined)
        });
    });
    for (let i = 1; i < 25; i++) {
        var box = document.querySelector(`#box${i}`);
        box.style.backgroundColor = colours[parseInt(Math.random() * 7)];
        // box.style.backgroundColor = "transparent";
    }
});



