import { Suspense ,useEffect , useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls , Preload , useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"


const Computers = ( {isMobile} ) => {
  const computer = useGLTF ("./planet/scene.gltf")
  return(
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor ="black" />
      <pointLight intensity={1} />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 2.3 : 4}
       
        rotation-y={0}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile , setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width :768px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
  }, [])
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera = {{
         far:200,
         position:[20 , 3, 5], 
         fov: 25
          }}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true}
          autoRotateSpeed={20}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 }
          minPolarAngle={Math.PI / 2 }
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;