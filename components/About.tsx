import Image from 'next/image'
import React from 'react'
import Container from './Container';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <Container><div className="rounded-lg bg-postawhite w-full my-10">
      <div className="flex flex-col md:flex-row md:justify-center gap-20 items-center">
        <div className="max-w-80">
          <h2 className="test-xs text-postared">About us</h2>
          <h3 className="text-lg font-bold mt-1 mb-4">
            Serving Uganda since 1951
          </h3>
          <p className="text-xs mb-10">
            Posta Uganda connects the nation through a blend of traditional
            postal services and innovative digital solutions. Our mission is to
            bridge distances and support Uganda's growth, one delivery at a
            time.
          </p>
          <Link href={"/about-us"} className={cn(buttonVariants({variant:"secondary", size:"sm"}))}>Learn more</Link>
        </div>
        <Image
          src={
            "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={""}
          width={1000}
          height={1000}
          className='max-w-[461px] h-[254px] object-cover rounded-[20px] border-black my-16 border-2'
        />
      </div>
    </div></Container>
    
  );
}

export default About
