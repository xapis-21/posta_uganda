import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface InsightCardProps {
  image: string;
  title: string;
  description: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card className="max-w-[352px] overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={352}
          height={200}
          className="h-[200px] w-full object-cover rounded-t-apple-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-semibold text-foreground text-lg mb-2 line-clamp-2">
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
