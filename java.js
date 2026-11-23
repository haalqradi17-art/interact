let count = 0;

// زر JavaScript
 document.getElementById("btn1").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
    document.body.style.backgroundColor = "white";
});

// زر jQuery
$("#btn2").on("click", function () {
    count++;
    $("#count").text(count);
    $("body").css("background-color", "lightgreen");
});

// زر Reset
$("#reset").on("click", function () {
    count = 0;
    $("#count").text(count);
});
