import { z } from "zod";

export const SupportedLanguagesSchema = z.enum(["typescript", "java", "rust"]);

export type SupportedLanguages = z.infer<typeof SupportedLanguagesSchema>;
