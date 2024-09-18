"use client"
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import Image from "next/image";
import MobileNav from "./MobileNav";
import * as React from "react"
import { ModeToggle } from "@/components/ModeToggle"
import { useTheme } from "next-themes"

const NavbarContent = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const logoSrc = theme === 'dark' || resolvedTheme === 'dark' ? "/dark-logo.svg" : "/logo.svg"

  return (
    <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="flex gap-2 z-40 font-semibold">
            <Image src={logoSrc} width={120} height={50} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Services
            </Link>
            <Link href="/features" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Features
            </Link>
            <Link href="/product" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Product
            </Link>
            <Link href="/testimonial" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Testimonial
            </Link>
            <Link href="/faq" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              FAQ
            </Link>
          </div>
          <div className="h-full flex items-center space-x-4">
            <Link
              href="/api/auth/register"
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >

              Login
            </Link>
            <Link
              href="/api/auth/login"
              className={buttonVariants({ size: 'sm', className: 'bg-[#27272A] dark:bg-black-400 text-white' })}
            >
            <Image src="/icon.svg" width={18} height={18} alt="logo" className="pr-1" />

              Sign up
            </Link>
            <ModeToggle/>
            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

const Navbar = () => {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <NavbarContent /> : null
}

export default Navbar