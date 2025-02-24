import axios from 'axios';
import { API_KEY } from '@/utils/config';

export interface Video {
  url: string;
  duration: number;
  title: string;
}

export interface VideoResponse {
  user: { name: string };
  video_files: { link: string }[];
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
        orientation: 'portrait',
      },
    });

    return response.data.videos.map((video: VideoResponse) => ({
      url: video.video_files[0]?.link,
      duration: 5000,  // Duración en milisegundos para el video
      title: video.user.name,
      type: "video",
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
