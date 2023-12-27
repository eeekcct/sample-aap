import { Suspense, useState } from "react";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
// import Ocean from "./components/Ocean";
import Plane from "./components/Plane";
import Dice from "./components/Dice";

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      {/* <Environment preset="sunset" blur={0.7} background /> */}
      <Physics gravity={[0, -9.8, 0]}>
        {/* <Ocean /> */}
        <Plane />
        <Dice position={[0, 3, 0]} />
      </Physics>
      {/* <Suspense fallback={null}>
        <Ocean />
        <Dice position={[0, 3, 0]} />
      </Suspense> */}
      <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
    </Canvas>
  );
}

const Scene = () => {
  const [color, setColor] = useState<string>("hotpink");
  return (
    <mesh
      scale={20}
      onClick={() => {
        color === "hotpink" ? setColor("orange") : setColor("hotpink");
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default App;
