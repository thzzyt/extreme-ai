export class RateLimitedStream {
  private intervalMs: number;
  private buffer: string;
  private lastSentTime: number;

  constructor(wordsPerSecond: number = 3) {
    this.intervalMs = 1000 / wordsPerSecond;
    this.buffer = "";
    this.lastSentTime = Date.now();
  }

  async *process(
    stream: AsyncGenerator<string, void, unknown>
  ): AsyncGenerator<string, void, unknown> {
    for await (const chunk of stream) {
      this.buffer += chunk;

      // Split by whitespace but preserve newlines and tabs
      const tokens = this.buffer.split(/([^\S\n\t]+|\n|\t)/);

      while (tokens.length > 2) {
        // Keep last token and its potential separator
        const timeSinceLastSend = Date.now() - this.lastSentTime;
        if (timeSinceLastSend < this.intervalMs) {
          await new Promise((resolve) =>
            setTimeout(resolve, this.intervalMs - timeSinceLastSend)
          );
        }

        const token = tokens.shift()!; // Get the word/special char
        const separator = tokens.shift()!; // Get the separator
        yield token + separator;
        this.lastSentTime = Date.now();
      }

      this.buffer = tokens.join("");
    }

    // Send remaining content
    if (this.buffer) {
      yield this.buffer;
    }
  }
}
