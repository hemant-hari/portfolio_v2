import { AmbientLight, DirectionalLight } from "three";

export function createLighting() {
  const sunlight = new DirectionalLight("#ffffff", 3);
  sunlight.castShadow = true;
  sunlight.shadow.camera.far = 20;
  sunlight.shadow.mapSize.set(2047, 2048)
  sunlight.shadow.normalBias = 0.05;
  sunlight.position.set(1.5, 7, 3);

  return sunlight;
}

export function createAmbientLight() {
  return new AmbientLight("#ffffff", 3);
}