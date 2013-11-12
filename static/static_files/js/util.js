/**
 *  * @fileoverview Description of this file.
 *   */
function append_date() {
   h1s = document.getElementsByTagName('h1');
   h1s[0].innerHTML += ' - '; 
   h1s[0].innerHTML += Date();
   console.log('innerHtml: ' + h1s[0].innerHTML);
} 

