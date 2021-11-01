import { object, string } from "yup";

const createFeedbackSchema = object({
  body: object({
    user: string().required(),
    finalfeedback: string().required(),
    improvementpoints: string().required(),
    suggestions: string().required(),
    maintainpoints: string().required(),
  }),
});

export default createFeedbackSchema;
