//import "./3.js";
import React, {Component} from "react";
import "./Graph3D.css";
//import { Link } from 'react-router-dom'
//import CsvParse from  "../UploadCSV"; 
//import "./tubular.js";
//import "./vectors.js";
// import * as THREE from "./3.js";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
//import ExpoTHREE from "expo-three";
// import threeEntryPoint from './threeEntryPoint';





class Graph3D extends Component {


    
  componentDidMount() {
    var mesh, renderer, scene, camera, controls;

    this.nEnd = 0;
    this.nMax=90; 
    this.nStep = 90;

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    // scene
    this.scene = new THREE.Scene();

    
    // camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    this.camera.position.set(10, 5, 10);
    this.scene.add(camera); //required, since camera has a child light


    // renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement)

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 0;
    this.controls.maxDistance = 200;

    // ambient
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // light
    this.light = new THREE.PointLight(0xffffff, 0.5);
    this.light.position.set(20, 20, 0);
    this.camera.add(this.light);

    // axes
    this.scene.add(new THREE.AxisHelper(20));

    //points
    this.points = [];
    for (let i = 0; i < 18; i++) {

    this.points.push(new THREE.Vector3(i, i, i).multiplyScalar(3));
    //console.log([i, this.points[i].multiplyScalar(3)])
    }


    // path
    this.path = new THREE.CatmullRomCurve3(this.points);

    // params
    this.pathSegments = 5120;
    this.tubeRadius = 0.30;
    this.radiusSegments = 88;
    this.closed = false;

    // geometry
    this.geometry = new THREE.TubeGeometry(this.path, this.pathSegments, this.tubeRadius, this.radiusSegments, this.closed);

    // to buffer goemetry
    this.geometry = new THREE.BufferGeometry().fromGeometry(this.geometry);
    this.nMax = this.geometry.attributes.position.count;

    // material
    this.material = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        side: THREE.DoubleSide
    });

    // mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.start();
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }


  animate = () => {
    
        this.frameId = window.requestAnimationFrame(this.animate);

        this.nEnd = (this.nEnd + this.nStep) % this.nMax;

        this.mesh.geometry.setDrawRange(0, this.nEnd);

        this.renderScene();

  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

        render() {


        return (
            <div
            style={{ width: '400px', height: '400px' }}
            ref={(mount) => { this.mount = mount }}
          />
        )
    }
}


export default Graph3D;