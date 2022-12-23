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
console.log(ogretmen.yas);
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
