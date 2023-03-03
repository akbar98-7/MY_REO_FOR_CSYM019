
function myLoadFunction() {
    var element = document.getElementById('pageheading');
    
    element.firstChild.nodeValue = 'New Heading';
    
    var element = document.getElementById('pagecontent')
    element.firstChild.nodeValue = 'New content';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);

