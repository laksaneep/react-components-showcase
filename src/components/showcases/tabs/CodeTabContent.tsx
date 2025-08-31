import { RegisteredComponent } from "@/types/components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeTabContent = ({ component }: { component: RegisteredComponent }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-foreground">
      Component Implementation
    </h3>
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
        {component?.sourceCode || "// Source code not available"}
      </SyntaxHighlighter>
    </div>
    <br />
    <h3 className="text-lg font-semibold mb-4 text-left text-foreground">
      Example Usages
    </h3>
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
        {component?.buttonUsageExamples || "// Source code not available"}
      </SyntaxHighlighter>
    </div>
  </div>
);

export default CodeTabContent;
