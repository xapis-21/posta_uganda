import Image from "next/image";
const InsightCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-96">
      <Image
        src={
          image
        }
        alt={""}
        width={1000}
        height={1000}
        className="rounded-lg h-48 object-cover"
      />
      <h3 className="font-semibold pt-2 pb-4 line-clamp-2">
        {title}
      </h3>
      <p className="text-xs line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default InsightCard;
