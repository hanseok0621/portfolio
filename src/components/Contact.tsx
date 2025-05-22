import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-muted-foreground mb-8">아래 폼을 통해 메시지를 남기거나 이메일로 연락주세요.</p>

      <form
        className="max-w-xl mx-auto space-y-4 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          alert("연락 폼은 데모입니다 ✉️");
        }}
      >
        <Input type="text" placeholder="이름" required />
        <Input type="email" placeholder="이메일" required />
        <Textarea placeholder="메시지를 입력하세요..." rows={5} required />
        <Button type="submit" className="w-full">보내기</Button>
      </form>
    </section>
  );
};

export { Contact };
