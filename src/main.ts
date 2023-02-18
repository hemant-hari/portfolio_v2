import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createScene } from './scene';
import './style.css';

const { camera, scene } = createScene();

camera.position.set(2, 2, 2);

const renderer = new WebGLRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = true;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
