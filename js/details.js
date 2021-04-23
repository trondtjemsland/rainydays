const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);

const getId = params.get("id");

async function getJacket(getId) {
  try {
    console.log(getId);
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products/" +
        getId
    );
    const jsonResults = await response.json();
    console.log(jsonResults);

    document.title = jsonResults.name;
    document.querySelector("h1").innerHTML += `${jsonResults.name}`;
    document.querySelector(
      ".jacketinfo-list"
    ).innerHTML += `${jsonResults.description}`;
    document.querySelector(
      ".jacketinfoimg"
    ).innerHTML += `<img class="specific-jacket__img" src="${jsonResults.images[0].src}"/>`;
    document.querySelector(
      ".jacketinfo-price"
    ).innerHTML += `<p class="jacketinfo-price">${jsonResults[i].prices.price}</p>`;
  } catch (error) {
  } finally {
  }
}

getJacket(getId);

async function getMoreJackets() {
  try {
    console.log(getId);
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products/"
    );
    const jsonResults = await response.json();
    console.log(jsonResults);

    for (let i = 0; i < 5; i++) {
      if (!jsonResults.on_sale) {
        document.querySelector(".peoplelike-container").innerHTML += `
        <div class="peopleliked-card">
        <img class="peoplelikeimg" src="${jsonResults[i].images[0].src}" alt="">
            <div class="rating-stars">
              <p>£ ${jsonResults[i].prices.price}</p>
              <i class="fas fa-star"></i><i class="fas fa-star"></i>
              <i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          `;
      }
    }
  } catch (error) {
  } finally {
  }
}

getMoreJackets();
