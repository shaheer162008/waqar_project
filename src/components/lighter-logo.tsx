import { cn } from '@/lib/utils';
import React from 'react'

interface LighterLogoProps {
    children: React.ReactNode;
    className?: string;
}

const LighterLogo = ({children,className}:LighterLogoProps) => {
  return (
    <h3 className={cn(className,"uppercase tracking-widest   font-bold text-lg")}>
                  {children}
                </h3>
  )
}

export default LighterLogo