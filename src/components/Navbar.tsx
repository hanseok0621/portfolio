import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">김한석</h1>
        <nav className="space-x-2">
          <Button variant="ghost" onClick={() => scrollTo("home")}>Home</Button>
          <Button variant="ghost" onClick={() => scrollTo("about")}>About</Button>
          <Button variant="ghost" onClick={() => scrollTo("projects")}>Projects</Button>
          <Button variant="ghost" onClick={() => scrollTo("contact")}>Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
