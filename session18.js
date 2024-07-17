// function Tuong (name, shin, Q,W,E,R){
//     this.name=name,
//     this.skin=skin,
//     this.Q=q,
//     this.W=W,
//     this.E=E,
//     this.R=R,
// }

// const day = new Date();
// console.log(day.getMonth() + 1);

// luyện tập tổng hợp 4 :==============================================
// bước 1 : xác định yêu cầu bài toán
// - cho: 2 mảng dữ liệu
// - yêu cầu : viết chương trình nhập từ khóa, mỗi từ khóa sẽ thực hiện làm 1 việc gì đó,
//việc này sẽ có ảnh hưởng đến dữ liệu trong 2 mảng
let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];
let kyTu = prompt(
  ` C: Mua theo tên
    R:in
    U: cập nhật theo vị trí
    D: xóa theo vị trí
    E:thoát `
).toLocaleLowerCase();

function inThongTin() {
  console.log("Stores: ", stores);
  console.log("Carts: ", carts);
}

while (kyTu !== E) {
  switch (kyTu) {
    case "r":
      inThongTin();
      break;
    case "d":
      if (carts.length > 0) {
        const viTrixoa = +prompt(
          `Nhập vị trí bạn muốn xóa: 1=> ${carts.length}`
        );
        carts.splice(viTrixoa - 1, 1);
        inThongTin();
      } else {
        alert("Cart rỗng");
      }
      break;
    case "c":
      const tenSP = prompt("Nhập tên sản phầm muốn mua")
        .trim()
        .toLocaleLowerCase();
      const viTriSpTrongStore = stores.findIndex();

      break;
  }

  kyTu = prompt(
    ` C: Mua theo tên
    R:in
    U: cập nhật theo vị trí
    D: xóa theo vị trí
    E:thoát `
  ).toLocaleLowerCase();
}
////////////bài chưa làm xong, sai == thực hành 1 nâng cao
