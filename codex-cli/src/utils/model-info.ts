export type ModelInfo = {
  /** The human-readable label for this model */
  label: string;
  /** The max context window size for this model */
  maxContextLength: number;
};

export type SupportedModelId = keyof typeof openAiModelInfo;
export const openAiModelInfo = {
  "o3": {
    label: "o3",
    maxContextLength: 200000,
  },
  "o4-mini": {
    label: "o4 Mini",
    maxContextLength: 200000,
  },
  "gpt-4.1": {
    label: "GPT-4.1",
    maxContextLength: 1000000,
  },
  "gpt-4.5-preview": {
    label: "GPT-4.5 Preview",
    maxContextLength: 128000,
  },
  "chatgpt-4o-latest": {
    label: "ChatGPT-4o Latest",
    maxContextLength: 128000,
  },
  "codex-mini-latest": {
    label: "codex-mini-latest",
    maxContextLength: 200000,
  },
  "local-model": {
    label: "Local Model",
    maxContextLength: 128000,
  },
} as const satisfies Record<string, ModelInfo>;