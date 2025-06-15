import TextArea from "@/app/components/MainInput";
import ButtonsLanguageSelect from "@/app/components/ButtonsLanguageSelect";
import { useRef, useState } from "react";
import { InitialChat } from "./InitialChat";
import { useChat } from "../hooks/use-chat";
import { ChatMessage } from "./ChatMessage";
import MainInput from "@/app/components/MainInput";

/**
 * Componente que renderiza tela principal e chat
 * @returns
 */
export function ChatInterfaceV2() {
  const {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    promptText,
    isFirstMessage,
    sendMessage,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (selectedPrompt: string) => {
    setInputValue(selectedPrompt);
  };

  const firstMessageComponent = () => {
    return (
      <div className="flex flex-col flex-1 gap-5 items-center justify-center">
        <InitialChat
          value={inputValue}
          onChange={setInputValue}
          onSubmit={sendMessage}
          isLoading={false}
        />
        <ButtonsLanguageSelect onSelect={handleLanguageSelect} />
      </div>
    );
  };

  const existingMessagesComponent = () => {
    return (
      <div className="flex flex-col h-full gap-3">
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <MainInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={sendMessage}
          isLoading={isLoading}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-1 w-full h-full">
      {isFirstMessage ? firstMessageComponent() : existingMessagesComponent()}
    </div>
  );
}
