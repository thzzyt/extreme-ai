import { JavaIcon } from "@icons/stack/java";
import JavaScriptIcon from "@icons/stack/javascript";
import { LovableIcon } from "@icons/stack/Lovable";
import { PhpIcon } from "@icons/stack/php";
import PythonIcon from "@icons/stack/python";
import { RubyIcon } from "@icons/stack/Ruby";

//Mock - posteriormente será substituído por uma API que retorna as linguagens disponíveis
// As linguagens são mockadas para fins de demonstração, mas em um cenário real, você poderia buscar essas informações de uma API ou banco de dados.
const languages = [
  { 
    code: "python", 
    label: "Python", 
    Icon: PythonIcon,
    prompt: "me ajude a integrar a AbacatePay usando Python"
  },
  { 
    code: "javascript", 
    label: "Javascript", 
    Icon: JavaScriptIcon,
    prompt: "me ajude a integrar a AbacatePay usando Javascript"
  },
  { 
    code: "lovable", 
    label: "Lovable", 
    Icon: LovableIcon,
    prompt: "me ajude a integrar a AbacatePay usando Lovable"
  },
  { 
    code: "php", 
    label: "PHP", 
    Icon: PhpIcon,
    prompt: "credo vc esta usando PHP! troca por Python ou Javascript, que vai da bom"
  },
  { 
    code: "ruby", 
    label: "Ruby", 
    Icon: RubyIcon,
    prompt: "me ajude a integrar a AbacatePay usando Ruby"
  },
  {
    code: "java",
    label: "Java",
    Icon: JavaIcon,
    prompt: "me ajude a integrar a AbacatePay usando Java"
  }
];

export default function ButtonsLanguageSelect({
  onSelect,
}: {
  onSelect: (prompt: string) => void;
}) {
  return (
    <div className="flex gap-4">
      {languages.map(({ code, label, Icon, prompt }) => (
        <button
          key={code}
          onClick={() => onSelect(prompt)}
          className="rounded-full border-zinc-200 border-1 text-black px-4 py-2 hover:bg-zinc-50 font-bold flex items-center gap-2"
        >
          <Icon />
          {label}
        </button>
      ))}
    </div>
  );
}