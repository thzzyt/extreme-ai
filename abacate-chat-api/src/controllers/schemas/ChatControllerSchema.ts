import Joi from "joi";

// Schema definitions
export const StartChatSchema = Joi.object({
  message: Joi.string().required(),
  stream: Joi.boolean(),
}).xor("option", "message");

export const ContinueChatSchema = Joi.object({
  threadId: Joi.string().required(),
  message: Joi.string().required(),
  stream: Joi.boolean(),
});
