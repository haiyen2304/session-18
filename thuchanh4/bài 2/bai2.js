//  Tạo một class Dog có những thuộc tính:

// Tên và tốc độ di chuyển

// Có khả năng thực hiện sủa

// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn

// Tạo class Cat có những thuộc tính sau:

// Tên và tốc dộ di chuyển
function Dog(name, speed) {
  this.name = name;
  this.speed = speed;
  this.sua = "go!go!";
  this.batmeo = function (cat) {
    if (this.speed > cat.speed) {
      console.log(`${this.name} bắt được ${cat.name}`);
    } else {
      console.log(`${this.name} không bắt được ${cat.name}`);
    }
  };
}
function Cat(name, speed) {
  this.name = name;
  this.speed = speed;
}

let dog = new Dog("pug", 40);
let cat = new Cat("tom", 30);

console.log(dog);
console.log(cat);

let catBig = new Cat("BigTom", 50);
dog.batmeo(cat); // truyền tham số con mèo vào để lấy tốc độ so sánh
dog.batmeo(catBig);
console.log(catBig);
