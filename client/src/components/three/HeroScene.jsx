import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars, Icosahedron } from '@react-three/drei'

function Core() {
  const mesh = useRef()
  useFrame((_, dt) => { if(mesh.current) mesh.current.rotation.y += dt * 0.35 })
  return (
    <Float speed={1.8} floatIntensity={0.8} rotationIntensity={0.2}>
      <mesh ref={mesh} scale={1.9}>
        <Icosahedron args={[1,4]} />
        <MeshDistortMaterial color="#6EE7B7" distort={0.3} speed={1.8} roughness={0.05} metalness={0.9} transparent opacity={0.88} />
      </mesh>
    </Float>
  )
}

function Wire() {
  const mesh = useRef()
  useFrame((_, dt) => { if(mesh.current){ mesh.current.rotation.x -= dt*0.12; mesh.current.rotation.y += dt*0.18 } })
  return (
    <mesh ref={mesh} scale={2.6}>
      <Icosahedron args={[1,2]} />
      <meshBasicMaterial color="#6EE7B7" wireframe transparent opacity={0.1} />
    </mesh>
  )
}

function Ring({ r, speed, tilt }) {
  const m = useRef()
  useFrame((_, dt) => { if(m.current) m.current.rotation.z += dt * speed })
  return (
    <group rotation={[tilt,0,0]}>
      <mesh ref={m}>
        <torusGeometry args={[r,0.005,8,80]} />
        <meshBasicMaterial color="#6EE7B7" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function Dot({ r, speed, tilt, off=0 }) {
  const m = useRef(); const t = useRef(off)
  useFrame((_, dt) => {
    t.current += dt * speed
    if(m.current){
      m.current.position.x = Math.cos(t.current) * r
      m.current.position.z = Math.sin(t.current) * r * Math.cos(tilt)
      m.current.position.y = Math.sin(t.current) * r * Math.sin(tilt)
    }
  })
  return <mesh ref={m}><sphereGeometry args={[0.055,8,8]}/><meshBasicMaterial color="#6EE7B7"/></mesh>
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position:[0,0,8], fov:44 }} gl={{ antialias:true, alpha:true }} style={{ background:'transparent' }} dpr={[1,2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3}/>
          <pointLight position={[4,4,4]} intensity={2} color="#6EE7B7"/>
          <pointLight position={[-4,-4,3]} intensity={1} color="#34D399"/>
          <Stars radius={80} depth={40} count={1800} factor={3} fade speed={0.5}/>
          <Core/><Wire/>
          <Ring r={2.8} speed={0.5} tilt={0.3}/>
          <Ring r={3.5} speed={-0.3} tilt={-0.6}/>
          <Ring r={4.1} speed={0.22} tilt={1.0}/>
          <Dot r={2.8} speed={1.2} tilt={0.3} off={0}/>
          <Dot r={3.5} speed={-0.9} tilt={-0.6} off={2}/>
          <Dot r={4.1} speed={0.7} tilt={1.0} off={4}/>
        </Suspense>
      </Canvas>
    </div>
  )
}
