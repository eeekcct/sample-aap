import { useRef, useState } from "react";
import { useFrame, useLoader, ReactThreeFiber } from "@react-three/fiber";
import { Triplet, useBox } from "@react-three/cannon";
import * as THREE from "three";

import diceImage1 from "../../assets/textures/dice-01.webp";
import diceImage2 from "../../assets/textures/dice-02.webp";
import diceImage3 from "../../assets/textures/dice-03.webp";
import diceImage4 from "../../assets/textures/dice-04.webp";
import diceImage5 from "../../assets/textures/dice-05.webp";
import diceImage6 from "../../assets/textures/dice-06.webp";

type Props = {
  position?: Triplet;
};

export default function Dice({ position = [0, 0, 0] }: Props) {
  // const diceRef = useRef<THREE.Mesh>(null);
  const [ref, api] = useBox(
    () => ({
      args: [1, 1, 1],
      mass: 1,
      position: position,
      onCollide: (_e) => {
        setRolling(false);
        console.log(rolling, "collide");
      },
    }),
    useRef<THREE.Mesh>(null)
  );
  const [rolling, setRolling] = useState<boolean>(false);

  useFrame(() => {
    // const mesh = ref.current as THREE.Mesh;
    // if (rolling) {
    // mesh.rotation.x += 0.1;
    // mesh.rotation.y += 0.1;
    // api.rotation.set(10, 10, 0);
    // }
    // const raycaster = new THREE.Raycaster();
    // raycaster.set(mesh.position, new THREE.Vector3(0, -1, 0));
  });
  const handleClick = () => {
    api.position.set(0, 3, 0);
    api.angularVelocity.set(5, 3, 0);
    setRolling(true);
  };
  const diceImages = [
    diceImage1, // 上面
    diceImage6, // 下面
    diceImage3, // 前面
    diceImage4, // 後面
    diceImage2, // 左面
    diceImage5, // 右面
  ];
  const diceTextures = diceImages.map((image) =>
    useLoader(THREE.TextureLoader, image)
  );
  const diceMaterials = diceTextures.map(
    (texture) => new THREE.MeshBasicMaterial({ map: texture })
  );
  return (
    <mesh ref={ref} material={diceMaterials} onClick={handleClick}>
      {/* <boxGeometry attach="geometry" args={[1, 1, 1]} /> */}
      <boxGeometry />
    </mesh>
  );
}
