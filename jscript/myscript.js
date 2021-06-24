var someEroor = "<ERROR: Invalid action selection value!>\n" + 
    "<INFO for webmaster: option 'Encode' must have value 'e'; option 'Decode' must have value 'd'>\n" +
    "<CHECK: HTML code and JS-script: function 'execute'>";

function execute() {
  let _choice = document.getElementById('choice').value;
  let intData = document.getElementById('indata').value;
  let outData = "";
  
  if(_choice == 'e'){
    outData = encode(intData);
  } 
  else if(_choice == 'd'){
    outData = decode(intData)
  }
  
  else {
    outData = someEroor;
  }
  
  document.getElementById('outdata').value = outData;
  
}

function encode(message){
  try{
    let encodedMessage  = btoa(message);  
    return encodedMessage;
  }
  catch{
    return "<INPUT ERROR: Only works with English text!>";  
  }
}

function decode(message){
  try{
    let dencodedMessage = atob(message);
    return dencodedMessage;
  }
  catch{
    return "<INPUT ERROR: Check the entered data.>";
  }
}
