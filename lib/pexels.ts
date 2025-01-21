import { API_KEY } from "@/utils/config";
import axios from "axios";

export interface Video {
  url: string;
  duration: number;
  title: string;
}

export const getPexelsVideos = async (): Promise<Video[]> => {
  try {
    const response = await axios.get("https://api.pexels.com/videos/search", {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query: "lifestyle", 
        per_page: 5,  
        orientation: 'portrait'   
      },
    });

    return response.data.videos.map((video: any) => ({
      url: video.video_files[0]?.link,
      duration: 5000,  
      title: video.user.name,
      type: "video"
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};