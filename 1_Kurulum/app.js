console.log("Typescripte girdik");
console.log("Selam");
var age = 29;
var firstName = "Saffet";
console.log(age);
console.log(firstName);
var isUpdated = true;
console.log(isUpdated);
var employeName = "Saffet";
var employeDesc = "".concat(employeName, " works well.");
console.log(employeDesc);
var isPresent = true;
console.log(isPresent);
//string array tanımlamak için kullanılan 1. yöntem;
var names = ["Saffet", "Ramazan", "Kaban"];
console.log(names);
//string array tanımlamak için kullanılan 2. yöntem;
var soyIsimler = ["Kaban", "Yıldırım", "Demirhan"];
console.log(soyIsimler);
//Tuples
var instructorName = "Can Boz";
console.log(instructorName);
var instructor = [1, "Can Boz", false];
console.log(instructor);
//Object
var ogretmen;
ogretmen = {
    isim: "Can",
    soiyim: "Boz",
    yas: 29,
    meslek: "Ogretmen"
};
console.log(ogretmen);
//console.log(ogretmen.yas);
//enum 
var media;
(function (media) {
    media[media["newspaper"] = 0] = "newspaper";
    media[media["newsletter"] = 1] = "newsletter";
    media[media["magazine"] = 2] = "magazine";
    media[media["book"] = 3] = "book";
})(media || (media = {}));
console.log(media.newsletter);
//Union
var code = "123";
console.log(code);
//Any
var someThing = "Selam";
console.log(someThing);
someThing = 321;
console.log(someThing);
//void
function sayHello() {
    console.log("Hi!");
}
sayHello();
//If else 
var x = 15;
var y = 25;
if (x > y) {
    console.log("x y'den büyüktür.");
}
else {
    console.log("x y'den küçüktür veya eşittir.");
}
// Ternary örneği
x < y ? console.log("x y'den küçüktür.") : console.log("x y'den büyüktür.");
//Switch Case
var day = 2;
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
for (var i = 0; i < 5; i++) {
    console.log("i değerim", i);
}
//While Loop
var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
//Function
//parametreler hariç geri dönecek değerin de type'ını tanımlamak mümkün.
function add(a, b) {
    return a + b;
}
var toplam = add(5, 6);
console.log(toplam);
function bastir() {
    console.log("Saffet");
}
function carpim(a, b, c) {
    if (typeof (c) !== "undefined") {
        return a * b * c;
    }
    else {
        return a * b;
    }
}
var sonuc = carpim(2, 3, 6);
console.log(sonuc);
//Class Mantığı
var person = /** @class */ (function () {
    function person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.LastName = lastName;
    }
    return person;
}());
var personDetail = new person(43, "Can", "Boz");
console.log(personDetail);
//Access Modifiers (Public, Private, Protected)
var person2 = /** @class */ (function () {
    function person2(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.LastName = lastName;
    }
    person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.LastName);
    };
    return person2;
}());
var kisiBilgim = new person2(43, "Saffet", "Kaban");
console.log(kisiBilgim.id);
