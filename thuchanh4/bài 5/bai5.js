// //xây dựng dữ liệu đã được lấy từ server
// let stores = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// // carts
// let carts = [{ id: 3, name: "Butter", count: 100 }];
// // Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// // C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào
// //carts khi đó count trong stores của sản phẩn đó giảm đi 1
// // R – In ra toàn bộ các sản phẩm trong stores và carts
// // U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập
// // vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
// // D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
// // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E
// //thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
// let commad = prompt("hãy nhập các kí tự C/R/U/D/E để tiến hành mua hàng");
// switch (commad) {
//   case "C": // C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
//     let productName = prompt("mời bạn nhập tên sản phẩm muốn mua");
//     let findIndex = stores.findIndex(function (element, index) {
//       return element.name === productName;
//     });
//     if (findIndex === -1) {
//       console.log(
//         `khng tim thấy sản phẩm ${productName} trong cửa hàng. Mời bạn tiếp tục mua hàng`
//       );
//     } else {
//       // MUa hàng thành công
//       let cartsIndex = carts.findIndex(function (element, index) {
//         return element.name === productName;
//       });
//       if (cartsIndex === -1) {
//         //push
//         let product = stores[findIndex];
//         let cartsProduct = { ...product, count: 1 };
//         carts.push(cartsProduct);
//       } else {
//         //+1
//         carts[cartsIndex].count = carts[cartsIndex].count + 1;
//       }
//       stores[findIndex].count = stores[findIndex].count - 1;
//     }

//     displayProduct(stores);
//     displayProduct(carts);
//     break;

//   case "R":
//     console.log("sản phẩm trong store");
//     // for (let idx in stores) {
//     //   console.log(
//     //     `${+idx + 1}.${stores[idx].name} -quantity : ${stores[idx].count}`
//     //   );
//     // }
//     displayProduct(stores);
//     console.log("giỏ hàng của bạn");
//     if (carts === 0) {
//       console.log("giỏ hàng không có gì, mời bạn tiếp tục mua hàng");
//     } else {
//       //   for (let idx in carts) {
//       //     console.log(
//       //       `${+idx + 1}.${carts[idx].name} -quantity : ${carts[idx].count}`
//       //     );
//       //   }
//       displayProduct(carts);
//     }
//     break;
// }

// Xây dựng ứng dụng
// Coi như dữ liệu đã được lấy thành công từ trên
// server về phía client

// stores - Kho lưu trữ dữ liệu
// có tên là stores ở trên server

let stores = [
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
  { id: 1, name: "Milk", count: 100 },
];

// carts - Kho lưu trữ dữ liệu
// có tên là carts ở trên server

let carts = [];

let loop = true;
while (loop) {
  let command = prompt(
    "Mời bạn nhập vào các ký tự C/R/U/D/E để tiến hành mua hàng"
  );

  switch (command) {
    case "C":
      let productName = prompt("Mời bạn nhập tên sản phẩm muốn mua:"); // Milk, Yakult .... // Linh tinh

      let findIndex = stores.findIndex(function (element, index) {
        return element.name === productName;
      }); // -1, tìm thấy

      if (findIndex === -1) {
        console.log(
          `Không tìm thấy sản phẩm ${productName} trong cửa hàng. Mời bạn tiếp tục mua hàng`
        );
      } else {
        // Mua hàng thành công
        let cartIndex = carts.findIndex(function (element, index) {
          return element.name === productName;
        });
        if (cartIndex === -1) {
          // Push
          let product = stores[findIndex]; // {}
          // Error
          // product.count = 1;
          // carts.push(product);

          // Fixed
          // Tạo ra 1 object mới với địa chỉ mới hoàn toàn,
          let cartProduct = { ...product, count: 1 }; // { name, id, count, count: 1 }

          carts.push(cartProduct);
        } else {
          // +1
          carts[cartIndex].count = carts[cartIndex].count + 1;
        }
        stores[findIndex].count = stores[findIndex].count - 1;

        // store
        console.log("Sản phẩm trong store:");
        displayProduct(stores);
        console.log("Giỏ hàng của bạn:");
        displayProduct(carts);
      }
      break;
    case "R":
      // store
      console.log("Sản phẩm trong store:");
      displayProduct(stores);
      // cart
      console.log("Giỏ hàng của bạn:");
      if (carts.length === 0) {
        console.log("Giỏ hàng của bạn chưa có gì! Mời tiếp tục mua hàng");
      } else {
        displayProduct(carts);
      }
      break;

    case "U":
      console.log("Sản phẩm nằm trong store");
      displayProduct(stores);
      console.log("Sản phẩm nằm trong cart của bạn");
      displayProduct(carts);

      let updateIndex = +prompt(
        "Bạn muốn cập nhật lại sản phẩm nào trong cart ?"
      );
      // Validate dữ đầu vào
      // milk trong cart = 5
      // milk trong store = 95

      // milk cap nhat cart = 20
      // milk trong store mới = store cũ + cart cũ - cart mới
      console.log(updateIndex);
      let oldCart = carts[updateIndex - 1].count;
      carts[updateIndex - 1].count = +prompt(
        `Mời bạn nhập vào số lượng mới của sản phẩm ${
          carts[updateIndex - 1].name
        }`
      );
      // Tìm kiếm sản phẩm vừa update trong cart là sp nào trong store
      let storeIndex = stores.findIndex(function (element, index) {
        return element.id === carts[updateIndex - 1].id;
      });
      stores[storeIndex].count =
        stores[storeIndex].count + oldCart - carts[updateIndex - 1].count;

      console.log("Sản phẩm trong cửa hàng:");
      displayProduct(stores);
      console.log("Sản phẩm trong giỏ hàng của bạn:");
      displayProduct(carts);
      break;

    case "D":
      console.log("Sản phẩm nằm trong store");
      displayProduct(stores);
      console.log("Sản phẩm nằm trong cart của bạn");
      displayProduct(carts);

      let deleteIndex = +prompt("Bạn muốn xoá sản phẩm nào khỏi cart ?");
      let deleteProductId = carts[deleteIndex - 1].id; // {}
      // Validate dữ liệu đầu vào
      carts.splice(deleteIndex - 1, 1);

      let deleteStoreIndex = stores.findIndex(function (element, index) {
        return element.id === deleteProductId;
      });
      stores[deleteStoreIndex].count = 100;
      //
      console.log("Sản phẩm nằm trong store");
      displayProduct(stores);
      console.log("Sản phẩm nằm trong cart của bạn");
      displayProduct(carts);
      break;

    case "E":
      console.log("Cảm ơn đã mua hàng tại cửa hàng của chúng tôi");
      loop = false;
      break;

    default:
      console.log("Invalid command !");
      break;
  }
}

function displayProduct(database) {
  for (let idx in database) {
    console.log(
      `${+idx + 1}. ${database[idx].name} - quantity: ${database[idx].count}`
    );
  }
}

// Shallow clone

// Deep clone
// let y = { name: "Hello world" };

// let z = { ...y }; // pointerY

// z.name = "Biến z"; // { name: "Biến z"}

// console.log(y);
