"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Layers3, LockIcon, LucideIcon, Search, Settings, ShieldAlert, User, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true)
  const [showPriority, setShowPriority] = useState(true)
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
  `

  return (
    <div className={sidebarClassNames}>
      <div className='flex flex-col justify-start w-full h-[100%]'>
        {/* Top Logo */}
        <div className='z-50 flex justify-between items-center bg-white dark:bg-black px-6 pt-3 w-64 min-h-[56px]'>
          <div className='font-bold text-gray-800 text-xl dark:text-white'>
            BizSpark
          </div>
          {isSidebarCollapsed ? null : (
            <button className='py-3' onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
              <X className='w-6 h-6 text-gray-800 hover:text-gray-500 dark:text-white' />
            </button>
          )}
        </div>
        {/* Team */}
        <div className='flex items-center gap-5 border-gray-200 border-y-[1.5px] dark:border-gray-700 px-8 py-4'>
          <Image src='/Logo.png' alt='Logo' width={40} height={40} />
          <div>
            <h3 className='font-bold text-md dark:text-gray-200 tracking-wide'>
              BizSpark Team
            </h3>
            <div className='flex items-start gap-2 mt-1'>
              <LockIcon className='mt-[0.1rem] w-3 h-3 text-gray-500 dark:text-gray-400' />
              <p className='text-gray-500 text-xs'>Private</p>
            </div>
          </div>
        </div>
        {/* Navbar Links */}
        <nav className='z-10 w-full'>
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>

        {/* PROJECTS LINKS */}
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className='flex justify-between items-center px-8 py-3 w-full text-gray-500'>
          <span className=''>Projects</span>
          {showProjects ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
        </button>
        {/* PROJECTS LIST */}

        {/* PRIORITIES LINKS */}
        <button
          onClick={() => setShowPriority((prev) => !prev)}
          className='flex justify-between items-center px-8 py-3 w-full text-gray-500'>
          <span className=''>Priority</span>
          {showPriority ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
        </button>
        {showPriority && (
          <>
            <SidebarLink icon={AlertCircle} label='Urgent' href='/priority/urgent' />
            <SidebarLink icon={ShieldAlert} label='High' href='/priority/high' />
            <SidebarLink icon={AlertTriangle} label='Medium' href='/priority/medium' />
            <SidebarLink icon={AlertOctagon} label='Low' href='/priority/low' />
            <SidebarLink icon={Layers3} label='Backlog' href='/priority/backlog' />
          </>
        )}

      </div>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
}: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || (pathname === '/' && href === '/dahsboard')

  return (
    <Link href={href} className='w-full'>
      <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? 'bg-gray-100 text-white dark:bg-gray-600' : ''
        } justify-start px-8 py-3`}>
        {isActive && (
          <div className='top-0 left-0 absolute bg-blue-200 w-[5px] h-[100%]' />
        )}
        <Icon className="w-6 h-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>{label}</span>
      </div>
    </Link>
  )
}

export default Sidebar