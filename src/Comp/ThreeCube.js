import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {OrbitControls} from "three/addons/controls/OrbitControls";

const ThreeCube = () => {
    const cubeRef = useRef(null);
    const sizes = {
        width:window.innerWidth,
        height:window.innerHeight
    }
    useEffect(() => {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff)
        let camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        );
        camera.position.set(0,0,3)
        const ambient = new THREE.AmbientLight(0xffffff,1);
        scene.add(ambient)

        let light = new THREE.PointLight(0xc4c4c4,1)
        light.position.set(0,300,500)
        scene.add(light)

        let light2 = new THREE.PointLight(0xc4c4c4,1)
        light.position.set(500,300,500)
        scene.add(light2)



        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(
            sizes.width,
            sizes.height
        );
        let canv = cubeRef.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader()

        loader.load('/modals/scene.gltf', ( gltfScene ) => {

            scene.add( gltfScene.scene );

        }, undefined, function ( error ) {

            console.error( error );

        } );

        window.addEventListener('resize',()=>{
            sizes.width=window.innerWidth
            sizes.height=window.innerHeight
            camera.updateProjectionMatrix()
            camera.aspect = sizes.width/sizes.height
            renderer.setSize(sizes.width,sizes.height)
        })
        const control = new OrbitControls(camera,canv)
        const loop = () =>{
            renderer.render(scene,camera);
            window.requestAnimationFrame(loop)
        }
        loop()
    },[]);



    return (
        <div
            ref={cubeRef}
            style={{ width: "100%", height: "100%",margin:0,padding:0,overflowX:"hidden"}}
        ></div>
    );
};

export default ThreeCube;