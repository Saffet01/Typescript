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
console.log(ogretmen.yas);



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

