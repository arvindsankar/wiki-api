function getSelectedText() {
        var text = "";
        if (typeof window.getSelection != "undefined") {
            text = window.getSelection().toString();
        } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    
    function doSomethingWithSelectedText() {
        var selectedText = getSelectedText();
        if (selectedText) {
            alert("Got selected text " + selectedText);
        }
    }
    
    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;



    function renderStatus(statusText){
    document.getElementById('status').textContent = statusText;
}

//this event listener gets the tab URL, gets the image URL, and then displays the iamge or an error message
//note that function() {} defines and then executes the function! i think
document.addEventListener('DOMContentLoaded', function() {

  //so basically get current tab url has a call back function arg
//that has the get image url function which has 2 or 4 more functions with in it
//gdi
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    renderStatus('Performing Google Image search for ' + url);
////get imageURL has 3 parameters, two of which are functions
//the second function is the call back function
//the third function is the error call back function
//this makes sense if you look at the getImageUrl function
//implementation above
    
  });
});
