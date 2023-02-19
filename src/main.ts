import { CineonToneMapping, PCFSoftShadowMap, sRGBEncoding, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createScene } from './scene';
import './style.css';

const { camera, scene } = await createScene();

camera.position.set(2, 2, 2);

const canvas = document.getElementById("room-canvas") as HTMLCanvasElement;
const renderer = new WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = sRGBEncoding;
renderer.toneMapping = CineonToneMapping;
renderer.toneMappingExposure = 1.75;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = true;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
