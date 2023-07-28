const check = document.getElementById("check");
const mbtn = document.getElementById("morebtn");
const btn = document.getElementById("ball");
const popbtn = document.getElementById("popbtn");
const popmenu = document.querySelector(".pop-up");
const moremenu = document.querySelector(".more-btn-hide");
const container = document.querySelector(".mini-boxy");
const homebtn = document.getElementById("show");
const loginpage = document.getElementById("top");
const mainpage = document.querySelector(".container");
const hammenu = document.querySelector(".flex-list");
const hambtn = document.getElementById("ha");
// pending

let clicked = false; 

hambtn.addEventListener("click",()=>{
  clicked = !clicked;

  if (clicked) {
    hammenu.style.left = '40%';
    
  } else {
    hammenu.style.left = '-100%';
    

  }
})

homebtn.addEventListener("click",()=>{
    loginpage.style.display = "none";
    mainpage.style.display = "block";
})

const changetext = document.getElementById("changetext");
const textArray = [
    { text: "chai time Snacks idea", color: "#e7d932" },
    { text: "outfit Idea", color: "rgb(17,95,48)" },
    { text: "DIY Idea", color: "#107620" },
    { text: "Home Decor Idea", color: "#11c6e0" }
  ];
  
  let currentIndex = 0;
  
  function changeText() {
    const currentText = textArray[currentIndex].text;
    const currentColor = textArray[currentIndex].color;
  
    changetext.textContent = currentText;
    changetext.style.color = currentColor;
  
    currentIndex = (currentIndex + 1) % textArray.length;
  }
  
  // Call the changeText function initially to set the initial text
  changeText();
  
  setInterval(changeText, 10000); // Change text every 2 seconds (2000 milliseconds)
  
document.addEventListener("DOMContentLoaded", () => {
    const sliderboxes = document.querySelectorAll(".box");
  
    sliderboxes.forEach((box) => {
      box.addEventListener("click", () => {
        box.style.backgroundImage = "none";
        console.log("error");
      });
    });
  });
  

const apiKey = ['YxFCf9LPNmPw7lLSMO_lNKXvuFMj1EbdZlWldVEFCOU','37193580-70eee916440b4b912f6a5e4b9'];
const url = `https://api.unsplash.com/search/collections?page=1&query=office&per_page=50&client_id=${apiKey[0]}`;
const pixabayUrl = `https://pixabay.com/api/?key=${apiKey[1]}&per_page=50&order=popular`;

async function get(query,count) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (Array.isArray(data.results)) {
        data.results.forEach((image) => {
          const imageUrl = image.cover_photo.urls.small;
          const imageAlt = image.cover_photo.alt_description || "Image";
          
          let div = document.createElement("div");
          container.appendChild(div);
          div.innerHTML = `
            <div class="fetch-images">
              <div class="img-bo">
                <img src="${imageUrl}" alt="${imageAlt}" class="si">
              </div>
              <a href="">Lorem ipsum ae ullam ratione earum aspernatur deleniti amet, rerum, soluta cumque?</a>
            </div>
          `;
        });
      } else {
        console.log('Invalid data format:', data);
      }

    } catch (error) {
      console.log("error", error);
    }
  } 

const openpreview = document.getElementById("openpreview");
const dicoversection = document.querySelector(".dicover-section");
const explore = document.querySelector(".explore");
const navbott = document.getElementById("navbott");
const clickimg = document.getElementById("clickimg");
const clickdata = document.querySelectorAll (".section-heads");


// Add a click event listener to the document
document.addEventListener('click', event => {
  // Check if the clicked element has the class "si"
  if (event.target.classList.contains('si')) {
    // Log the value of the clicked image's "src" attribute
     const seleimgdata = event.target.getAttribute('src')
    openpreview.style.display = "block";
    dicoversection.style.display = "none";
    explore.style.display = "none"
       clickimg.src = `${seleimgdata}`;
  }
});


function backbtn(){
  openpreview.style.display = "none";
  dicoversection.style.display = "block";
  explore.style.display = "block"
}


get();

let page = 1;
let loading = false;

async function loadImages() {
  try {
    const response = await fetch(`${pixabayUrl}&page=${page}`);
    const data = await response.json();
    if (Array.isArray(data.hits)) {
        for (let i = 0; i < data.hits.length; i++) {
          const image = data.hits[i];
          const imageUrl = image.webformatURL;
          const imageAlt = image.tags || "Image";
  
          let div = document.createElement("div");
          div.classList.add("image-item");
          div.innerHTML = `
            <div class="fetch-images">
              <div class="img-bo">
                <img src="${imageUrl}" alt="${imageAlt}" class="si">
              </div>
              <a href="#">Lorem ipsum ae ullam ratione earum aspernatur deleniti amet, rerum, soluta cumque?</a>
            </div>
          `;
          container.appendChild(div);
  
          // Introduce a delay between loading images
          await delay(500); // Adjust the delay time as needed
        }
      page++;
      loading = false;
    }
  } catch (error) {
    console.log("error:", error);
  }
}

function handleScroll() {
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        loading = true;

        loadImages();
      }
    }
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      
      window.addEventListener("scroll", handleScroll);
      
      loadImages(); //
check.addEventListener("click", () => {
  clicked = !clicked;

  let mode = document.querySelector(".container");
  if (clicked) {
    btn.style.left = '25px';
    check.style.backgroundColor = "grey";
    mode.style.backgroundColor = "#1b2825";
    mode.style.color = "white";
    
  } else {
    btn.style.left = '0px';
    check.style.backgroundColor = "black";
    mode.style.backgroundColor = "transparent";
  }
});

const morebtn = document.getElementById("more");
morebtn.addEventListener("click",()=>{
  Swal.fire({
        html:"Find this Pin and more on Pinterest",
    });
});
popbtn.addEventListener("click",()=>{
  clicked = !clicked;
    if(clicked){
 popmenu.style.display = "block";
 setTimeout(()=>{
    popmenu.style.display = "none ";
    },5000)

    }else{
 popmenu.style.display = "none";
    }
})

mbtn.addEventListener("click",()=>{
  clicked = !clicked;
  if (clicked) {
    moremenu.style.display = "flex ";
        mbtn.style.display = "none";

  } else {
    moremenu.style.display = "none ";
  }
})
