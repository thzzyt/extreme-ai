"use client";

import { ChatBrand } from "./components/ChatBrand";
import { ChatInterface } from "./components/ChatInterface";
import { useIsMobile } from "./hooks/use-mobile";

const Index = () => {
  const ismobile = useIsMobile();
  return (
    <div className="bg-white h-screen h-screen">
      <div className="flex flex-col items-center h-full relative z-10">
        {ismobile ? (
          <div className="z-10 mt-3 mb-1">
            <ChatBrand />
          </div>
        ) : null}
        <div className="w-full max-w-3xl flex flex-col flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
      {!ismobile ? (
        <div className="absolute bottom-4 left-4 z-10">
          <ChatBrand />
        </div>
      ) : null}
      <img
        src={"/catarro.svg"}
        width={400}
        height={400}
        className="absolute top-0 left-0 rotate-180"
      />
    </div>
  );
};

export default Index;
