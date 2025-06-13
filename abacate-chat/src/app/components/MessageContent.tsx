import { Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMarkdown } from "@/app/hooks/use-markdown";

interface MessageContentProps {
  content: string | null;
}

export const MessageContent = ({ content }: MessageContentProps) => {
  const { components } = useMarkdown();

  if (!content) {
    return <Loader2 className="animate-spin" />;
  }

  return (
    <div className="text-sm font-normal leading-relaxed break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
