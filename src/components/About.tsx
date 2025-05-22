const skills = [
  "TypeScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "C#",
  ".NET",
  "WinForms",
  "Git",
  "SQL"
];

const About = () => {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
        저는 지속적으로 배우고 성장하는 개발자입니다. <br />직관적인 사용자 경험을 위한 UI 개발과 로직 구현 모두에 흥미를 느끼며, 다양한 기술을 익히고 프로젝트에 적용해 왔습니다.
      </p>
      <h3 className="text-xl font-semibold mb-2">기술 스택</h3>
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border border-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export { About };
