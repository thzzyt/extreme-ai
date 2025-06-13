export interface IChatModel {
  createThread(): Promise<string>;
  createChat(
    message: string,
    option: string
  ): Promise<{
    threadId: string;
    stream: AsyncGenerator<string, void, unknown>;
  }>;

  continueChat(
    threadId: string,
    message: string
  ): AsyncGenerator<string, void, unknown>;
}
