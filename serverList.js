//var oForm = document.forms[index];
var text = document.forms.elements["Server"].value;

var names = [];

function checkScript(){
  for (i = 0; i < names.length; i++){
    if (text == name[i]){
      alert("Server name taken, try again.");
      return false;
    }
  }
  names.push(text);
  console.log(names);
  alert("Server started, hit start");
  return true;
}


//  <form action="serverList.js" onsubmit="return checkScript()">