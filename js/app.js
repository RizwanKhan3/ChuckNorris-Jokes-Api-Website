


const randomUrl = 'https://api.chucknorris.io/jokes/random'
let cat_url = ''
let defaultUrl = 'https://api.chucknorris.io/jokes/random?category=animal'
const imgurl = 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
const container = document.getElementById('con')
const selectionList = document.getElementById('category')
let cat_btn = document.getElementById('fetchByCat')
let btn = document.getElementById('fetchData')



/////////////////////////
const getRandom = async (url) => {

      try {
            const res = await axios.get(url) // Getting data from api
            const h1 = document.createElement('h1')   // creating h1 tag
            const img = document.createElement('img') // creating img tag
            const div = document.createElement('div')  // creating div 
            h1.textContent = res.data.value  // Assigning api data to h1 tag
            img.src = imgurl   /// Assigning  Img to image tag
            div.appendChild(img) // adding tags into the div
            div.appendChild(h1)
            div.classList.add('data')  // adding style class from css file to div
            container.append(div)   // adding div to main html container div
            return
      } catch (error) {
            const h1 = document.createElement('h1') 
            const div = document.createElement('div') 
            h1.textContent = error.message
            div.classList.add('data') 
            div.append(h1)
            container.append(div)
      }
}

///////////////////////////////////////////
const fetchData = () => {
      getRandom(randomUrl)  // Fetching data randomly
      btn.removeEventListener('click', fetchData)
      setTimeout(() => {
            btn.addEventListener('click', fetchData)
      }, 1000);

}
btn.addEventListener('click', fetchData)
///////////////////////////////////////////
const HandleChange = () => {
      let defaultValue = selectionList.value || 'animal'
      cat_url = `https://api.chucknorris.io/jokes/random?category=${defaultValue}`
      
}
////////////////////////////////////////////////////
const fetchDataByCat = () => {
      getRandom(cat_url ||defaultUrl) ///Fetching data by category 
  
      cat_btn.removeEventListener('click', fetchDataByCat)
      setTimeout(() => {
            cat_btn.addEventListener('click', fetchDataByCat)
      }, 1000);

}
cat_btn.addEventListener('click', fetchDataByCat)
