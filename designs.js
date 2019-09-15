function setColorFromPicker(event) {
  var color = document.getElementById("colorPicker").value;
  event.setAttribute("style","background-Color:"+color)
}

function makeGrid1() {
  var width = document.getElementById("inputWidth").value ;
  var height = document.getElementById("inputHeight").value ;;
  var gridTable = document.getElementById("pixelCanvas");
  gridTable.innerHTML="";

  for(var i=0; i < height; i++) {
    createdTR=document.createElement("tr");
    for(var j=0; j < width; j++) {
      newTD=document.createElement("td");
      newTD.setAttribute("onclick", "setColorFromPicker(this)");
      createdTR.appendChild(newTD);
      }
    gridTable.appendChild(createdTR);
}
}
