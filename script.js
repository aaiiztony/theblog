const button = document.querySelector('#changeColorBtn');

// creating a key value pair named "color"
const color = localStorage.getItem('color');

//get random colors
const getRandomLightColor =()=> {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.floor(Math.random() * 255);
    const randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    return randomColor;
}

if (color) {
  document.body.style.backgroundColor = color;
  document.documentElement.style.setProperty('--main', color);
}

button.addEventListener('click', function() {
  const color = getRandomLightColor();
  document.body.style.backgroundColor = color;
  document.documentElement.style.setProperty('--main', color);
  localStorage.setItem('color', color);
});





// document.body.style.backgroundColor = color;
