import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return  <div className="mx-auto w-full max-w-[1400px] h-full px-4 md:px-8 relative">{children}</div>;
}

