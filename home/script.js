// Random tree
const N = 300;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1))
    }))
};

const Graph = ForceGraph3D()(document.getElementById("graph"))
  .graphData(gData)
  //.jsonUrl('https://raw.githubusercontent.com/vasturiano/3d-force-graph/master/example/datasets/blocks.json')
  //.nodeAutoColorBy('user')
  .showNavInfo(false)
  .enableNodeDrag(false)
  .enablePointerInteraction(false)
  .enableNavigationControls(false);

var obj = { siteY: 0 };
const graphCameraZStart = 1138 //Graph.cameraPosition().z;
console.log(Graph.cameraPosition());

function updateCamera(ev) {
  console.log(graphCameraZStart);

  gsap.to(obj, 0.1, {
    siteY: window.scrollY,
    ease: Elastic.easeOut,
    onUpdate: drawCanvas
  });

  console.log(Graph.cameraPosition());
}

function drawCanvas() {
  console.log("siteY is now " + obj.siteY);

  Graph.cameraPosition({ x: 0, y: 0, z: graphCameraZStart - obj.siteY * 10 });

 gsap.to("#graph", 0.1, { alpha: (1 - (window.scrollY / 200)), ease: Elastic.easeOut });
}

window.addEventListener("scroll", updateCamera);


var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};