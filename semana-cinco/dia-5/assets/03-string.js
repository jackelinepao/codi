var nombre = "Asociacion Tecsup Arequipa"
console.log(nombre.toLowerCase());
console.log(nombre.toLocaleUpperCase());
console.log(nombre.toUpperCase());
console.log(nombre)
console.log(nombre.length);
console.log(nombre.substring(11, 17));
console.log(nombre.substring(11));
console.log(nombre.split(" "));
console.log(nombre[11]);
console.log(nombre.charAt(11));
console.log(nombre.indexOf("e"));
console.log(nombre.trim());

for (var i = 0; i < nombre.length; i++) {
    console.log(nombre.charAt(i));
}
var cont = 0;
var nombrem = nombre.toLowerCase();
for (var i = 0; i < nombre.length; i++) {
    if (nombrem[i] == "a" || nombrem[i] == "e" || nombrem[i] == "i" || nombrem[i] == "o" || nombrem[i] == "u") {
        cont++;
    }
}
console.log(cont);