import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Slidebar";

type MainLayoutProps = {
    children: ReactNode
};

export default function MainLayout({ children }: MainLayoutProps){
    return (
        <div className="flex h-screen flex-col">
            <Header/>

            <div className="flex flex-1">
                <Sidebar/>

                <main className="flex-1  bg-slate-100 p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
