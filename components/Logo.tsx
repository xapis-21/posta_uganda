import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ image, className }: { image: string, className?: string}) => {
  return (
    <Image
      src={image}
      height={40}
      width={100}
      alt={"Posta Uganda Logo"}
      className={cn("w-auto object-contain",className)}
    />
  );
};

export default Logo;
