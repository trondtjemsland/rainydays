async function getGames() {
  try {
    const response = await fetch("https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products");
    const gameResults = await response.json();
    console.log(gameResults);

    gameResults.forEach(element => {
      document.querySelector('.gamepage_cards').innerHTML += `
      <div class="gamecard">
        <h3 class="h3__title">${element.name}</h3>
      </div>
      `;
    });

//     for (let i = 0; i < gameResults.length; i++) {

//       document.querySelector(".gamepage_cards").innerHTML += `
//       <div class="gamecard">
//           <h2 class="h2__title">${gameResults[i].name}</h2>
//           <a href="details.html?id=${gameResults[i].id}"><img class="game_img" src="${gameResults[i].image}"/></a>
//           <div class="donate_btn">
//           <a href="user.html"><button class="button">10$</button></a>
//           <a href="user.html"><button class="button">25$</button></a>
//           <a href="user.html"><button class="button">50$</button></a>
//           </div>
//           <div class="monthly_btn">
//           <a href="user.html"><button class="month_button">10$ a month</button></a>
//           <a href="user.html"><button class="month_button">25$ a month</button></a>
//           <a href="user.html"><button class="month_button">50$ a month</button></a>
//       </div>
//  `;
//     }
  } catch (error) {
    // document.querySelector(".alert").innerHTML = showAlertTouser(
    //   "danger",
    //   "Error"
    // );
  } finally {
    // setTimeout(function () {
    //   document.querySelector(".alert").innerHTML = "";
    // }, 5000);
  }
}

getGames();