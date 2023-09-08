import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader'; // ใช้โมดูล FBXLoader จาก Three.js

// สร้างฉาก
const scene = new THREE.Scene();

// สร้างกล้อง
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// สร้างเส้นทางการเรนเดอร์
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// โหลดแฟ้ม FBX
const loader = new FBXLoader();
loader.load('path/to/your/model.fbx', (fbx) => {
  scene.add(fbx);
});

// เพิ่มแสง
const light = new THREE.PointLight(0xFFFFFF);
light.position.set(0, 0, 5);
scene.add(light);

// การอัพเดตแสดงผล
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
