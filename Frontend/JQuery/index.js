// $(document).ready(function() {                      //if the script tag is added above the body sections or inside the head section
//     $("h1").css("color", "red");
// })

// $("h1").addClass("big-title mirgin"

// $("h1").text("Bye");

// $("button").text("Don't click me");
// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.bing.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })

//javaScript
// for(var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

//same thing with jQuery
// $("button").click(function() {
//     $("h1").css("color", "purple");
// })

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})