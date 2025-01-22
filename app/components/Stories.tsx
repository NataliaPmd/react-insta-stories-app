'use client';  // Esta directiva asegura que este componente se ejecute en el cliente

import React, { useEffect, useState } from "react";
import InstaStories from "react-insta-stories";
import { Video } from "../lib/pexels";

interface StoriesProps {
  stories: Video[];
}


const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <div className="relative w-full aspect-[9/16]">
      {domLoaded && stories.length > 0 ? (
        <InstaStories
          stories={stories}
          width="480px"
          height="100%"
          loop={true}
        />
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default Stories;
