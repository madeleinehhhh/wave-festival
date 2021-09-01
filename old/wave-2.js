let currentPath
const svg = document.querySelector("svg")
currentPath = document.createElementNS('http://www.w3.org/2000/svg', "path")
svg.appendChild(currentPath)
currentPath.setAttribute("d", "m10,100 l50,90, l200,20")
currentPath.classList.add("a")