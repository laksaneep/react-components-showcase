import { ComponentType } from "react";

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
}

export interface ComponentMetadata {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  defaultProps?: Record<string, any>;
  props: ComponentProp[];
  sourceCode: string;
  examples: string;
  tags?: string[];
  version?: string;
  author?: string;
}

export interface RegisteredComponent extends ComponentMetadata {
  component: ComponentType<any>;
}

export interface ComponentRegistry {
  [key: string]: RegisteredComponent;
}
