import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false); // 메뉴 클릭 시 자동 닫기
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-sans font-bold text-stone-800 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          김한석
        </h1>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollTo("home")}
            className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
          >
            Projects
          </button>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="메뉴 토글">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-4">
          <button
            onClick={() => handleNavClick("home")}
            className="block text-stone-600 hover:text-stone-900 font-medium w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="block text-stone-600 hover:text-stone-900 font-medium w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="block text-stone-600 hover:text-stone-900 font-medium w-full text-left"
          >
            Projects
          </button>
        </div>
      )}
    </header>
  );
};

export { Navbar };
