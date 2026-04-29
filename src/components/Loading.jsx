import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Loading() {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, points, animationId;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.TorusGeometry(1.2, 0.35, 30, 60);

    const material = new THREE.PointsMaterial({
      color: "#e4e4e7",
      size: 0.09,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      points.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => {
      cancelAnimationFrame(animationId);

      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-50">
      <div ref={mountRef}></div>
    </div>
  );
}

export default Loading;