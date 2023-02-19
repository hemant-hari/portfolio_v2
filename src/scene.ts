import { AxesHelper, GridHelper, OrthographicCamera, PerspectiveCamera, Scene } from 'three';
import { createAmbientLight, createLighting } from './lighting';
import { createFloor, createRoom } from './resources';

const frustrum = 5;
const aspectRatio = 16 / 9;

export async function createScene() {
  const scene = new Scene();

  const perspectiveCamera = new PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  const orthoCamera = new OrthographicCamera(-aspectRatio * frustrum, aspectRatio * frustrum, frustrum / 2, frustrum / 2);
  scene.add(perspectiveCamera);
  scene.add(orthoCamera);


  scene.add(new GridHelper(10, 10));
  scene.add(new AxesHelper(5));

  const floor = createFloor();
  floor.rotateX(-Math.PI / 2);
  scene.add(floor);

  const room = await createRoom();
  room.scene.translateY(1)
  scene.add(room.scene);

  scene.add(createLighting());
  scene.add(createAmbientLight());

  return { camera: perspectiveCamera, scene };
}
