var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Private değer Class dışarısında kullanılamaz.
//console.log(kisiBilgim.firstName);
//parent class person2, child class employee
//Inheritance
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return employee;
}(person2));
var Employee = new employee(29, "Saffet", "Ramazan");
console.log(Employee);
//Static 
var circle = /** @class */ (function () {
    function circle() {
    }
    circle.calculate = function (radius) {
        return this.pi * radius * radius;
    };
    circle.pi = 3.14;
    return circle;
}());
console.log(circle.pi);
console.log(circle.calculate(3));
//abstract class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    } // 3- yollanan "Accounting and Auditing"i name ile tutuyoruz
    Department.prototype.printName = function () {
        console.log("Department name: ".concat(this.name));
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
        // 2 - "Accounting and Auditing"i departmente geçeceğim.
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10 am.");
    };
    AccountingDepartment.prototype.generateReport = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReport();
function tumIsimAl(kisi) {
    if (kisi.ortaIsim) {
        //orta isim varsa kisi içerisinde return değişir
        return "".concat(kisi.ilkIsim, " ").concat(kisi.ortaIsim, " ").concat(kisi.sonIsim);
    }
    else {
        return "".concat(kisi.ilkIsim, " ").concat(kisi.sonIsim);
    }
}
var kisi = {
    ilkIsim: "Saffet",
    sonIsim: "Kaban",
    ortaIsim: "Ramazan"
};
console.log(tumIsimAl(kisi));
var iemployee = {
    empNum: 1,
    gender: "Male",
    namee: "Saffet"
};
console.log(iemployee);
var yeniKisi = {
    AccountName: "Saffet",
    AccountId: 54,
    AccountEmail: "srk@gmail.com",
    AccountPhone: "431 2313"
};
console.log(yeniKisi);
//Generics
function getRandomNumber(numItems) {
    var randomNumIndex = Math.floor(Math.random() * numItems.length);
    return numItems[randomNumIndex];
}
var numbers = [1, 54, 67, 7, 8];
console.log(getRandomNumber(numbers));
function getRandomString(strItems) {
    var randomStrIndex = Math.floor(Math.random() * strItems.length);
    return strItems[randomStrIndex];
}
var strArr = ["Alperen", "Yıldırım", "Saffet", "Ramazan"];
console.log(getRandomString(strArr));
function getRandomElements(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElements(numbers));
var mounth = {
    key: 1,
    value: "January"
};
console.log(mounth);
