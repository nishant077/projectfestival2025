import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import './style.css'

const VirtualGallery: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  const moveState = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    rotateLeft: false,
    rotateRight: false
  })

  useEffect(() => {
    if (!mountRef.current) return

    // Lock scrolling for this page only
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    )
    camera.position.set(0.02, 0.2, 2.6)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enabled = false

    const loader = new GLTFLoader()
    loader.load(
      '/modules/the_picture_gallery.glb',
      (gltf) => {
        gltf.scene.position.set(0, 0, 2)
        gltf.scene.scale.set(2, 2, 2)
        scene.add(gltf.scene)
      },
      undefined,
      (error) => console.error('Error loading GLB', error)
    )

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = true
          break
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = true
          break
        case 'KeyA':
          moveState.current.left = true
          break
        case 'KeyD':
          moveState.current.right = true
          break
        case 'ArrowLeft':
          moveState.current.rotateLeft = true
          break
        case 'ArrowRight':
          moveState.current.rotateRight = true
          break
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = false
          break
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = false
          break
        case 'KeyA':
          moveState.current.left = false
          break
        case 'KeyD':
          moveState.current.right = false
          break
        case 'ArrowLeft':
          moveState.current.rotateLeft = false
          break
        case 'ArrowRight':
          moveState.current.rotateRight = false
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const boundaries = { minX: -5, maxX: 5, minZ: -5, maxZ: 5 }

    const moveCamera = () => {
      const moveSpeed = 0.03
      const rotateSpeed = 0.02
      const direction = new THREE.Vector3()
      camera.getWorldDirection(direction)
      direction.y = 0
      direction.normalize()

      if (moveState.current.forward) {
        const nextPos = camera.position.clone().addScaledVector(direction, moveSpeed)
        if (nextPos.x >= boundaries.minX && nextPos.x <= boundaries.maxX &&
            nextPos.z >= boundaries.minZ && nextPos.z <= boundaries.maxZ) {
          camera.position.copy(nextPos)
        }
      }

      if (moveState.current.backward) {
        const nextPos = camera.position.clone().addScaledVector(direction, -moveSpeed)
        if (nextPos.x >= boundaries.minX && nextPos.x <= boundaries.maxX &&
            nextPos.z >= boundaries.minZ && nextPos.z <= boundaries.maxZ) {
          camera.position.copy(nextPos)
        }
      }

      if (moveState.current.left || moveState.current.rotateLeft) camera.rotateY(rotateSpeed)
      if (moveState.current.right || moveState.current.rotateRight) camera.rotateY(-rotateSpeed)
    }

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    const animate = () => {
      requestAnimationFrame(animate)
      moveCamera()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="virtual-gallery-page" />
}

export default VirtualGallery
