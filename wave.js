// this sets up our variables

// these variables are for time, iterating, and randomness
// let t = 0
let j = 1
let k = 1
let w = 0

// these are constant values we'll read & calculate from the user window
let width = screen.availWidth * 1.5
let height = screen.availHeight * 1.5
let ratio
if (width > height) {
  ratio = (width + k) / height
} else {
  ratio = (height + k) / width
}

// this creates a constant to reference the svg and a variable for (each) currentPath
const svg = document.querySelector("svg")
let currentPath

// this creates a variable to hold our class 
let style;

// this is the array for the path of the path
let xs = []
for (let i = 0; i <= width; i++) {
  xs.push(i)
}

//this is the function we'll call later, in the loop
function waves() {
  // this gets the y points as time progresses
  let points = xs.map((x) => {
    let y = (j - k) * j * 10 * k + ratio * 24 * Math.sin((x + w) / (40 + 8 * k + k / j))
    return [x, y]
  })

  // this maps the points into the "d" format
  let path = 'M' + points .map((p) => {
    return p[0] + ',' + p[1]
  })
  .join(' L');

  // this adds our path to the svg and then sets d to equal our path
  svg.appendChild(currentPath)
  // currentPath.setAttribute("id", "path"+j)
  currentPath.setAttribute("d", path)
  // t += 0.1
  // requestAnimationFrame(waves)
  w++
}

function setStyle() {
  if (k <= 0.3) {
    style = "a"
  } else if (k <= 0.6) {
    style = "b"
  } else {
    style = "c"
  }
}


// this will loop for the number of waves we want
for (; j <= 50 && w <= width; j++) {
  k = Math.random()
  setStyle()
  currentPath = document.createElementNS('http://www.w3.org/2000/svg', "path")
  currentPath.classList.add(style)
  waves()
}