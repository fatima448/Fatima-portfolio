"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Html, OrbitControls, RoundedBox } from "@react-three/drei";
import { useRef, useState } from "react";
import type { Group } from "three";

export type RoomTarget = "about" | "projects" | "skills" | "experience" | "contact";

function Hotspot({ target, label, position, onNavigate }: { target: RoomTarget; label: string; position: [number, number, number]; onNavigate: (target: RoomTarget) => void }) {
  const [hovered, setHovered] = useState(false);
  return <mesh position={position} onClick={() => onNavigate(target)} onPointerOver={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }} onPointerOut={() => { setHovered(false); document.body.style.cursor = "auto"; }}>
    <sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color={hovered ? "#f6c57f" : "#9e8aff"} emissive={hovered ? "#f6c57f" : "#5541a4"} emissiveIntensity={1.5} />
    {hovered && <Html center distanceFactor={8}><span className="room-label">{label}</span></Html>}
  </mesh>;
}

function Studio({ onNavigate }: { onNavigate: (target: RoomTarget) => void }) {
  const group = useRef<Group>(null);
  useFrame(({ pointer }) => { if (group.current) group.current.rotation.y = pointer.x * 0.08; });
  return <group ref={group} position={[0, -1.2, 0]}>
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[13, 9]} /><meshStandardMaterial color="#16142a" /></mesh>
    <mesh receiveShadow position={[0, 2.2, -3.2]}><planeGeometry args={[13, 7]} /><meshStandardMaterial color="#211c39" /></mesh>
    <Float speed={1.2} floatIntensity={0.18}><RoundedBox args={[3.6, 0.22, 1.6]} radius={0.08} position={[0.5, 1.35, -0.6]} castShadow><meshStandardMaterial color="#9d6b49" /></RoundedBox><mesh position={[0.5, 2.15, -0.6]} castShadow><boxGeometry args={[1.4, .9, .1]} /><meshStandardMaterial color="#11172a" emissive="#1b3466" emissiveIntensity={.6} /></mesh><mesh position={[0.5, 1.5, .05]}><boxGeometry args={[1.1, .07, .58]} /><meshStandardMaterial color="#e9d8be" /></mesh></Float>
    <group position={[-3.6, .7, -1.8]}><RoundedBox args={[1.45, 1.2, .85]} radius={.14} castShadow><meshStandardMaterial color="#5c4c8b" /></RoundedBox><RoundedBox args={[1.65,.4,.9]} radius={.14} position={[0,-.6,0]}><meshStandardMaterial color="#4b3e70" /></RoundedBox></group>
    <group position={[3.8, 1.45, -2.7]}>{[0,1,2].map((row) => <group key={row} position={[0,row*.85,0]}><mesh><boxGeometry args={[1.7,.08,.38]} /><meshStandardMaterial color="#765b40" /></mesh>{[0,1,2].map((book) => <mesh key={book} position={[-.55+book*.45,.22,0]}><boxGeometry args={[.25,.4,.25]} /><meshStandardMaterial color={["#ce837c","#7f9ed9","#d4a663"][book]} /></mesh>)}</group>)}</group>
    <group position={[-3.8,1.2,-3.1]}><mesh><boxGeometry args={[1.2,.85,.08]} /><meshStandardMaterial color="#d69a65" emissive="#8f553a" emissiveIntensity={.4} /></mesh><mesh position={[0,0,.05]}><planeGeometry args={[.8,.55]} /><meshBasicMaterial color="#241a43" /></mesh></group>
    <group position={[3.4,.7,1.1]}><mesh><cylinderGeometry args={[.22,.32,1.15,10]} /><meshStandardMaterial color="#49795e" /></mesh><mesh position={[0,.78,0]}><sphereGeometry args={[.7,12,12]} /><meshStandardMaterial color="#4e9766" /></mesh></group>
    <group position={[-1.8,.8,1.5]}><mesh><cylinderGeometry args={[.07,.07,1.15,10]} /><meshStandardMaterial color="#bdb2ff" /></mesh><mesh position={[0,.62,0]}><coneGeometry args={[.5,.55,20]} /><meshStandardMaterial color="#f2c979" emissive="#e89d47" emissiveIntensity={1.3} /></mesh></group>
    <Hotspot target="about" label="About me" position={[-3.8,2.5,-3]} onNavigate={onNavigate} /><Hotspot target="projects" label="Projects" position={[.5,2.2,-.28]} onNavigate={onNavigate} /><Hotspot target="skills" label="Skills" position={[3.8,2.75,-2.25]} onNavigate={onNavigate} /><Hotspot target="experience" label="Experience" position={[-.8,1.4,-.05]} onNavigate={onNavigate} /><Hotspot target="contact" label="Contact" position={[-1.8,2.1,1.5]} onNavigate={onNavigate} />
  </group>;
}

export default function RoomScene({ onNavigate }: { onNavigate: (target: RoomTarget) => void }) {
  return <Canvas className="room-canvas" shadows dpr={[1, 1.5]} camera={{ position:[7,5.5,9], fov:42 }} gl={{ antialias:true, powerPreference:"high-performance" }}><color attach="background" args={["#100e20"]} /><ambientLight intensity={.7} /><directionalLight castShadow position={[3,7,4]} intensity={2.1} color="#f8d4a2" /><pointLight position={[-4,3,2]} intensity={12} color="#7167d9" distance={8} /><Studio onNavigate={onNavigate} /><ContactShadows position={[0,-1.18,0]} opacity={.55} scale={10} blur={2.8} far={4} /><OrbitControls enablePan={false} minDistance={8} maxDistance={13} minPolarAngle={.8} maxPolarAngle={1.45} /></Canvas>;
}
