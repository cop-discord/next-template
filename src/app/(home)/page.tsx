"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col min-h-screen justify-center items-center">
                <p className="text-white font-semibold text-8xl">rival</p>
                <div className="flex flex-row gap-5 mt-20 sm:gap-14">
                    <Link
                        href="/commands"
                        className="text-rival-pink font-bold text-xl"
                    >
                        commands
                    </Link>
                </div>
            </div>
        </div>
    );
}