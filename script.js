function changeColor()
{
  var hex_symbols = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

  var hex_code = '';
  
  for(var i = 0; i<6; i++){
    var random_index = Math.floor(Math.random() * hex_symbols.length);
    hex_code += hex_symbols[random_index];
  }

  document.getElementById("hex-code").innerHTML = hex_code;
  document.body.style.backgroundColor = '#' + hex_code;
}