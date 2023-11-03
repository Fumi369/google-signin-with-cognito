import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER ?? "",
      checks: "nonce",
    }),
  ],
  callbacks: {
    session: async ({ session, token, ...other }) => {
      console.log("token:", token);

      return {
        ...session,
        user: {
          id: token.sub,
          name: token.name,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };