function turnCaret() {
    $("icon", this).toggleClass("glyphicon glyphicon-chevron-right")
    $("icon", this).toggleClass("glyphicon glyphicon-chevron-down")
    $(".project-details", this).slideToggle()
}


$("#pair-necessities").on("click", turnCaret)
$("#skills-app").on("click", turnCaret)