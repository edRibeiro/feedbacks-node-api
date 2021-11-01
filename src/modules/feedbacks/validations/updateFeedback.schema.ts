import { object, string } from "yup";

const updateFeedbackSchema = object({
  body: object({
    finalfeedback: string().required(),
    improvementpoints: string().required(),
    suggestions: string().required(),
    maintainpoints: string().required(),
  }),
  params: object({
    id: string().required(),
  }),
});

export default updateFeedbackSchema;
