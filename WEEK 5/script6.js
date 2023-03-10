function updateHeading() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
}

    function updateParagraph() {
    var element = document.getElementById('pagecontent');
    element.firstChild.nodeValue = 'New paragraph text';
   }

   function myLoadFunction() {
    var element = document.getElementById('pagecontent');
    element.addEventListener('click', updateParagraph);
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);

   