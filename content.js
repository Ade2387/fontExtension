document.addEventListener("keydown", function(event) {
  if (event.key === "d" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      var selectedText = window.getSelection().toString();
      if(selectedText.length>0){
          var font = window.getComputedStyle(document.getSelection().anchorNode.parentNode, null).getPropertyValue('font-family');
          alert("The font used for the selected text is: " + font);
      }
  }
});
