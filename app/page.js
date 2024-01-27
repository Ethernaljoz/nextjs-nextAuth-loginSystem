import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full h-full flex justify-center items-center gap-8 py-[20%] m-auto">
      <button className="px-7 py-2 bg-blue-500 text-white shadow-sm  rounded-md"><Link href='/register'>Register</Link></button>
      <button className="px-9 py-2 bg-blue-500 text-white shadow-sm  rounded-md"><Link href='/login'>Login</Link></button>
      
    </div>
  );
}
