// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get('id');

async function getJackets(jacketId) {
	try {
		console.log(jacketId);
		const response = await fetch('https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products');
		const jsonResults = await response.json();

		document.querySelector('.specific-jacket__card').innerHTML += `
                <img class="jacketinfoimg" src="${jsonResults.images[0].src}">
        `;
	
	} catch (error) {
		// document.querySelector('.alert').innerHTML += showAlertTouser(
		// 	error,
		// 	'danger'
		// );
	} finally {
		// setTimeout(function () {
		// 	document.querySelector('.alert').innerHTML = '';
		// }, 3000);
	}
}

getJackets(id);
