import CodeBlock from "@/components/common/CodeBlock";
import { RegisteredComponent } from "@/types/components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeTabContent = ({ component }: { component: RegisteredComponent }) => (
  <div>
    <div className="rounded-lg overflow-hidden">
      <CodeBlock
        code={component?.sourceCode || "// Source code not available"}
        title="Component Implementation"
      />
    </div>
    <br />
    <h3 className="text-lg font-semibold mb-4 text-left text-foreground">
      Example Usages
    </h3>
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
        {component?.usageExamples || "// Source code not available"}
      </SyntaxHighlighter>
    </div>
  </div>
);

export default CodeTabContent;
