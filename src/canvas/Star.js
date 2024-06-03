import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Star = () => {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;
    
    // Create a new THREE.js scene
    const scene = new THREE.Scene();
    
    // Create a camera with a field of view of 75 degrees,
    // an aspect ratio based on the window size, and a near/far clipping plane
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Create a WebGL renderer with antialiasing enabled
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    // Set the size of the renderer to match the window size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a geometry to hold the star positions
    const starGeometry = new THREE.BufferGeometry();
    
    // Create a material for the stars with white color
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    
    // Create an array to hold the star vertices
    const starVertices = [];

    // Generate random star positions within a 2000x2000x2000 cube
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    // Set the star vertices as the position attribute of the geometry
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    // Create a Points object to render the stars
    const stars = new THREE.Points(starGeometry, starMaterial);
    
    // Add the stars to the scene
    scene.add(stars);

    // Set the initial position of the camera
    camera.position.z = 5;

    // Function to animate the scene
    const animate = () => {
      // Request the next frame of the animation
      requestAnimationFrame(animate);
      
      // Rotate the stars slightly for each frame
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      
      // Render the scene from the perspective of the camera
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Function to handle window resize events
    const handleResize = () => {
      // Update the camera aspect ratio and projection matrix
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Update the renderer size
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Add an event listener for window resize events
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the canvas element
  return <canvas ref={canvasRef} className="background-canvas"></canvas>;
};

export default Star;
