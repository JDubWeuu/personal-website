'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const RouteListener = () => {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("");

  useEffect(() => {
    console.log(pathname);
    if (prevPath === pathname) {
        console.log("passed");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setPrevPath(pathname);
    }
  }, []);
  return <></>;
}

export default RouteListener;