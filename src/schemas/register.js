import * as z from "zod";
export const registerSchema = z.object({
  name: z.string().trim().min(1, { message: "Không được để trống" }),
  email: z.string().trim().min(1, { message: "Không được để trống" }),
  password: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
});
