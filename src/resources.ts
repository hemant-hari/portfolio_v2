import { PlaneGeometry, Mesh, MeshStandardMaterial, Object3D } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function createFloor() {
  const geometry = new PlaneGeometry(100, 100);
  const material = new MeshStandardMaterial({ color: 0xffffff })
  const floor = new Mesh(geometry, material);
  floor.receiveShadow = true;
  return floor;
}

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);

export async function createRoom() {
  const room = await gltfLoader.loadAsync("/assets/portfolio_room.glb");
  room.scene.children.forEach(processChild)
  return room;
}

function processChild(child: Object3D<THREE.Event>) {
  child.castShadow = true;
  child.receiveShadow = true;

  child.children.forEach(processChild);
}