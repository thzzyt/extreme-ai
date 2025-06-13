import { Highlight } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language?: string;
  isInline?: boolean;
}

export const CodeBlock = ({
  code,
  language = "text",
  isInline,
}: CodeBlockProps) => {
  if (isInline) {
    return (
      <code className="bg-background/50 px-1 rounded text-black dark:text-white whitespace-nowrap">
        {code}
      </code>
    );
  }

  return (
    <Highlight code={code.replace(/\n$/, "")} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <code className="block text-black dark:text-white overflow-x-auto">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};
