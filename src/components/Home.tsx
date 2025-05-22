import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight leading-tight sm:text-5xl">
        안녕하세요 👋<br />프론트엔드 개발자 <span className="text-blue-600">김한석</span>입니다.
      </h1>
      <p className="text-muted-foreground max-w-xl text-lg">
        직관적이고 깔끔한 UI를 만드는 것을 좋아하며,<br />웹 기술을 통해 사용자에게 가치를 전달하는 것을 추구합니다.
      </p>
      <div className="flex gap-4 mt-4">
        <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          프로젝트 보러가기
        </Button>
        <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          연락하기
        </Button>
      </div>
    </section>
  );
};

export { Home };