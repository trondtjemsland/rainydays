const queryString = document.location.search;


const params = new URLSearchParams(queryString);
console.log(params);

const getId = params.get("id");

async function getJacket(getId) {
  try {
    console.log(getId);
    const response = await fetch(
      "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products/" + getId);
    const jsonResults = await response.json();
    console.log(jsonResults);

	console.log(jsonResults.categories)

    document.title = jsonResults.name;
    document.querySelector("h1").innerHTML += `${jsonResults.name}`;
    document.querySelector(".jacketinfo-list").innerHTML += `
	${jsonResults.description}`;
    document.querySelector(".jacketinfoimg").innerHTML += `
		<img class="specific-jacket__img" src="${jsonResults.images[0].src}"/>`;




	// for (let i = 0; i < jsonResults.length; i++){

	// 	let images = jsonResults[i].images;
	// 	let getSrc = '';

	// 	for (let j = 0; j < images.length; j++){
	// 		console.log(images[j]);
	// 	}

	// }


  } catch (error) {
    
  } finally {

  }
}

getJacket(getId);


