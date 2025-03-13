import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/moodToggle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="">
      <div className="p-3">
        <Header />
      </div>
      <div className="h-[800px]"></div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
