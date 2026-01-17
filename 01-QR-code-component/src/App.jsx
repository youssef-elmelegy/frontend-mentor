import qr from "./assets/image-qr-code.png";

export default function App() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-300">
      <div className="flex flex-col space-y-[24px] w-[320px] bg-white rounded-[20px] p-[16px] pb-[40px] shadow-md">
        <img src={qr} alt="QR Code" className="rounded-[10px] w-full" />

        <div className="flex flex-col text-center gap-[16px] px-[16px]">
          <h1 className="text-slate-900 font-outfit font-bold text-[22px] leading-[1.2] ">
            Improve your front-end skills by building projects
          </h1>

          <p className="text-slate-500 font-outfit font-regular text-[15px] leading-[1.4] tracking-[0.2px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level!
          </p>
        </div>
      </div>
    </main>
  );
}
