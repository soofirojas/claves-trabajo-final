var textArray = []; //vamos a rellenarlo con un For
for(var i = 0; i <= 10; i++) {
  textArray.push(i); //agreagar un elemento en la ultima posición
}
console.log(textArray);
//eliminar el primer elemento
textArray.shift(textArray);
console.log(textArray);
//quitamos el primer elemento
textArray.shift(textArray);
//eliminar eliminar el primer elemento
console.log(textArray);

//revertir el orden de un arreglo
textArray.reverse();
console.log(textArray);
/*-----------------*/
var testString = "abcde";
testString.charAt(2);
//c
/*Para obtener un caracter a partir de su código ASCII
utilizo el método String.froCharcode*/
//Declara una variable con la letra en código ASCII que necesitamos
var codigo = testString.charCodeAt(2)
console.log(codigo);
//-->99 (el 99 significa "c" en códig ASCCI)
String.fromCharCode(99)
//-->"c"
