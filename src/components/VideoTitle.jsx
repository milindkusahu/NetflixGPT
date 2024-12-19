import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex gap-3">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-2xl rounded-lg hover:bg-opacity-80 flex items-center justify-center gap-2">
          <Play size={24} /> Play
        </button>
        <button className="hidden md:flex items-center justify-center gap-2 bg-gray-500 text-white p-4 px-12 text-2xl bg-opacity-50 rounded-lg">
          <Info size={24} className="inline-block" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
