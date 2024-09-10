"use client";
import { useEffect } from "react"
import { Gradient } from "../gradient/Gradient"
import "@/styles/globals.css";

export const MeshGradient = () => {
    console.log(`made by cop`);
    useEffect(() => {
        const gradient = new Gradient({ canvas: '#gradient-canvas', colors:['#e31a03', '#e34600', '#16161a', '#00000']})
        gradient.init()
        console.log(`made by cop`);
      })
    
      return (
        <>
          <canvas id="gradient-canvas" className="canvas fixed h-full w-full opacity-40" data-transition-in />
        </>
      )
}