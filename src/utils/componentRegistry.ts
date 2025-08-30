import { ComponentType } from "react";
import {
  ComponentRegistry,
  ComponentMetadata,
  RegisteredComponent,
} from "@/types/components";

// Component registry storage
const componentRegistry: ComponentRegistry = {};

// Function to register a component with metadata
export const registerComponent = (
  name: string,
  component: ComponentType<any>,
  metadata: ComponentMetadata
): void => {
  componentRegistry[name] = {
    component,
    ...metadata,
  };
};

// Get all registered components
export const getAllComponents = (): ComponentRegistry => componentRegistry;

// Get a specific component by name
export const getComponent = (name: string): RegisteredComponent | undefined => {
  return componentRegistry[name];
};

// Get components by category
export const getComponentsByCategory = (
  category: string
): ComponentRegistry => {
  return Object.fromEntries(
    Object.entries(componentRegistry).filter(
      ([, data]) => data.category === category
    )
  );
};

// Get components by difficulty
export const getComponentsByDifficulty = (
  difficulty: "Easy" | "Medium" | "Hard"
): ComponentRegistry => {
  return Object.fromEntries(
    Object.entries(componentRegistry).filter(
      ([, data]) => data.difficulty === difficulty
    )
  );
};

// Search components
export const searchComponents = (query: string): ComponentRegistry => {
  const lowercaseQuery = query.toLowerCase();
  return Object.fromEntries(
    Object.entries(componentRegistry).filter(
      ([name, data]) =>
        name.toLowerCase().includes(lowercaseQuery) ||
        data.title.toLowerCase().includes(lowercaseQuery) ||
        data.description.toLowerCase().includes(lowercaseQuery) ||
        data.category.toLowerCase().includes(lowercaseQuery) ||
        data.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    )
  );
};
