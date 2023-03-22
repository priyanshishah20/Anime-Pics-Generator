const btnEle = document.getElementById('btn');
const animeContEle = document.querySelector('.anime-container');
const animeImgEle = document.querySelector('.anime-img');
const animeNameEle = document.querySelector('.anime-name');


async function getAnime() {

    try {
        btnEle.disabled = true;
        btnEle.innerText = 'Loading..';
        animeNameEle.innerText = 'Updating..';
        animeImgEle.src = 'spinner.svg';
        const urlAPI = 'https://api.catboys.com/img';
        const result = await fetch(urlAPI);
        const data = await result.json();
        // console.log(data);

        btnEle.disabled = false;
        btnEle.innerText = 'Get Anime';
        animeContEle.style.display = 'block';
        animeImgEle.src = data.url;
        animeNameEle.innerText = data.artist;
        
    } catch (error) {
        btnEle.disabled = false;
        btnEle.innerText = 'Get Anime';
        animeNameEle.innerText = 'An error occured, try again later.';
    }
}

btnEle.addEventListener('click', getAnime);
