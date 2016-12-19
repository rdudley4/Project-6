// Find stroke length for all logo text paths.

var dashArray = [];
var nodes = document.querySelector('.text').childNodes;


for (i=0; i < nodes.length; i++) {
  if(nodes[i].nodeType == 1) {
    dashArray.push(nodes[i]);
  }
}

console.log(dashArray.length + " nodes found.");

for (i=0; i < dashArray.length; i++ ) {
  var dashLength = dashArray[i].getTotalLength();
  console.log("Node " + (i + 1) + " length : " + dashLength);
}