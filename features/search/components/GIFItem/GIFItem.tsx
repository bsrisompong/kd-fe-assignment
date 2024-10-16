// import Image from "next/image";
import { AspectRatio, Image } from "@mantine/core";

interface GIFItemProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  altText: string;
}

const GIFItem = ({ imageUrl, imageWidth, imageHeight, altText }: GIFItemProps) => {
  const ratio = imageWidth / imageHeight;
  return (
    <AspectRatio ratio={ratio}>
      <Image src={imageUrl} alt={altText} />
    </AspectRatio>
  );
  return <Image src={imageUrl} alt={altText} width={imageWidth} height={imageHeight} />;
};

export default GIFItem;
