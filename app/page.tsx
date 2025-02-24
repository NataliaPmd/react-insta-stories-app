import React from "react";
import { getPexelsVideos } from "./lib/pexels";
import Stories from "./components/Stories";

const Page: React.FC = async () => {
  const videos = await getPexelsVideos();  // Obtiene los videos desde la API de Pexels

  return (
    <div>
      <h1>Video Stories</h1>
      <Stories stories={videos} />
    </div>
  );
};

export default Page;
