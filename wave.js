let xs = []
for (let i = 0; i <= 700; i++) {
  xs.push(i)
}

let t = 0

function animate() {
  
  let points = xs.map(x => {
    
    let y = 220 + 40 * Math.sin((x + t) / 150)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  for (let j=0; j<36; j++) {
    document.querySelector(".path0" + j).setAttribute("d", path)
  }

  t += 0.85
  
  requestAnimationFrame(animate)   
}

animate()