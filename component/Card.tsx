import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Post } from "contentlayer/generated";

interface CardProps extends Post {
  title: string;
  author: string;
  date: string;
  image?: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  title,
  author,
  date,
  image,
  description,
  url,
}) => {
  const formatedDate = new Date(date).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="border border-slate-300 m-4 p-3 max-w-sm rounded sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl overflow-hidden shadow-lg hover:scale-110">
      <Link
        href={url}
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
      >
        {image && <Image className="w-full" src={image} alt={title} />}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base"> {title}</p>

          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="text-gray-700 text-base">{author}</div>
          <div className="text-gray-700 text-base">{formatedDate}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
