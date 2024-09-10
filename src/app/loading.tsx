"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <motion.img
                src="/yes.png"
                alt="Template Logo"
                className="loading-logo"
                initial={{ opacity: 0, scale: 0.8, y: '100%' }}
                animate={{ opacity: 1, scale: 1, y: '50%' }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />
        </div>
    );
};
