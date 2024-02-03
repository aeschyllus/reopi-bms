import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // TODO: integrate to actual endpoint
        const user = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/",
        )
          .then((res) => res.json())
          .then((data) => data);

        if (credentials?.email === user.email) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "auth/signin",
  },
};
