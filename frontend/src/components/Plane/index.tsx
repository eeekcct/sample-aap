import { useRef } from "react";
import { usePlane } from "@react-three/cannon";
import * as THREE from "three";
import Ocean from "../Ocean";

function Plane() {
  const [ref] = usePlane(
    () => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }),
    useRef<THREE.Mesh>(null)
  );
  return (
    <mesh ref={ref}>
      <Ocean />
    </mesh>
  );
}

export default Plane;
