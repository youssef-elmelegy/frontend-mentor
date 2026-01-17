import posterImage from "./assets/images/illustration-article.svg";
import profile from "./assets/images/image-avatar.webp";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F4D04E]">
      <div className="bg-white flex flex-col w-[384px] gap-6 p-6 rounded-[20px] border border-gray-950 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <img
          src={posterImage}
          alt="Hero Illustration"
          className="rounded-[10px]"
        />

        <div className="bg-[#F4D04E] px-3 py-1 rounded-sm w-fit">
          <h2 className="font-[Figtree] font-extrabold text-[14px] leading-[150%] text-gray-950">
            Learning
          </h2>
        </div>

        <h3 className="font-[Figtree] font-medium text-[14px] leading-[150%] text-gray-950">
          Published 21 Dec 2023
        </h3>

        <h1 className="font-[Figtree] font-extrabold text-[24px] leading-[150%] text-gray-950">
          HTML & CSS foundations
        </h1>

        <p className="font-[Figtree] font-medium text-[16px] leading-[150%] text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className="flex gap-[12px] items-center">
          <img
            src={profile}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full"
          />

          <h2 className="font-[Figtree] font-extrabold text-[14px] leading-[150%] text-gray-950">
            Greg Hooper
          </h2>
        </div>
      </div>
    </div>
  );
}
