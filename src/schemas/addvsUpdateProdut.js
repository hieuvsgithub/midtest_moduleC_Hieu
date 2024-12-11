import * as z from "zod";
export const addvsUpdateSchema = z.object({
  title: z.string().trim().min(1, { message: "Không được để trống" }),
  price: z.string().trim().min(1, { message: "Không được để trống" }),
  description: z.string().trim(),
});
