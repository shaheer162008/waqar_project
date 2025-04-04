import { cn } from '@/lib/utils';
import React from 'react'

interface LighterTextProps {
  children: React.ReactNode;
  className?: string;
}

const LighterText = ({children,className}:LighterTextProps) => {
  return (
    <p className={cn(className," leading-relaxed sm:text-justify text-justify")}>
        {children}
    </p>
  )
}

export default LighterText