//Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
//Sau đó truy xuất các thuộc tính của đối tượng trên

let nguoi = {
  name: "haiyen",
  age: "25",
  add: "hà nam",
  phone: "0366930665",
};

console.log(nguoi.name);
console.log(Object.keys(nguoi));
console.log(Object.values(nguoi));
console.log(nguoi);

//=====================

function nguoi1(name, age, add, phone) {
  this.name = name;
  this.age = age;
  this.add = add;
  this.phone = phone;
}
let p = new nguoi1("Én", "20", "hà nam", "0353374477");
console.log(Object.keys(p));
