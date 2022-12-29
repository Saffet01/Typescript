console.log("Typescripte girdik");
console.log("Selam");

let age: number = 29;
let firstName: string = "Saffet";

console.log(age);
console.log(firstName);

let isUpdated: boolean = true;

console.log(isUpdated);


const employeName: string = "Saffet";
let employeDesc: string = `${employeName} works well.`;
console.log(employeDesc);

let isPresent: boolean = true;
console.log(isPresent);

//string array tanımlamak için kullanılan 1. yöntem;
let names: string[] = ["Saffet", "Ramazan", "Kaban"];
console.log(names);

//string array tanımlamak için kullanılan 2. yöntem;
let soyIsimler: Array<string> = ["Kaban", "Yıldırım", "Demirhan"];
console.log(soyIsimler);


//Tuples
let instructorName: string = "Can Boz";
console.log(instructorName);

let instructor: [number, string, boolean] = [1, "Can Boz", false];
console.log(instructor);


//Object
let ogretmen: object;

ogretmen = {
    isim: "Can",
    soiyim: "Boz",
    yas: 29,
    meslek: "Ogretmen"
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
let code: string | number = "123";
console.log(code);

//Any
let someThing: any = "Selam";
console.log(someThing);

someThing = 321;
console.log(someThing);


//void
function sayHello(): void {
    console.log("Hi!")
}

sayHello();


//If else 
let x: number = 15;
let y: number = 25;

if (x > y) {
    console.log("x y'den büyüktür.");
}
else {
    console.log("x y'den küçüktür veya eşittir.");
}

// Ternary örneği
x < y ? console.log("x y'den küçüktür.") : console.log("x y'den büyüktür.");


//Switch Case
let day: number = 2;

switch (day) {
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
for (let i = 0; i < 5; i++) {
    console.log("i değerim", i);
}


//While Loop
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}


//Function
//parametreler hariç geri dönecek değerin de type'ını tanımlamak mümkün.
function add(a: number, b: number): number {
    return a + b;
}

let toplam = add(5, 6);
console.log(toplam);


function bastir(): void {
    console.log("Saffet");
}

function carpim(a: number, b: number, c?: number) {
    if (typeof (c) !== "undefined") {
        return a * b * c;
    }
    else {
        return a * b;
    }
}

let sonuc = carpim(2, 3, 6);
console.log(sonuc);


//Class Mantığı
class person {
    id;
    firstName;
    LastName;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.LastName = lastName;
    }
}


let personDetail = new person(43, "Can", "Boz");
console.log(personDetail);


//Access Modifiers (Public, Private, Protected)
class person2 {
    public id;
    private firstName;
    LastName;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.LastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.LastName}`;
    }

}

let kisiBilgim = new person2(43, "Saffet", "Kaban");
console.log(kisiBilgim.id);

//Private değer Class dışarısında kullanılamaz.
//console.log(kisiBilgim.firstName);


//parent class person2, child class employee
//Inheritance
class employee extends person2 {

    constructor(id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
    }

}

let Employee = new employee(29, "Saffet", "Ramazan");

console.log(Employee);



//Static 
class circle {
    static pi: number = 3.14;

    static calculate(radius) {
        return this.pi * radius * radius;
    }
}


console.log(circle.pi);
console.log(circle.calculate(3));


//abstract class
abstract class Department {
    constructor(public name: string) { } // 3- yollanan "Accounting and Auditing"i name ile tutuyoruz

    printName(): void {
        console.log(`Department name: ${this.name}`);
    }

    abstract printMeeting(): void; // abstract metod tanımladığında bunu child classta da kullanman gerek yoksa hata veriyor
    //Abstract class içerisinde ille abstract metod tanımlamaya gerek yok tabii
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // 1- Super keywordu ile parent class olan departmente geçebliyoruz.
        // 2 - "Accounting and Auditing"i departmente geçeceğim.
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10 am.")
    }

    generateReport(): void {
        console.log("Generating accounting reports...");
    }
}

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReport();


//ınterface
interface Person {
    ilkIsim: string,
    sonIsim: string,
    ortaIsim?: string //orta isim varsa eğer string olarak al dedik burada
}

function tumIsimAl(kisi: Person) {
    if (kisi.ortaIsim) {
        //orta isim varsa kisi içerisinde return değişir
        return `${kisi.ilkIsim} ${kisi.ortaIsim} ${kisi.sonIsim}`;
    }
    else {

        return `${kisi.ilkIsim} ${kisi.sonIsim}`;
    }
}

let kisi = {
    ilkIsim: "Saffet",
    sonIsim: "Kaban",
    ortaIsim: "Ramazan"
}

console.log(tumIsimAl(kisi));

// interface extend etme

interface IPerson {
    namee: string;
    gender: string
}

interface IEmployee extends IPerson {
    empNum: number;
}

let iemployee: IEmployee = {
    empNum: 1,
    gender: "Male",
    namee: "Saffet"
}

console.log(iemployee);


//ıntersection Type
interface BusinessPartner {
    AccountName: string;
    credit: number;
}

interface Identity {
    AccountName: string;
    AccountId: number;
}

interface Contact {
    AccountEmail: string;
    AccountPhone: string;
}


type IdCont = Identity & Contact;

let yeniKisi:IdCont={
    AccountName: "Saffet",
    AccountId: 54,
    AccountEmail: "srk@gmail.com",
    AccountPhone: "431 2313"
}

console.log(yeniKisi);