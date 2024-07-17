console.log(
  `1. HTML
    Complete: false
    2. CSS
    Complete: false
    3. Basic of javascript
    Complete: false
    4. Node package Manager(npm)
    Complete: false
    5. Git
    Complete: false`
);

let list = [
  { stt: 1, name: "HTML", complete: false },
  { stt: 2, name: "css", complete: false },
  { stt: 3, name: "Basic of javascript", complete: false },
  { stt: 4, name: "Node package Manager(npm)", complete: false },
  { stt: 5, name: "Git", complete: false },
];

let KyTu = prompt(
  `
    C: nhập khóa học mới và trạng thái hoàn thành
    R: In ra
    U: vị trí update khóa học
    D: vị trí khóa học muốn xóa
    E: thoát`
).toLocaleLowerCase();

function inThongTin() {
  console.log("danh sách cập nhật : ", list);
}

while (kyTu !== "e") {
  switch (kyTu) {
    case "r":
  }
}

// User: id, username, email(unique), password, role: 0
// Admin: User, role: 1

// acocunt = [User ..., Admin]

// Login:
// nhap {email, password}
// so sanh, tim kiem => xem: co tk nao trung thong tin voi thong tin da nhap ko
// neu ko trung: ko tim thay tk
// neu trung: kiem tra role: user: log(xin chao user + name)
//                          admin: log(xin chao den trang admin)
