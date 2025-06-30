import { ChatLogo } from "./ChatLogo";

export function ChatBrand() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <ChatLogo />
        <div>
          <h2 className="text-xl font-semibold text-foreground">Abacatinho</h2>
          <p className="text-sm text-muted-foreground">
            O assistente virtual da abacate
          </p>
        </div>
      </div>
    </div>
  );
}
