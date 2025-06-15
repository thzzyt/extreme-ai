# AbacatePay AI Assistant

A chatbot assistant designed to help users with AbacatePay-related queries and tasks.

## Project Overview

This project consists of two main components:

### Frontend (abacate-chat)
A web front-end built using NextJS.

#### How to run it

1. Update the env file to point to your API
2. 
```bash
cd abacate-chat
npm install
npm run dev
```

### Backend (abacate-chat-api)
An small API to communicate with [Itzam](https://itz.am) for AI interactions

#### How to run it

1. Update the env file with an `ITZAM API KEY`
  1. You might need to add prompts and knowledge to Itzam, they can be found on `abacate-chat-api/contexts`.
2. 
```bash
cd abacate-chat-api
npm install
npm run dev
```

## Project Links

- [UI/UX Designs](https://www.figma.com/design/ZFYV2Sbv6w0FZ4TfYJbogm/ChatUI?node-id=39-18140&p=f&t=6FZ8k9L1iRl0561Y-0)

## Contributing

We welcome contributions from the community! Here's how you can contribute:

1. **Find an Issue**
   - Browse through our [Issues](https://github.com/AbacatePay/abacate-chat/issues) page
   - Look for issues tagged with `good-first-issue` or something you want to help with
   - Comment on the issue you'd like to work on

2. **Fork and Clone**
  - Fork the repo using github
  - Clone and make your changes
   ```bash
   git clone https://github.com/AbacatePay/abacate-chat.git
   cd abacate-chat
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests when applicable

4. **Create a Pull Request**
   - Push your changes to your fork
   - Create a PR against the main branch
   - Include in your PR description:
     - What changes you made
     - Why you made these changes
     - How you tested the changes
     - Screenshots/logs showing the changes working
     - Any related issue numbers

5. **Code Review**
   - Wait for maintainers to review your PR
   - Make any requested changes
   - Once approved, your PR will be merged

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
