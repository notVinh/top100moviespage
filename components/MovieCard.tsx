"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface MovieProp {
  id: string;
  title: string;
  image: string;
  genre: string;
  year: number;
  rank: number;
  rating: string;
}

interface Prop {
  anime: MovieProp;
  index: number;
}

function MovieCard({ anime }: Prop) {
  // console.log(anime);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25,
        ease: "easeOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime?.image}
          alt={anime?.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime?.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime?.genre}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime?.year || anime?.rank}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {anime?.rating}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MovieCard;
