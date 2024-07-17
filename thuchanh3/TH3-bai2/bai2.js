let student2 = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "nam",
  age: 20,
  mark: 8,
};

// let a = +products("hãy nhập ID");
// let b = prompt("nhập tên");
// let c = prompt("hãy nhập giới tính");
// let d = +prompt("hãy nhập độ tuổi");
// let e = +prompt("hãy nhập mark");
// let m = new student(a, b, c, d, e);
function student(id, name, gender, age, mark) {
  this.id = name;
  this.name = age;
  this.gender = gender;
  this.age = age;
  this.mark = mark;
}
let p = new student("2", "Nguyễn văn b", "nam", "25", "7");
let arraystudents = [];
console.log(p);
arraystudents.push(p);
arraystudents.push(student2);
console.log("mảng", arraystudents);

// bài 3 :
let diemcao = arraystudents[0].mark;
let vitri = 0;
for (let i = 1; i <= arraystudents.length - 1; i++) {
  if (diemcao < arraystudents[i].mark) {
    diemcao = arraystudents[i].mark;
    vitri = i;
  }
}
console.log(vitri);
console.log("học sinh điểm cao", arraystudents[0]);

// bài 4=======================================

let q = new student("3", "Nguyễn văn c", "nam", "35", "4");
arraystudents.push(q);
console.log("mảng", arraystudents);

for (let i = 0; i <= arraystudents.length - 1; i++) {
  if (arraystudents[i].mark > 7.5) {
    console.log("học sinh khá", arraystudents[i]);
  } else if (arraystudents[i].mark <= 7.5 && arraystudents[i].mark >= 5) {
    console.log("học sinh trung bình", arraystudents[i]);
  } else {
    console.log("học sinh yếu", arraystudents[i]);
  }
}
