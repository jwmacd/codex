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
  "o3-mini": {
    label: "o3 Mini",
    maxContextLength: 200000,
  },
  "o4-mini": {
    label: "o4 Mini",
    maxContextLength: 200000,
  },
  "o1": {
    label: "o1",
    maxContextLength: 128000,
  },
  "o1-mini": {
    label: "o1 Mini",
    maxContextLength: 128000,
  },
  "gpt-4.1": {
    label: "GPT-4.1",
    maxContextLength: 1000000,
  },
  "gpt-4.1-mini": {
    label: "GPT-4.1 Mini",
    maxContextLength: 1000000,
  },
  "gpt-4.1-nano": {
    label: "GPT-4.1 Nano",
    maxContextLength: 1000000,
  },
  "gpt-4o": {
    label: "GPT-4o",
    maxContextLength: 128000,
  },
  "gpt-4o-mini": {
    label: "GPT-4o Mini",
    maxContextLength: 128000,
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
} as const satisfies Record<string, ModelInfo>;