import Image from "next/image";

interface GIFItemProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  altText: string;
}

const GIFItem = ({ imageUrl, imageWidth, imageHeight, altText }: GIFItemProps) => {
  return (
    <div className="break-inside-avoid mb-4">
      <Image
        unoptimized
        src={imageUrl}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto"
      />
    </div>
  );
};

export default GIFItem;
