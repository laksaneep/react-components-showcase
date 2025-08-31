import { Clock, Code, Eye, FileText, Star, Zap } from "lucide-react";

export const CODE_PREVIEW_TABS = [
  { id: "preview", icon: Eye, label: "Live Preview" },
  { id: "props", icon: FileText, label: "Props" },
  { id: "code", icon: Code, label: "Source Code" },
] as const;

export const DIFFICULTIES_LEVEL = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
} as const;

export const DIFFICULTIES_LEVEL_CONFIG = {
  [DIFFICULTIES_LEVEL.EASY]: {
    icon: <Zap className="w-4 h-4 text-green-500" />,
    styles: "bg-green-100 text-green-700",
  },
  [DIFFICULTIES_LEVEL.MEDIUM]: {
    icon: <Clock className="w-4 h-4 text-yellow-500" />,
    styles: "bg-yellow-100 text-yellow-700",
  },
  [DIFFICULTIES_LEVEL.HARD]: {
    icon: <Star className="w-4 h-4 text-red-500" />,
    styles: "bg-red-100 text-red-700",
  },
} as const;

export const PROPS_TABS_TABLE_TITLE = [
  "Name",
  "Type",
  "Description",
  "Default Value",
] as const;
