let xs = []

let t = 0
let j = 1
let k = 1


// let width = screen.availWidth * 1.5
// let height = screen.availHeight * 1.5
// let ratio
// if (width > height) {
//   ratio = (width + k) / height
// } else {
//   ratio = (height + k) / width
// }


let currentPath
const svg = document.querySelector("svg")

for (let i = 0; i <= 400; i++) {
  xs.push(i)
}
currentPath = document.createElement(`path`)

function animate() {

  // for (j; j <= 2; j++) {
    let points = xs.map((x) => {
      // let y = (j+k) * 100 / ratio  + Math.sin((x+t) * k / (ratio * 100)) * (100-k) * (ratio-j)
      let y = 400 + Math.sin(x+t)/40
      return [x, y]
    })

    let path = 'M' + points .map((p) => {
      return p[0] + ',' + p[1]
    })
    
    .join(' L');

    svg.appendChild(currentPath)
    // currentPath.setAttribute("id", "path"+j)
    currentPath.setAttribute("d", path)
  // }
  t += 1
  requestAnimationFrame(animate)
}

animate()
