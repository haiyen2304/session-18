class User {
  constructor(name, emaill, address, phone) {
    this.name = name;
    this.emaill = emaill;
    (this.address = address), (this.phone = phone);
  }
}

class Admin extends User {
  constructor(name, emaill, address, phone) {
    super(name, emaill, address, phone);
    this.role = 1;
  }
}

const user1 = new User("Ngọc", "hhy@gmail.com", "Hà Nội", "003551562");
const user2 = new User("Ngọc", "hhy@gmail.com", "Hà Nội", "003551562");
const user3 = new User("Ngọc", "hhy@gmail.com", "Hà Nội", "003551562");

const admin1 = new Admin("admin", "hhy@gmail.com", "Hà Nội", "003551562");

const persons = [user1, admin1, user2, user3];
const tencanxoa = "linh";

const ViTriCanXoa = persons.findIndex((person) => person.name === tencanxoa); //(el)=> el.name === tencanxoa)

if (ViTriCanXoa === -1) {
  console.log("khoong thaays");
} else {
  if (persons[ViTriCanXoa].role === 1) {
    console.log("khong the khoa xoa admin");
  } else {
    persons.splice(ViTriCanXoa, 1);
    console.log(persons);
  }
}
