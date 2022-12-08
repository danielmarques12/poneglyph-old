import { getProviders } from 'next-auth/react'

import { protectedProcedure, publicProcedure, router } from '../trpc'

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
  getProviders: publicProcedure.query(async () => getProviders()),
})
