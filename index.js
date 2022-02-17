const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor =  "#"+ randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  btn.addEventListener("click", setBg);
//   setBg();

// To genrate random number : Math.random
// To remove decimal numbers: Math.floor
// Convert integir to string: toString

