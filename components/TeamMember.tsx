import Image from "next/image";

const TeamMember = ({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="w-full md:max-w-[300px] flex flex-col items-center gap-4 bg-transparent border-none rounded-apple-xl hover:bg-foreground/50 cursor-pointer duration-300 transition group p-4">
      <div className="h-[300px] min-w-[260px] max-w-[300px]">
        <Image
          src={image}
          height={300}
          width={300}
          alt=""
          className="rounded-2xl h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-medium text-base text-center text-secondary/80">
          {name}
        </h3>
        <p className="text-sm text-muted/50">{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
