import * as z from 'zod';
export const UserInfoSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .email({ message: 'Is not a valid Email' }),
  password: z.string({ required_error: 'Password is required' }),
});

export type UserInfo = z.infer<typeof UserInfoSchema>;
