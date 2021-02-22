function qalyncalculator() {
  var a = Number(document.getElementById("education").value);
  console.log(a);
  var result = 500;
  result *= a;

  var b = Number(document.getElementById("networth").value);
  result *= b;

  var c = document.getElementsByClassName('skills');
  for (i = 0; i < 4; i++) {
    if (c[i].checked === true) {
      result += parseFloat(c[i].value);
    }
  }

  var d = document.forms.age;
  for (i = 0; i < d.length; i++) {
    if (d[i].checked) {
      result *= parseFloat(d[i].value);
    }
  }

  var e = document.getElementsByClassName('reputation');
  console.log(e);
  for (i = 0; i < 2; i++) {
    if (e[i].checked === true) {
      result *= parseFloat(e[i].value);
    }
  }
  if (e[2].checked === true){
    result -= parseFloat(e[2].value);
  }
  localStorage.setItem("result", result);
  return false;
}
