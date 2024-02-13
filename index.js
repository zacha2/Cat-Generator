apiUrl = "https://api.thecatapi.com/v1/images/search";
getCatBtn = document.getElementById("gen-cat");
loadingPrompt = document.getElementById("loading-prompt");
catCont = document.getElementById("cat-container")

async function genImage(container, content) {
    container.innerHTML = await content
    container.innerHTML += `<p>You're Welcome</p>`
}

async function getCatPicture(url){
    const response = await fetch(url);
    var data = await response.json();

    if (response) {
        loadingPrompt.style.display = 'none';
        const catImg = data[0].url
        console.log(catImg)
        console.log(data)
        genImage(catCont, `<img src=${catImg} alt="a pleasent cat picture">`)
    }
}

getCatBtn.addEventListener('click', () => {
    loadingPrompt.style.display = 'block';
    getCatPicture(apiUrl)
})
