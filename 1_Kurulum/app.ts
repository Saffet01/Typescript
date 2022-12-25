console.log("Typescripte girdik");
console.log("Selam");

let age:number = 29;
let firstName:string = "Saffet";

console.log(age);
console.log(firstName);

let isUpdated:boolean = true;

console.log(isUpdated);


const employeName:string ="Saffet";
let employeDesc:string = `${employeName} works well.`;
console.log(employeDesc);

let isPresent:boolean=true;
console.log(isPresent);

//string array tanımlamak için kullanılan 1. yöntem;
let names:string[] =["Saffet", "Ramazan", "Kaban"];
console.log(names);

//string array tanımlamak için kullanılan 2. yöntem;
let soyIsimler:Array<string> = ["Kaban", "Yıldırım", "Demirhan"];
console.log(soyIsimler);


//Tuples
let instructorName:string = "Can Boz";
console.log(instructorName);

let instructor:[number, string, boolean] = [1, "Can Boz", false];
console.log(instructor);


//Object
let ogretmen:object;

ogretmen={
    isim:"Can",
    soiyim:"Boz",
    yas:29,
    meslek:"Ogretmen"
}

console.log(ogretmen);
//console.log(ogretmen.yas);


//enum 
enum media {
    newspaper,
    newsletter,
    magazine,
    book
}

console.log(media.newsletter);


//Union
let code:string | number = "123";
console.log(code);

//Any
let someThing:any = "Selam";
console.log(someThing);

someThing=321;
console.log(someThing);


//void
function sayHello(): void{
    console.log("Hi!")
}

sayHello();


//If else 
let x:number = 15;
let y:number = 25;

if(x>y){
    console.log("x y'den büyüktür.");
}
else{
    console.log("x y'den küçüktür veya eşittir.");
}

// Ternary örneği
x<y ? console.log("x y'den küçüktür.") : console.log("x y'den büyüktür.");


//Switch Case
let day:number = 2;

switch(day){
    case 0:
        console.log("Pazar");
        break;

    case 1: 
        console.log("pazartesi");
        break;

    case 2:
        console.log("salı");
        break;

    default:
        console.log("böyle bir gün yok");
        break;
}


//For loop
for(let i = 0; i<5; i++){
    console.log("i değerim",i);
}


//While Loop
let counter =0;
while(counter<5){
    console.log(counter);
    counter++;
}


//Function
//parametreler hariç geri dönecek değerin de type'ını tanımlamak mümkün.
function add(a:number,b:number):number{
    return a+b;
}

let toplam = add(5,6);
console.log(toplam);


function bastir():void{
    console.log("Saffet");
}

function carpim(a:number, b:number, c?:number){
    if(typeof(c) !== "undefined"){
        return a*b*c;
    }
    else{
        return a*b;
    }
}

let sonuc = carpim(2,3,6);
console.log(sonuc);