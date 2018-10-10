import "./3.js";
import "./vectors.js";
import * from THREE AS 



var mesh, renderer, scene, camera, controls;

var nEnd = 0,
nMax, nStep = 90; // 30 faces * 3 vertices/face

init();
animate();

function init() {

// renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
scene = new THREE.Scene();

// camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(10, 5, 10);
scene.add(camera); //required, since camera has a child light

// controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 0;
controls.maxDistance = 200;

// ambient
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// light
var light = new THREE.PointLight(0xffffff, 0.5);
light.position.set(20, 20, 0);
camera.add(light);

// axes
scene.add(new THREE.AxisHelper(20));

// points
var points = [];
for (var i = 0; i < 18; i++) {

    points.push(new THREE.Vector(i, i, i).multiplyScalar(1));
    console.log([i, points[i].multiplyScalar(3)])
}

// path
var path = new THREE.CatmullRomCurve3(points);

// params
var pathSegments = 5120;
var tubeRadius = 0.30;
var radiusSegments = 88;
var closed = false;

// geometry
var geometry = new THREE.TubeGeometry(path, pathSegments, tubeRadius, radiusSegments, closed);

// to buffer goemetry
geometry = new THREE.BufferGeometry().fromGeometry(geometry);
nMax = geometry.attributes.position.count;

// material
var material = new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    side: THREE.DoubleSide
});

// mesh
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

}

function animate() {

requestAnimationFrame(animate);

nEnd = (nEnd + nStep) % nMax;

mesh.geometry.setDrawRange(0, nEnd);

renderer.render(scene, camera);

}