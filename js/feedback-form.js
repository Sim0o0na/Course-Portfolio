$("form").submit(function(e){
    e.preventDefault();
    getNextForm($(this).closest('form').children('input[type=hidden]'));
});

function getNextForm(hiddenInputElement) {
    let closestForm = $(hiddenInputElement).closest("form");
    let nextForm = $(hiddenInputElement).closest("form").next();
    let previousProgressElement = $("#" + hiddenInputElement.val())
    if (nextForm.length != 0) {
        previousProgressElement.css("background", "white");
        previousProgressElement.css("color", "#3A599C");
        closestForm.css("display", "none");
        nextForm.css("display", "flex");
        $("#" + nextForm.children('input[type=hidden]').val()).css("background", "#3A599C");
        $("#" + nextForm.children('input[type=hidden]').val()).css("animation", "pop 0.5s ease-in-out 1");
        $("#" + nextForm.children('input[type=hidden]').val()).css("color", "white");
    }
}