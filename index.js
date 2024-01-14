const yearElement = document.getElementById("year"); //year=""
const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");

// eseni spanshi gasatanad gvchirdebaaaa
const spanY = document.querySelector(".numbers1");
const spanM = document.querySelector(".numbers2");
const spanD = document.querySelector(".numbers3");

function calculateAge() {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDay = now.getDate();

  const birthDate = new Date(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );
  const currentDate = new Date(nowYear, nowMonth, nowDay);

  const wlebiMiliseconds = currentDate - birthDate;
  const wlebi = Math.floor(wlebiMiliseconds / (365.25 * 24 * 60 * 60 * 1000));

  const danarcheni = wlebiMiliseconds % (365.25 * 24 * 60 * 60 * 1000);
  const tveebi = Math.floor(danarcheni / (30.44 * 24 * 60 * 60 * 1000));
  const nashti = danarcheni % (30.44 * 24 * 60 * 60 * 1000);
  const dgeebi = Math.floor(nashti / (24 * 60 * 60 * 1000));

  spanY.innerHTML = `${wlebi}`;
  spanM.innerHTML = `${tveebi}`;
  spanD.innerHTML = `${dgeebi}`;

  //  console.log(spanM.innerHTML);
  //  console.log(spanD.innerHTML);
}

//  <p class="pp">
//  <span class="numbers3">--</span>days */
//  </p> *

// Button.addEventListener("click",  () => {
//   spanD.innerHTML = console.log(Day.value);

//   })

// Day.forEach((Button) => {
//   Button.addEventListener("click" , () =>{
//     console.log(Button.innerHTML)
//     spanD.innerHTML=Button.innerHTML
//   })
// });

// rates.forEach((rate) => {
//      rate.addEventListener("click" , () => {
//       console.log(rate.innerHTML)
//        rating.innerHTML=rate.innerHTML

//      })
//     })
