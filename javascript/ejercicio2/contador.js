(function (){
  var button = document.getElementById("plusone");
  var label = document.getElementById("count");
  var count = 0;
  
  function updateLabel() {
    label.innerHTML = count;
  }

  button.onclick = function () {
    count++;
    updateLabel();
  };

  updateLabel();

})();
