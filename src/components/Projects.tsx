import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"; // shadcn/dialog 사용
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

const projects = [
  {
    title: "데이터 전처리 도구",
    subtitle: "Data Processing Tool",
    description:
      "C# WinForms 기반 데이터 전처리 GUI 툴입니다. 결측치 처리, 이상치 제거, 스케일링, 인코딩, 데이터 분할 기능을 포함하여 복잡한 데이터 작업을 단순화했습니다.",
    tech: ["C#", "WinForms"],
    image: "/image/DataProcessingTool.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/DataPreprocessingTool",
    readme: `
# 데이터 전처리 도구 (C# WinForms)

데이터 분석 및 머신러닝을 위한 전처리 과정을 직관적 UI로 쉽게 처리할 수 있도록 제작된 Windows Forms 기반의 데스크톱 애플리케이션입니다.

---
## 🛠 개발 기간
- 2025년 5월 / 총 2주일

## 🧑개발 인원
- 1명

---
## ⚙️ 개발환경 및 사용 패키지

- **개발 언어**: C#
- **플랫폼**: .NET Framework (Windows Forms)
- **IDE**: Visual Studio

- **CsvHelper**  
  CSV 파일 로딩 및 저장  
  👉 https://www.nuget.org/packages/CsvHelper

- **EPPlus**  
  Excel(.xlsx) 파일 읽기/쓰기  
  👉 https://www.nuget.org/packages/EPPlus

- **MathNet.Numerics**  
  평균, 표준편차, IQR 등 통계 계산  
  👉 https://www.nuget.org/packages/MathNet.Numerics
  
---
## ▶️ 실행 방법
📦 [다운로드](https://github.com/user-attachments/files/20218098/Release.zip) (압축 해제 후  DataPreprocessingTool.exe 파일 실행) 또는
1. Visual Studio에서 \`DataPreprocessingTool.sln\` 열기
2. \`F5\` 또는 \`디버깅 없이 시작(Ctrl+F5)\`로 실행
3. 상단 버튼을 통해 기능 사용
    
    `
  },
  {
    title: "웹 기반 갤러그 게임",
    subtitle: "Canvas Game Development",
    description:
      "Canvas와 JavaScript를 활용한 잠수함 테마의 슈팅 게임입니다. 다양한 적, 보스전, 사운드, UI 구성을 통해 클래식한 게임을 웹 기술로 재현했습니다.",
    tech: ["JavaScript", "HTML5", "Canvas"],
    image: "/image/DeepSeaInvaders.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/DeepSeaInvaders/",
    codeUrl: "https://github.com/hanseok0621/DeepSeaInvaders",
    readme: `dd`
  },
  {
    title: "영화 정보 웹사이트",
    subtitle: "Web Application",
    description:
      "TMDb API를 연동한 영화 정보 웹사이트입니다. 검색, 카테고리 필터, 페이지네이션을 지원하며, 사용자가 쉽게 영화 정보를 탐색할 수 있도록 구현했습니다.",
    tech: ["jQuery", "JavaScript", "REST API", "HTML", "CSS"],
    image: "/image/CineBox.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/CINEBOX/",
    codeUrl: "https://github.com/hanseok0621/CINEBOX",
    readme: `dd`
  },
  {
    title: "가상회사 HANSUNG 웹페이지",
    subtitle: "Static Website",
    description:
      "HTML과 CSS를 기반으로 제작한 가상회사 소개 웹페이지입니다. 깔끔한 디자인과 반응형 레이아웃을 통해 회사의 브랜드 이미지를 효과적으로 전달합니다.",
    tech: ["HTML", "CSS"],
    image: "/image/HANSUNG.jpg?height=400&width=600",
    projectUrl: "https://hanseok0621.github.io/HANSUNG/",
    codeUrl: "https://github.com/hanseok0621/HANSUNG",
    readme: `dd`
  },
  {
    title: "두더지 게임 애플리케이션",
    subtitle: "Mobile Game Development",
    description:
      "App Inventor를 활용하여 제작한 안드로이드 게임입니다. 게임플레이와 사용자 경험에 중점을 두어 개발했습니다.",
    tech: ["App Inventor"],
    image: "/image/MoleGame.jpg?height=400&width=600",
    projectUrl: "https://drive.google.com/file/d/1op5BIuE5MJT-_fJEFNyU7bdXSz4Ky6-p/view?usp=drive_link",
    codeUrl: "https://encouraging-helium-af7.notion.site/Mole-Game-1a076763e8c6805faeb0df658b474804?pvs=74",
    readme: `dd`
  },
  {
    title: "파이썬 데이터 시각화",
    subtitle: "Data Visualization",
    description:
      "Python을 활용한 제조 시스템 데이터 시각화 프로젝트입니다. 데이터를 직관적인 차트와 그래프로 변환하여 인사이트를 도출할 수 있도록 구현했습니다.",
    tech: ["Python", "Data Analysis"],
    image: "/image/Python.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/Python-Data-Visualization",
    readme: `dd`
  },
  {
    title: "포트폴리오",
    subtitle: "React Portfolio",
    description:
      "React와 TypeScript 기반으로 제작한 개인 포트폴리오입니다. 모던한 디자인과 반응형 레이아웃을 통해 개발 역량과 프로젝트를 소개합니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/image/Portfolio.jpg?height=400&width=600",
    codeUrl: "https://github.com/hanseok0621/portfolio",
    readme: `dd`
  },
]

const Projects = () => {
  type Project = {
  title: string;
  image: string;
  readme?: string;
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const markdown = selectedProject?.readme ?? "# 프로젝트 설명 없음";

  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 to-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-light text-stone-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-stone-300 to-stone-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            각각의 프로젝트는 저만의 이야기와 기술적 도전이 담긴 소중한 경험들입니다
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* 프로젝트 이미지 */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} group`}>
                <div
                  className="w-[90%] overflow-hidden shadow-2xl border-0 bg-white rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl cursor-pointer"
                  onClick={() => handleImageClick(project)}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full max-h-[400px] object-contain mx-auto"
                  />
                </div>
              </div>

              {/* 프로젝트 설명 */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-sans font-medium text-stone-800 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-stone-500 font-normal">{project.subtitle}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-stone-300 to-stone-500 rounded-full" />
                </div>

                <p className="text-stone-600 leading-relaxed text-lg max-w-prose">{project.description}</p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-stone-700 uppercase tracking-wider">사용 기술</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-stone-300 text-stone-600 hover:bg-stone-50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-stone-300 text-stone-700 hover:bg-stone-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      프로젝트 사이트
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-stone-300 text-stone-700 hover:bg-stone-50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      코드 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-3xl text-stone-600 hover:text-stone-900 z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
              
            </button>
          </DialogClose>
          <div className="prose max-w-none pr-16">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export { Projects }
