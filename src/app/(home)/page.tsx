
"use client";
import { HomeSplash } from "@/components/home/splash/HomeSpash";
import { HomeFeatures } from "@/components/home/feature/HomeFeatures";
import { HomeFaq } from "@/components/home/faq/HomeFaq";
import { motion } from "framer-motion";
import "@/styles/globals.css";

export default function Page() {
  // made by cop
  return (
    <>
      {/* made by cop */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <HomeSplash title="Template" description="a gay nigga" link="https://discord.gg/yes" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <HomeFeatures />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <HomeFaq />
      </motion.div>
    </>
  );
}