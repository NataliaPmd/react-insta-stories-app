'use client';

import React, { useEffect, useState } from "react";
import InstaStories from "react-insta-stories";
import { getPexelsVideos, Video } from "../lib/pexels";

const Stories = () => {
  const [stories, setStories] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPexelsVideos();
      setStories(data);
      setIsLoading(false); 
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full aspect-[9/16]">
      {stories.length > 0 ? (
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
