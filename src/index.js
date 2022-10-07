const BASE_API_URL = "http://34.176.250.192:8080"

const nameCatSearch = document.querySelector('#searchCat')
const buttonSearch = document.querySelector('#buttonSearch')
const catImg = document.querySelector('#catImage')
const nameCat = document.querySelector('#nameCat')

async function getImageCat() {
  const url = `${BASE_API_URL}/cat?name=${nameCatSearch.value}`
  
  await fetch(url)
    .then((response) => response.json())
      .then((data) => {
        catImg.setAttribute("src", `${data.url}`)
        catImg.setAttribute("style", "visibility: unset;")
        nameCat.innerText = `${data.name}`
      })
    .catch(err => console.log(err))
  
}

buttonSearch.addEventListener('click', getImageCat)