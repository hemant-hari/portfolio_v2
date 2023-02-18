import { AxesHelper, GridHelper, OrthographicCamera, PerspectiveCamera, Scene } from 'three';
import { createLighting } from './lighting';
import { createBox, createFloor } from './resources';

const frustrum = 5;
const aspectRatio = 16 / 9
export function createScene() {
  const scene = new Scene();

  const perspectiveCamera = new PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  const orthoCamera = new OrthographicCamera(-aspectRatio * frustrum, aspectRatio * frustrum, frustrum / 2, frustrum / 2);
  scene.add(perspectiveCamera);
  scene.add(orthoCamera);


  scene.add(new GridHelper(10, 10));
  scene.add(new AxesHelper(5));

  const box = createBox();
  box.translateY(0.5);
  scene.add(box);

  const floor = createFloor();
  floor.rotateX(-Math.PI / 2);
  scene.add(floor);

  const lighting = createLighting();
  scene.add(lighting);
  return { camera: perspectiveCamera, scene };
}
