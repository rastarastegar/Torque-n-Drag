import React, {Component} from "react";
import "./Graph3D.css";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";






class Graph3D extends Component {


    
  componentDidMount() {
    var mesh, renderer, scene, camera, controls;
    this.vectors=this.props.surveyData;
    console.log(this.vectors);
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
    this.scene.add(new THREE.AxesHelper(20));

    //points
    this.points = [];
    for (let i = 0; i < this.vectors.length; i++) {
        // if(this.vectors[i]["Azim (Deg)"]==0){this.vectors[i]["Azim (Deg)"]=1}
        // if(this.vectors[i]["Depth (ft)"]==0){this.vectors[i]["Depth (ft)"]=1}
        // if(this.vectors[i]["Incl (Deg)"]==0){this.vectors[i]["Incl (Deg)"]=1}


        //done to avoid faceless geometry
        if(i==0){this.points.push(new THREE.Vector3(this.vectors[i]["east"], this.vectors[i]["tvd"], this.vectors[i]["north"]).multiplyScalar(1));}
        else{
        if(this.vectors[i]["east"]==this.vectors[(i-1)]["east"]&&this.vectors[i]["tvd"]==this.vectors[(i-1)]["tvd"]&&this.vectors[i]["north"]==this.vectors[(i-1)]["north"])
        {
            console.log('do nothing')
        }else{
        let tvd = this.vectors[i]["tvd"];
        let east = this.vectors[i]["east"];
        let north = this.vectors[i]["north"];
         if(tvd!=0){tvd=tvd/1000}
         if(east!=0){east=east/1000}
         if(north!=0){north=north/1000}
             this.points.push(new THREE.Vector3(east, tvd, north).multiplyScalar(1));
        }}
    
    
    //console.log([i, this.points[i].multiplyScalar(3)])
    // console.log(this.vectors[i]["Depth (ft)"])
    // console.log(i)
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