import * as THREE from "three";
import Experience from "@Experience/Experience.js";
import Environment from "@World/Environment.js";
import Box from "@World/Box.js"; // Ваш существующий класс Box
import Map from "@World/Map.js"; // Класс Map, который вы добавили

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("loaded", () => {
      this.environment = new Environment();
      this.box = new Box();
      this.map = new Map(); // Добавляем карту
      this.createCube(); // Создаем куб
    });
  }

  createCube() {
    // Создание геометрии и материала для куба
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0); // Установка позиции куба
    this.scene.add(cube);
  }

  update() {
    if (this.box) {
      this.box.update();
    }
  }
}
