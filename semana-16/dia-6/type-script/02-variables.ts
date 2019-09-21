let texto:String = "Paola";
texto = "Jacky";
let miedad:Number = 20;

let conHambre:Boolean = true;

let multidata:any = 0;
multidata = "ssss";
multidata = true;

let numeros:Number[] = [1,2,3,4,5,5];
let arrMultidatos:any[] = [1,"dos", 3, 4, false];
let masmultidata:Array<any> = [1, 2, "tres", "cuatro", "cinco", true]

let anio:Number|String = 2019;
anio = "2019";

console.log(anio);
numeros.forEach((element:Number) => {
    console.log(element);
});
arrMultidatos.forEach((element:any) => {
    console.log(element);
});