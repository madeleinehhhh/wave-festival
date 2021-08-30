// this version of wave.js has very cleaned up math for the y points



// this sets up our variables

// these are constant values we'll read & calculate from the user window
const width = screen.availWidth * 1.5
const height = screen.availHeight * 1.5
const ratio = width/height

// this creates a constant to reference the svg and a variable for (each) currentPath
const svg = document.querySelector("svg")
let currentPath
let pathD = "M0,20 L60,160 L120,80"

// these variables are for time, iterating, and randomness
let t = 0
let j = 1
let k = 1

// this is the array for the path of the path
let xs = []
for (let i = 0; i <= width; i++) {
  xs.push(i)
}



// this is the function we'll run to produce each next point of the paths
function animate() {

  // this gives us xs and ys for the array (xs)
  let points = xs.map((x) => {
    // let y = (j+k) * 100 / ratio  + Math.sin((x+t) * k / (ratio * 100)) * (100-k) * (ratio-j)
    let y = 100
    return [x, y]
  })

  // then we fill out our path with those points (and the letters to make them an svg)
  pathD =
    'M' +
    points
      .map((p) => {
        return p[0] + ',' + p[1]
      })
      .join(' L');

  // then we assign that path to the d="" of the current <path>
  currentPath.setAttribute("d", pathD)

  // then we advance time... but can i pull this out of the animate?
  t += 1

  requestAnimationFrame(animate)
}


// this loops us through each of however many paths
// for (j; j <= 1; j++) {
  currentPath = document.createElement(`path`)
  svg.appendChild(currentPath)

  currentPath.setAttribute("id", "path"+j)


  k = Math.random()
  animate()
// }
