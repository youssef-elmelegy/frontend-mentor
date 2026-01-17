import profile from "./assets/images/avatar-jessica.jpeg";
export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-Gray-900">
      <div className="bg-Gray-800 p-12 rounded-xl flex flex-col gap-3 w-[380px]">
        <div className="pb-4">
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto "
          />
        </div>
        <div>
          <h1 className="text-[24px] text-white font-bold text-center">
            Jessica Randall
          </h1>
          <p className="text-Green text-[14px] font-semibold text-center">
            London, United Kingdom
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <p className="text-white text-[14px] text-center p-2">
            "Front-end developer and avid reader."
          </p>
          <Button>GitHub</Button>
          <Button>Frontend Mentor</Button>
          <Button>LinkedIn</Button>
          <Button>Twitter</Button>
          <Button>Instagram</Button>
        </div>
      </div>
    </div>
  );
}

function Button({ children }) {
  return (
    <button className="bg-Gray-700 text-white text-[14px] font-semibold py-3 px-4 rounded-lg hover:bg-Green hover:text-Gray-800 transition w-full cursor-pointer">
      {children}
    </button>
  );
}
