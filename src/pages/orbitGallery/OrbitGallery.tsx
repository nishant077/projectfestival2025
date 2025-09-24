import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface OrbitGalleryProps {
  totalImages?: number;
  totalItems?: number;
  baseWidth?: number;
  baseHeight?: number;
  sphereRadius?: number;
  backgroundColor?: string; // hex without #
}

const OrbitGallery: React.FC<OrbitGalleryProps> = ({
  totalImages = 30,
  totalItems = 100,
  baseWidth = 1,
  baseHeight = 0.6,
  sphereRadius = 5,
  backgroundColor = "000000" // Changed to black
}) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(parseInt(backgroundColor, 16), 1);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Make sure the div can receive focus for keyboard events
    if (orbRef.current) {
      orbRef.current.appendChild(renderer.domElement);
      orbRef.current.setAttribute('tabindex', '0');
      orbRef.current.focus();
    }

    // Enhanced controls with keyboard and mouse support
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let isMouseDown = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Keyboard state
    const keys = {
      w: false,
      s: false,
      a: false,
      d: false,
      q: false,
      e: false,
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        const deltaX = event.clientX - lastMouseX;
        const deltaY = event.clientY - lastMouseY;
        
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === 'w' || key === 'W') keys.w = true;
      if (key === 's' || key === 'S') keys.s = true;
      if (key === 'a' || key === 'A') keys.a = true;
      if (key === 'd' || key === 'D') keys.d = true;
      if (key === 'q' || key === 'Q') keys.q = true;
      if (key === 'e' || key === 'E') keys.e = true;
      if (key === 'ArrowUp') keys.ArrowUp = true;
      if (key === 'ArrowDown') keys.ArrowDown = true;
      if (key === 'ArrowLeft') keys.ArrowLeft = true;
      if (key === 'ArrowRight') keys.ArrowRight = true;
      event.preventDefault();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === 'w' || key === 'W') keys.w = false;
      if (key === 's' || key === 'S') keys.s = false;
      if (key === 'a' || key === 'A') keys.a = false;
      if (key === 'd' || key === 'D') keys.d = false;
      if (key === 'q' || key === 'Q') keys.q = false;
      if (key === 'e' || key === 'E') keys.e = false;
      if (key === 'ArrowUp') keys.ArrowUp = false;
      if (key === 'ArrowDown') keys.ArrowDown = false;
      if (key === 'ArrowLeft') keys.ArrowLeft = false;
      if (key === 'ArrowRight') keys.ArrowRight = false;
      event.preventDefault();
    };

    const updateMovement = () => {
      const rotationSpeed = 0.02;
      const moveSpeed = 0.2;

      // W/S and Up/Down arrows: Move forward/backward (zoom)
      if (keys.w || keys.ArrowUp) {
        if (camera.position.z > 3) camera.position.z -= moveSpeed;
      }
      if (keys.s || keys.ArrowDown) {
        if (camera.position.z < 20) camera.position.z += moveSpeed;
      }

      // A/D and Left/Right arrows: Rotate left/right
      if (keys.a || keys.ArrowLeft) targetRotationY -= rotationSpeed;
      if (keys.d || keys.ArrowRight) targetRotationY += rotationSpeed;

      // Q/E: Additional zoom controls
      if (keys.q && camera.position.z > 3) camera.position.z -= moveSpeed;
      if (keys.e && camera.position.z < 20) camera.position.z += moveSpeed;

      // Constrain vertical rotation to prevent over-rotation
      targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
    };

    // Wheel zoom
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 0.01;
      camera.position.z += event.deltaY * zoomSpeed;
      camera.position.z = Math.max(3, Math.min(20, camera.position.z));
    };

    orbRef.current?.addEventListener('keydown', handleKeyDown);
    orbRef.current?.addEventListener('keyup', handleKeyUp);
    orbRef.current?.addEventListener('mousedown', handleMouseDown);
    orbRef.current?.addEventListener('mouseup', handleMouseUp);
    orbRef.current?.addEventListener('mousemove', handleMouseMove);
    orbRef.current?.addEventListener('wheel', handleWheel, { passive: false });

    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;

    const getRandomImagePath = () =>
      `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;

    const createImagePlane = (texture: THREE.Texture) => {
      const imageAspect = texture.image.width / texture.image.height;
      let width = baseWidth;
      let height = baseHeight;
      if (imageAspect > 1) height = width / imageAspect;
      else width = height * imageAspect;
      return new THREE.PlaneGeometry(width, height);
    };

    const loadImageMesh = (phi: number, theta: number) => {
      textureLoader.load(
        getRandomImagePath(),
        (texture) => {
          texture.generateMipmaps = false;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;

          const geometry = createImagePlane(texture);
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.x = sphereRadius * Math.cos(theta) * Math.sin(phi);
          mesh.position.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
          mesh.position.z = sphereRadius * Math.cos(phi);

          mesh.lookAt(0, 0, 0);
          mesh.rotateY(Math.PI);
          scene.add(mesh);
          loadedCount++;

          if (loadedCount === totalItems) animate();
        },
        undefined,
        (error) => console.error('Error loading texture:', error)
      );
    };

    const createSphere = () => {
      for (let i = 0; i < totalItems; i++) {
        const phi = Math.acos(-1 + (2 * i) / totalItems);
        const theta = Math.sqrt(totalItems * Math.PI) * phi;
        loadImageMesh(phi, theta);
      }
    };

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      
      updateMovement();
      
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      scene.rotation.x = rotationX;
      scene.rotation.y = rotationY;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    createSphere();

    return () => {
      orbRef.current?.removeEventListener('keydown', handleKeyDown);
      orbRef.current?.removeEventListener('keyup', handleKeyUp);
      orbRef.current?.removeEventListener('mousedown', handleMouseDown);
      orbRef.current?.removeEventListener('mouseup', handleMouseUp);
      orbRef.current?.removeEventListener('mousemove', handleMouseMove);
      orbRef.current?.removeEventListener('wheel', handleWheel);
      window.removeEventListener("resize", handleResize);
      if (orbRef.current && renderer.domElement) orbRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [totalImages, totalItems, baseWidth, baseHeight, sphereRadius, backgroundColor]);

  return (
    <div>
      <div
        ref={orbRef}
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          cursor: 'grab',
          outline: 'none'
        }}
      />
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '14px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1000,
        lineHeight: '1.4'
      }}>
    
      
      </div>
    </div>
  );
};

export default OrbitGallery;