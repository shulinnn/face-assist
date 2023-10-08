import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="flex flex-row justify-between h-20 items-center w-full px-4">
      <div className="flex flex-row items-center gap-x-4">
        <Image priority height={40} src={logo} alt="app logo" />
        <span className="text-white font-bold">FaceAssist</span>
      </div>
      <span>donate</span>
    </div>
  );
}
