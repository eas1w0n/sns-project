import { Link, Outlet } from "react-router";
import logo from '@/assets/logo.svg'
import { SunIcon } from "lucide-react";
import defaultAvater from "@/assets/default-avatar.png"

export default function GlobalLayout(){
  return(
    <div className="min-h-screen flex flex-col">
      <header className="h-15 border-b">
        <div className="flex justify-between h-full max-w-175 w-full m-auto px-4">
          <Link to={"/"} className="flex items-center gap-2">
          <img className="h-5" src={logo} alt="printLog()의 로고, 개발자 콘솔 커서 형태"/>
            <div className="font-bold">printLog()</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon/>
            </div>
            <img className="h-6" src={defaultAvater}/>
          </div>
        </div>
      </header>
      <main className="max-w-175 w-full m-auto px-4 py-6 border-x flex-1">
        <Outlet/>
      </main>
      <footer className="border-t py-10 text-muted-foreground text-center">@easy1</footer>
    </div>
  )
}