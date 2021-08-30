let xs = []

let width = screen.availWidth * 1.5
let height = screen.availHeight * 1.5
let ratio = 1
let currentPath


for (let i = 0; i <= width; i++) {
  xs.push(i)
}

let t= 0
let j=1
let k=1


function animate() {
    if (width > height) {
      ratio = ( width + k ) / height
    } else {
      ratio = ( height + k ) / width
    }
  

    let points = xs.map(x => {

      let y = (j-k)*j*10*k + ratio * 24 * Math.sin((x+t)/(40 + 8*k + k/j))

      return [x, y]
    })

    let path = "M" + points.map(p => {
      return p[0] + "," + p[1]
    }).join(" L")

    currentPath = "path"+j
    console.log(currentPath)
    currentPath = document.getElementById(currentPath)
    console.log(currentPath)

    currentPath.setAttribute("d", path)

    t += 1

    requestAnimationFrame(animate)
  }


for (j; j<=height; j++) {
  k = Math.random()
  animate()
}
