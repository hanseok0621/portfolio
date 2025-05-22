import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "데이터 전처리 도구",
    description: "C# WinForms 기반 데이터 전처리 GUI 툴. 결측치 처리, 이상치 제거, 스케일링, 인코딩, 데이터 분할 기능 포함.",
    tech: ["C#", "WinForms", "EPPlus", "CsvHelper", "MathNet"]
  },
  {
    title: "웹 기반 갤러그 게임",
    description: "Canvas + JS 기반 잠수함 테마 슈팅 게임. 다양한 적 AI, 보스전, 사운드, UI 구성.",
    tech: ["JavaScript", "HTML5 Canvas", "Web Audio"]
  },
  {
    title: "TMDb 영화 정보 웹사이트",
    description: "TMDb API 연동한 영화 정보 목록 웹 앱. 검색, 카테고리 필터, 페이지네이션 지원.",
    tech: ["React", "TMDb API", "CSS"]
  },
  {
    title: "TMDb 영화 정보 웹사이트",
    description: "TMDb API 연동한 영화 정보 목록 웹 앱. 검색, 카테고리 필터, 페이지네이션 지원.",
    tech: ["React", "TMDb API", "CSS"]
  }
];

const Projects = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border rounded-full text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { Projects };
