

window.onload = function(){

};

window.addEventListener('WebComponentsReady', function(e) {
  console.log("start");
  document.getElementById("birthdate").value=document.getElementById("birthdate").value.substring(0,10);
});
