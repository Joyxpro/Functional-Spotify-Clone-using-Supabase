"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication before push

    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/20 transition pr-12 w-60"
    >
      <div className="relative min-h-[78px] min-w-[75px]">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <p className="font-medium truncate py-5 ">{name}</p>
      <div className="absolute transition opacity-0 rounded-full justify-center items-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
