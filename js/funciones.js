console.log("Hola mundo desde NodeJS");

//funciones flecha (arrow Function)- anónimas
let mifuncion= a => 5*2;
//utilizacion
console.log(mifuncion())

let mifuncion1= () =>Math.pow(8,1/3);
console.log(mifuncion1())

//funcion anonima
let mifuncion2=function(){return Math.pow (5,3)}
console.log(mifuncion2())

let mifuncion3=()=> console.log(9*8)
mifuncion3()

let a=mifuncion1();
console.log (a);

let mifuncion4=(a,b)=> a*b;
console.log(mifuncion4(4,12))

//Funcion anonima
const mifuncion5=function (a,b){return a*b}
let multi =mifuncion5(45,6)
console.log(multi)

function mifuncion6(a,b){
    return a*b;
}
console.log(mifuncion6 (7,8));

//Generar una funcion que retorne la suma de los 10 primeros numeros naturales
function sumaNros(){
    let acumnros=0
    for(i=1;i<=10;i++){
        acumnros= acumnros+i;
    }
    return acumnros;
}
console.log(`El acumulador de Nros es: ${sumaNros()}`);

//Generar una funcion que retorne un numero al azar entre 0 y 10
let nrorandom = (maximo) => Math.floor(Math.random()* maximo);
console.log(nrorandom(10))
let nroganador = nrorandom(10)
console.log(`El numero ganador es: ${nroganador}`)

