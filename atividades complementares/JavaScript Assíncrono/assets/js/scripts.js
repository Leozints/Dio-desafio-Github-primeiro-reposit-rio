const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat')

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementsByTagName('img')[0];
	catImg.src = await getCats();
};

CAT_BTN.addEventListener('click', loadImg); 

loadImg();