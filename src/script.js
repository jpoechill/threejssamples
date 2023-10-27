import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()

group.position.y = 1

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'orange' })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(2, .21, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, .21, 2),
    new THREE.MeshBasicMaterial({ color: 'red' })
)

group.add(cube1)
group.add(cube2)
group.add(cube3)

scene.add(group)


// Axes helpers
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)