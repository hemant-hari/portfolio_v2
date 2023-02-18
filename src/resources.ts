import { PlaneGeometry, MeshBasicMaterial, Mesh, BoxGeometry, MeshStandardMaterial } from "three";

export function createFloor() {
  const geometry = new PlaneGeometry(100, 100);
  const material = new MeshStandardMaterial({ color: 0xffffff })
  return new Mesh(geometry, material);
}

export function createBox() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({ color: 0x999999 }); // TODO: make standard
  return new Mesh(geometry, material);
}