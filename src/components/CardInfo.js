class CardInfo {
  constructor(id, img, name, phone, email, job) {
    return {
      id: id,
      img: img,
      name: name,
      phone: phone,
      email: email,
      job: job,
    };
  }
}
let obj1 = new CardInfo(
  1,
  "https://picsum.photos/195",
  "nabil",
  "76482063",
  "nabil.bele.sy@gmail.com",
  "Web Devloper"
);

let cardsArray = [obj1];
let cards2 = JSON.parse(localStorage.getItem("persons"));
if (cards2 !== null) {
  cardsArray = cards2;
}

export { cardsArray };
