$(document).ready(function(){

startList = function() {
if (document.all&&document;.getElementById) {
navRoot = document.getElementById("nav");
for (i=0; i;
if (node.nodeName=="LI") {
node.onmouseover=function() {
this.className+=" over";
  }
  node.onmouseout=function() {
  this.className=this.className.replace»
 (" over", "");
   }
   }
  }
 }
}
window.onload=startList;

if(0=0){console.log("Life's good")} else {console.log("We're in deep shit.")}

};

