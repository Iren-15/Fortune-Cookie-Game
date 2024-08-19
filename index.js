let i;
const cookies = [
  "Фея удачи ждет тебя за углом",
  "Родители замышляют нечто радостное",
  "На следующей неделе тебя ждет прекрасное настроение",
  "Рассказать стишок бабушке – к нежданной радости",
  "Ты подрастешь на 2 см к весне",
  "Смотри по сторонам, и ты не пропустишь важное",
  "Верь в чудеса, смейся чаще и мечтай",
  "Никогда не унывай: веселись, стремись, играй",
  "У тебя очень симпатичная улыбка. Улыбайся почаще",
  "Скоро в твоей жизни появится новый верный друг",
  "В каникулы тебя ожидает веселое путешествие",
  "Верь в себя. У тебя все получится"
];
const btn = document.querySelector("#btn");
const par = document.querySelector("#par");

btn.addEventListener("click", randomCookie);

function randomCookie() {
  i = Math.floor(Math.random() * cookies.length);
  par.textContent = cookies[i];
  par.style.display = "block";
  gsap.from("#par", {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    scale: -1,
  });
}
