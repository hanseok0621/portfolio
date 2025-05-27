// src/components/Home.tsx

import { Button } from "@/components/ui/button";
import { Github, Mail, Code, ArrowDown } from 'lucide-react';
import { toast } from "sonner";

const Home = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hanseok0621@gmail.com");
    toast("이메일 복사 완료", {
      description: "클립보드에 복사되었습니다.",
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-neutral-100 to-gray-100" />
      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-sans font-light text-stone-800 leading-tight">
            김한석
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-stone-300 to-stone-500 mx-auto rounded-full" />
          <p className="text-2xl md:text-3xl font-light text-stone-600 leading-relaxed">
            Full-Stack Developer
          </p>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            직관적이고 깔끔한 UI를 만드는 것을 좋아하며,
            <br />
            웹 기술을 통해 사용자에게 가치를 전달하는 것을 추구합니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-full font-medium flex items-center cursor-pointer"
          >
            <Code className="w-4 h-4 mr-2" />프로젝트 보러가기
          </Button>

          <a
            href="https://github.com/hanseok0621"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 transition cursor-pointer"
          >
            <Mail className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <ArrowDown className="w-6 h-6 text-stone-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export { Home };
