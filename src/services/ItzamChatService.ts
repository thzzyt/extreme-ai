import { IChatModel } from "../interfaces/IChatModel";
import Itzam from "itzam";

export class ItzamChatService implements IChatModel {
  private itzam: Itzam;
  private workflowSlug: string;

  constructor(itzam: Itzam, workflowSlug: string) {
    this.itzam = itzam;
    this.workflowSlug = workflowSlug;
  }

  async createChat(message: string, option: string) {
    const thread = await this.itzam.threads.create({
      workflowSlug: this.workflowSlug,
    });

    const messageResponse = await this.itzam.streamText({
      threadId: thread.id,
      input: message,
    });

    return {
      threadId: thread.id,
      stream: this.processStream(messageResponse.stream),
    };
  }

  async *continueChat(threadId: string, message: string) {
    const messageResponse = await this.itzam.streamText({
      threadId: threadId,
      input: message,
    });

    yield* this.processStream(messageResponse.stream);
  }

  async createThread() {
    const thread = await this.itzam.threads.create({
      workflowSlug: this.workflowSlug,
    });
    return thread.id;
  }

  private async *processStream(stream: AsyncGenerator<string, void, unknown>) {
    for await (const chunk of stream) {
      if (chunk === "text-delta") continue;
      yield chunk;
    }
  }
}
