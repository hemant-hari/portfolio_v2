import { DirectionalLight } from "three";

export function createLighting() {
  const sunlight = new DirectionalLight("#fff", 3);
  sunlight.castShadow = true;
  sunlight.shadow.camera.far = 20;
  sunlight.shadow.mapSize.set(1024, 1024)
  sunlight.shadow.normalBias = 0.05;
  sunlight.position.set(1.5, 7, 3);

  return sunlight;
}