// src/components/About.tsx

import { User, Monitor } from 'lucide-react';

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "C",
  "C++",
  "C#",
  ".NET",
  "WinForms",
  "Git",
  "SQL"
];

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-light text-stone-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-stone-300 to-stone-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            <strong>산업경영공학</strong>을 전공하며 <strong>산업 공정</strong> 전반과 <strong>제조업</strong>의 생산 시스템을 학습하였고,  
            이를 통해 <strong>제조 시스템</strong> 구현에 필요한 다양한 기술적 요소들에 관심을 가지게 되었습니다.
            <br /><br />
            특히 <strong>스마트팩토리</strong> 분야에 깊은 흥미가 있으며,
            저의 목표는 산업 공정에 대한 지식과 개발 역량을 융합하여 
            <strong className="text-stone-800"> 기술 발전</strong>에 기여하는 것입니다.
            <br /><br />
            다양한 프로젝트를 통해 <strong>프론트엔드</strong>와 <strong>백엔드</strong> 개발 경험을 쌓았고,  
            새로운 기술을 익히고 이를 실제 프로젝트에 적용하는 과정에서 성취감을 느낍니다.
            <br /><br />
            앞으로도 <strong>산업 현장의 문제를 소프트웨어로 해결</strong>할 수 있는 개발자가 되기 위해  
            꾸준히 배우고 성장해 나가겠습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 text-stone-600" />
              <h3 className="text-2xl font-sans font-medium text-stone-800">개발 철학</h3>
            </div>
            <p className="text-stone-600 leading-relaxed">
              개발을 C언어로 시작하며 컴퓨터의 작동 원리와 메모리 구조를 이해하는 데 집중했습니다.<br />
              이 경험은 논리적 사고와 구조적인 개발 습관의 기반이 되었습니다.<br />
              지금도 명확하고 유지 보수 가능한 코드를 중요하게 여기며, 기본에 충실한 개발을 지향하고 있습니다.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Monitor className="w-6 h-6 text-stone-600" />
              <h3 className="text-2xl font-sans font-medium text-stone-800">기술 스택</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
