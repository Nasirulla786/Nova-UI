"use client";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
import TailwindCSS from "../icons/tailwind-css";
import { BrowseComponentsButton } from "../ui/BrowseComponentsButton";
import BrowseBlocksButton from "../ui/BrowseBlocksButton";
import Link from "next/link";
import Card02 from "../codesnippetui/card/card-02";
import Profile02 from "../codesnippetui/profile/profile-02";
import AIInput_03 from "../codesnippetui/ai-input/ai-input-03";
import Btn03 from "../codesnippetui/buttons/btn-03";
import Btn02 from "../codesnippetui/buttons/btn-02";
import Btn04 from "../codesnippetui/buttons/btn-04";
import AIInput_05 from "../codesnippetui/ai-input/ai-input-05";
import Input_03 from "../codesnippetui/input/input-03";
import Input_02 from "../codesnippetui/input/input-02";
import Input_01 from "../codesnippetui/input/input-01";
import AIInput_01 from "../codesnippetui/ai-input/ai-input-01";
import AIInput_02 from "../codesnippetui/ai-input/ai-input-02";
import AIInput_04 from "../codesnippetui/ai-input/ai-input-04";
import Btn01 from "../codesnippetui/buttons/btn-01";
import Btn07 from "../codesnippetui/buttons/btn-07";
import Btn06 from "../codesnippetui/buttons/btn-06";
import Btn_05 from "../codesnippetui/buttons/btn-05";
import Profile04 from "../codesnippetui/profile/profile-04";
import Profile05 from "../codesnippetui/profile/profile-05";
import Profile01 from "../codesnippetui/profile/profile-01";
// import { Sparkles } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row  justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20">
            {/* {left side content} */}

            <div className="w-full lg:w-[45%] flex-col items-start text-left space-y-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-100">
            Build UI that{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              stands out
            </span>{" "}
            with speed
          </h1>

                    <p className="mt-6 text-[15px] md:text-xl text-zinc-700  max-w-lg dark:text-zinc-300">
                        {" "}
                        A premium collection of{" "}
                        <span className="font-semibold">
                            100+ premium UI components
                        </span>{" "}
                        crafted with{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                            Tailwind Css
                        </span>{" "}
                        and{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
                            shadcn/ui
                        </span>{" "}
                        for modern React and Next.js applications
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-fol justify-start w-full"
                >
                    <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
                        <TailwindCSS className="w-4 h-4" />
                        <span>
                            Now updated for TAILWIND CSS 4.0! {"    "}
                            <span className="inline-flex items-center rounded-md bg-purple-500 dark:bg:purple-900/30 px-2 py-1 text-xs">
                                <Sparkles className="h-3 w-4 mr-1" />
                                New
                            </span>
                        </span>
                    </span>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                    <BrowseComponentsButton />
                    <BrowseBlocksButton />
                </div>
            </div>




            {/* Right Side Component */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                >
                    {/* card componennt */}
                    <div className="w-full flex flex-col  items-center justify-center">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            <Card02 />
                        </span>


                    </div>

                    {/* Action Search bar */}

                    <div className="w-full max-w-[600px] bg-transparent">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                            <Profile01 />
                        </span>

                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" w-full "
                >

                    <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" >AI Chat</span>
                    <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                        {/* {AIINPUT} */}


<AIInput_04 />

                    </div>





                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" w-full grid -grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
                >


                    <div className="w-full">
                        <h1 className="text-center m-5">Buttons</h1>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" ><Btn03 /></span>

                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" ><Btn04 /></span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" ><Btn_05 /></span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" ><Btn07 /></span>

                    </div>


                    <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 items-center   justify-center ">
                        {/* {AIINPUT} */}
                        <AIInput_05 />

                                <Link href={"/docs/components/button"}>
                            {/* Buttons */}

                        </Link>

                        <Link href={"/docs/components/button"}>
                            {/* Inputs */}
                            {/* <Input_01 /> */}
                        </Link>





                    </div>

                    <div className="w-full">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2" >Input</span>

                        <Link href={"/docs/components/input"}>
                            {/* Inputs */}


                        </Link>

                    </div>





                </motion.div>




            </div>


        </div>
    );
};

export default HeroSection;
