function minus() {
  if (document.getElementById("num")) {
    var curr = parseFloat(document.getElementById("num").innerHTML);
  }

  if (curr && curr <= 60) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 0.01).toFixed(2);
    } else {
      document.getElementById("num").innerHTML = (curr - 0.01).toFixed(2);
    }
  } else {
    document.getElementById("num").innerHTML = "00.00";
  }

  setTimeout(function() {
    minus();
  }, 10);
};
minus();