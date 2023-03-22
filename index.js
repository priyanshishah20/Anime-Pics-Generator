const btnEle = document.getElementById('btn');
const animeContEle = document.querySelector('.anime-container');
const animeImgEle = document.querySelector('.anime-img');
const animeNameEle = document.querySelector('.anime-name');

/* const animeContEle = document.getElementById('anime-container');
const animeNameEle = document.getElementById('anime-name');
const animeImgEle = document.getElementById('anime-img'); */

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
        
        /*   const animeContent = data.artist;
           const animeImg = data.url;
           animeNameEle.innerText = animeContent;
           animeImgEle.src = animeImg; */
    } catch (error) {
        btnEle.disabled = false;
        btnEle.innerText = 'Get Anime';
        animeNameEle.innerText = 'An error occured, try again later.';
    }
}
btnEle.addEventListener('click', getAnime);