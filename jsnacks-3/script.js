/*
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

var triangle = {
  'base': 3,
  'height': 4,
}

var hypotenuse =((triangle.base**2  + triangle.height**2)** .5); // **0.5 elevato alla 0.5 equivale alla radice quadrata
console.log(hypotenuse)
var perimeter = triangle.base + triangle.height + hypotenuse;
console.log(perimeter)
var area = (triangle.base * triangle.height)/2;

$('#result-3').append('il perimetro del triangolo è uguale a ' + perimeter + ',  mentre la sua area è uguale a ' + area);
