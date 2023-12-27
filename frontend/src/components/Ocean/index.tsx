import { useRef, useMemo } from "react";
import {
  extend,
  ReactThreeFiber,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";

import * as THREE from "three";
import { Water } from "three-stdlib";
import waternormals from "../../assets/textures/waternormals.jpg";

extend({ Water });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: ReactThreeFiber.Object3DNode<Water, typeof Water>;
    }
  }
}

function Ocean() {
  const ref = useRef<Water>(null);
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, waternormals);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      // format: gl.encoding,
      format: gl,
    }),
    [waterNormals]
  );
  useFrame((_state, delta) => {
    const material = ref?.current?.material as THREE.ShaderMaterial;
    material.uniforms.time.value += delta;
  });

  return (
    <water
      ref={ref}
      args={[geom, config]}
      // rotation-x={-Math.PI / 2}
      // position={[0, 0, 0]}
    />
  );
}

export default Ocean;
