import { ArrowUpRight, Flame, PartyPopper } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Link as ViewTransitionsLink } from "next-view-transitions"
import { Badge } from '../ui/badge'
import { ThemeToggle } from '../ui/theme-toggle'

const Header = () => {
    return (
        <div>

            {/* {Header for mobile} */}
            {/* <div className='sm:hidden w-full p-2.5 bg-white dark:bg-black/5 relative'>
                ... your mobile header code ...
            </div> */}

            {/* Sticky header */}
            <div className='sticky top-0 left-0 right-0 z-50'>
                <div className='bg-white dark:bg-black/5 w-full'>
                    <div className='flex items-center justify-center w-full flex-col'>
                        <div
                            className="
                                flex flex-col sm:flex-row items-center justify-between
                                bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
                                dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                                shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                                backdrop-blur-md
                                border-x border-b border-[rgba(230,230,230,0.7)]
                                dark:border-[rgba(70,70,70,0.7)]
                                w-full sm:min-w-[800px] sm:max-w-[1200px]
                                rounded-b-[28px]
                                px-4 py-2.5
                                relative
                                transition-all duration-300 ease-in-out
                            "
                        >
                            <div className='relative z-10 flex flex-col sm:flex-row items-center justify-between w-full gap-2 p-2'>

                                {/* Logo & Menu */}
                                <div className='flex flex-col sm:flex-row items-center sm:gap-6 w-full sm:w-auto justify-between sm:justify-start'>
                                    <Link href={"/"} className='flex items-center gap-2'>
                                        <Flame className='w-6 h-6 text-green-500 dark:text-green-400' />
                                        <span className='hidden sm:block font-semibold'>Nova UI</span>
                                        <span className='text-gray-500'>|</span>
                                    </Link>

                                    <div className='hidden sm:flex items-center gap-4 sm:justify-between'>
                                        <ViewTransitionsLink
                                            href={"/docs/components/background-paths"}
                                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                                        >
                                            Components
                                        </ViewTransitionsLink>

                                        <ViewTransitionsLink
                                            href={"/pricing"}
                                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                                        >
                                            Pricing
                                        </ViewTransitionsLink>

                                        <Link
                                            href={"#"}
                                            target='_blank'
                                            className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2'
                                        >
                                            Templates
                                            <Badge variant={'brand'}>new</Badge>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right side menu */}
                                <div className='hidden sm:flex items-center gap-3'>
                                    <span className='text-zinc-300 dark:text-zinc-700'>|</span>
                                    <ThemeToggle />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
