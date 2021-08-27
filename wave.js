let xs = []

for (let i = 0; i <= 3000; i++) {
  xs.push(i)
}

let t= 0
let j=1
let k=1


function animate() {

    let points = xs.map(x => {

      let y = (j+k)*(j*10*k) + 40  * Math.sin((x+t)/(40 + 8*k + k/j))

      return [x, y]
    })

    let path = "M" + points.map(p => {
      return p[0] + "," + p[1]
    }).join(" L")

    document.querySelector('#path'+j).setAttribute("d", path)

    t += 1

    requestAnimationFrame(animate)
  }


for (j; j<=39; j++) {
  k = Math.random()
  animate()
}
