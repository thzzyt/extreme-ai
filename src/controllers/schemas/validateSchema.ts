import Joi from "joi";
import { Request, Response, RequestHandler, NextFunction } from "express";

// Validation middleware factory
export const validateSchema = (schema: Joi.ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      res.status(400).json({
        error: "Validation error",
        details: error.details.map((detail) => detail.message),
      });
      return;
    }

    req.body = value;
    next();
  };
};
