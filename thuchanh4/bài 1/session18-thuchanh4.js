// Bài 5: Cho mảng như sau:
// let stores = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// let carts=[]
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

// C – Cho người dùng nhập vào tên sản phẩm muốn mua.
// Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts.
// Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo.
// Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi
// chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”

// Bước 1: Xác định yêu cầu bài toán
// - Cho: hai mảng dữ liệu
// - Yêu cầu: viết chương trình nhập từ khóa, mỗi từ khóa sẽ thực hiện làm một việc gì đó, việc này sẽ có
//            ảnh hưởng đến dữ liệu trong hai mảng

// Bước 2: chữa bài
let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];

let kyTu = prompt(
  `
    C: Mua theo tên
    R: In
    U: Cập nhật theo vị trí
    D: Xóa theo vị trí
    E: Thoát
    `
).toLocaleLowerCase();

function inThongTin() {
  console.log("Stores: ", stores);
  console.log("Carts: ", carts);
}

while (kyTu !== "e") {
  switch (kyTu) {
    case "r":
      inThongTin();
      break;
    case "d":
      if (carts.length > 0) {
        const viTriXoa = +prompt(
          `Nhập vị trí bạn muốn xóa: 1 => ${carts.length}`
        );
        carts.splice(viTriXoa - 1, 1);
        inThongTin();
      } else {
        alert("Cart rỗng");
      }
      break;
    case "c":
      const tenSP = prompt("Nhập tên sản phẩm muốn mua").trim().toLowerCase();
      const viTriSpTrongStore = stores.findIndex(
        (el) => el.name.toLowerCase() === tenSP
      );
      if (viTriSpTrongStore === -1) {
        alert("Không tìm thấy sản phẩm");
      } else {
        const soLuongMua = +prompt(
          `Nhập số lượng ${tenSP} muốn mua: 1 -> ${stores[viTriSpTrongStore].count}`
        );

        const viTriSpTrongCart = carts.findIndex(
          (el) => el.name.toLocaleLowerCase() === tenSP
        );
        if (viTriSpTrongCart === -1) {
          const spDuaVaoCart = {
            id: stores[viTriSpTrongStore].id,
            name: stores[viTriSpTrongStore].name,
            count: soLuongMua,
          };
          // const spDuaVaoCart = {
          //     ...stores[viTriSpTrongStore],
          //     count: soLuongMua
          // }
          carts.push(spDuaVaoCart);
        } else {
          carts[viTriSpTrongCart].count += soLuongMua;
        }

        stores[viTriSpTrongStore].count -= soLuongMua;
        inThongTin();
      }
      break;
    case "u":
      const vitriUdate = +prompt(`Nhập vị trí cần sửa: 1 -> ${carts.length}`);
      const soLuongUpdate = +prompt("Nhập số lượng cần cập nhật");
      carts[vitriUdate - 1].count = soLuongUpdate;
      inThongTin();
      break;
  }

  kyTu = prompt(
    `
        C: Mua theo tên
        R: In
        U: Cập nhật theo vị trí
        D: Xóa thoe vị trí
        E: Thoát
        `
  ).toLocaleLowerCase();
}
