import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { User } from "lucide-react";
import { ChatMessage as ChatMessageType } from "@/app/services/chatApi";
import { ChatLogo } from "./ChatLogo";
import { MessageContent } from "./MessageContent";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex gap-3 p-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback className={isUser ? "user-message-bg" : "bg-secondary"}>
          {isUser ? <User className="w-4 h-4" /> : <ChatLogo />}
        </AvatarFallback>
      </Avatar>

      <div
        className={`flex flex-col max-w-[80%] ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`px-4 py-2 rounded-2xl shadow-sm w-full overflow-hidden ${
            isUser
              ? "user-message-bg rounded-br-md"
              : "bot-message-bg border rounded-bl-md"
          }`}
        >
          <MessageContent content={message.content} />
        </div>

        <span className="text-xs text-muted-foreground mt-1 px-2">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};
