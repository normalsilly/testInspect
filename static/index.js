// Block F12
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

// Block right click
//$(document).bind("contextmenu",function(e) {
//	e.preventDefault();
//});

// Hide the specific code (include the real dom) when inspect
$(document).ready(function() {
    var currentHtmlContent;
    var element = new Image();
    var elementWithHiddenContent = document.querySelector("#hideId");
    var innerHtml = elementWithHiddenContent.innerHTML;

    element.__defineGetter__("id", function() {
        currentHtmlContent= "";
    });

    setInterval(function() {
        currentHtmlContent= innerHtml;
        console.log(element);
        console.clear();
        elementWithHiddenContent.innerHTML = currentHtmlContent;
    }, 1000);
});