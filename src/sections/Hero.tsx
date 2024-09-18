"use client"
import { buttonVariants } from '../components/ui/button';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Carousel from '@/components/Carousel'
import { useState } from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

const Hero = () => {
    
    return (
    // <main className="container mx-auto px-4 py-16 pt-25">
    //     <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">Watch. Detect. Defend.</h1>
    //     <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    //       We revolutionize surveillance by harnessing the power of AI and Large Language Models (LLMs) to supercharge security camera feeds. Our intelligent system doesn't just watch it understands.
    //     </p>
    //   </main>
        <div
        className=" relative flex flex-col gap-4 items-center justify-center  container mx-auto px-4 pt-[100px]"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Watch. Detect. Defend.
        </div>
        <div className="font-extralight text-center md:text-xl dark:text-neutral-200 py-4">
        We revolutionize surveillance with AI and LLMs, transforming security cameras into intelligent, understanding systems.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get started
        </button>
      </div>

    )
}

export default Hero