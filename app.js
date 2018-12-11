const heroEl = document.querySelector('.hero');
const h1EL = heroEl.querySelector('h1');
const mouseWalk = 500; // 100px

function shadow(e) {
  const {
    offsetWidth: width,
    offsetHeight: height
  } = heroEl //ES6 DeStructuring
  let {
    offsetX: x,
    offsetY: y
  } = e;

  //adds the left  and top px to x & y;
  if (this !== e.target) {
    x = x + e.offsetLeft;
    y = y + e.offsetTop;
  }

  //  Keeps the X axis on a  min of -50px for the shadow
  const xMouseWalk = Math.round((x / width * mouseWalk) - (mouseWalk / 2));
  // Keeps the Y axis on  a  max of 50px for the shadow
  const yMouseWalk = Math.round((x / width * mouseWalk) - (mouseWalk / 2));

  h1EL.style.textShadow = `
  ${xMouseWalk}px ${yMouseWalk}px 0 rgba(255,0,255,0.7),
  ${xMouseWalk * -1}px ${yMouseWalk}px 0 rgba(0,255,0,0.7),
  ${yMouseWalk}px ${xMouseWalk * -1}px 0 rgba(0,255,255, 0.7),
  ${yMouseWalk * -1}px ${xMouseWalk}px 0 blue
  `;

}


heroEl.addEventListener('mousemove', shadow);