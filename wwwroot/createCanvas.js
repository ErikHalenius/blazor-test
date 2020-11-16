

  window.CreateGraph = function(id, data) {
    var canvas = document.getElementById(id)
    if(!canvas){
        return
    }
    var ctx = canvas.getContext('2d');
    if(!ctx){
        return;
    }
    new Chart(ctx, data);
  }