import { type FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { SupportedLanguagesSchema } from "../utils/types/language-supported.ts";
import { match } from "assert";

export const checkLanguage: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/check/:language",
    {
      schema: {
        params: z.object({
          language: SupportedLanguagesSchema,
        }),
        body: z.object({
          snippet: z.string(),
        }),
      },
    },
    async (req, res) => {
      const { language } = req.params;
      const { snippet } = req.body;
      switch (language) {
        case "typescript": {
          res.status(200).send("typescript");
          break;
        }
        case "java":
          res.status(200).send("java");
          break;
        case "rust":
          res.status(200).send("rust");
          break;
        default:
          res.status(200).send("default");
          break;
      }
    }
  );
};
