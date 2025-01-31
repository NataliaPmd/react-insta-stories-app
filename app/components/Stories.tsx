'use client';  // Esta directiva asegura que este componente se ejecute en el cliente

import React, { useState } from "react";
import InstaStories from "react-insta-stories";
import { Video } from "../lib/pexels";
import Image from "next/image";


interface StoriesProps {
  stories: Video[];
}


const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const [showStories, setShowStories] = useState(false);
  return (
    <div className="relative aspect-[9/16]">
      {!showStories ? (
        <Image
          src="/image2.jpg" // Cambia esto por tu imagen
          alt="Abrir historias"
          width={'750'}
          height={'1216'}
          className="cursor-pointer"
          onClick={() => setShowStories(true)}
        />
      ) : (
          <InstaStories stories={stories} width="750px"
          height="1216px"
          loop={true}onAllStoriesEnd={() => setShowStories(false)} />
      )}
    </div>
  );
};

export default Stories;
