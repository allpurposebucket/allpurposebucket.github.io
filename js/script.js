const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const fov = 45;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 15);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BoxGeometry(6, 3, 2);
const material = new THREE.MeshBasicMaterial({ wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const container = document.querySelector("#threejs_container");
container.append(renderer.domElement);
renderer.render(scene, camera);