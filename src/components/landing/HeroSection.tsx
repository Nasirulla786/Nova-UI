'use client'
import React from 'react'
import { motion } from "motion/react"
import { Badge } from '../ui/badge'
import { Sparkles } from 'lucide-react'
import TailwindCSS from '../icons/tailwind-css'
import { BrowseComponentsButton } from '../ui/BrowseComponentsButton'
import BrowseBlocksButton from '../ui/BrowseBlocksButton'
// import { Sparkles } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20'>
            {/* {left side content} */}

            <div className='w-full lg:w-[45%] flex-col items-start text-left space-y-8'>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100'>
                        Create with{' '}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>Precision</span> <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>
                            <span className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100'>
                                build with{' '}</span>
                            ease
                        </span>
                    </h1>

                    <p className='mt-6 text-[15px] md:text-xl text-zinc-700  max-w-lg dark:text-zinc-300' > A premium collection of{" "}
                        <span className='font-semibold'>100+ premium UI components</span>{" "} crafted with{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>Tailwind Css</span>{" "
                        }and{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400'>shadcn/ui</span>{" "} for modern React and Next.js applications
                    </p>



                </motion.div>





                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex flex-fol justify-start w-full'
                >

                    <span className='text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2'>


                        <TailwindCSS  className='w-4 h-4'/>
                        <span>Now updated for TAILWIND CSS 4.0! {"    "}
                            <span className='inline-flex items-center rounded-md bg-purple-500 dark:bg:purple-900/30 px-2 py-1 text-xs'>
                                <Sparkles  className='h-3 w-4 mr-1' />

                                New
                            </span>
                        </span>
                    </span>




                </motion.div>

                  <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3'>
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />

                    </div>


            </div>


        </div>
    )
}

export default HeroSection
