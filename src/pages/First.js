import React, {useRef} from 'react';
import './First.css'
import * as THREE from 'three'
import ThreeCube from "../Comp/ThreeCube";


const First = () => {
    return (
    <div>
        <h1 className="Centr">Three.js-React</h1>
        <ThreeCube/>
        <h1>Bottom</h1>
    </div>
    );
};
export default First;
