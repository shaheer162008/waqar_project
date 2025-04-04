import { cn } from '@/lib/utils'
import React from 'react'

interface HeadingPops {
    children: React.ReactNode,
    className?: string
}

const Heading = ({children,className}:HeadingPops) => {
  return (
    <h2 className={cn(className,"text-4xl font-extrabold  text-blue-500 mb-6")}>
              {children}
            </h2>
  )
}

export default Heading