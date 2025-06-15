import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"; // shadcn/dialog 사용
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/data/projects";

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
      
      {/* 모달창 */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-3xl text-stone-600 hover:text-stone-900 z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
              
            </button>
          </DialogClose>
            <div className="prose max-w-none pr-16">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export { Projects }
