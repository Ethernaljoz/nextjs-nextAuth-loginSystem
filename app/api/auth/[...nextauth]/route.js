import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/src/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcrypt'
import NextAuth from "next-auth/next";



export const authOptions={
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
          
          credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {

            if(!credentials?.email || !credentials?.password){
                throw new Error('please add all the fields')
            }

            const existUser = await prisma.user.findUnique({
                where:{
                    email: credentials.email
                }
            })

            if(!existUser && !existUser?.password){
                throw new Error('no user found')
            }

            const verifyPassword = await bcrypt.compare(credentials.password,existUser.password)

            if(!verifyPassword){
                throw new Error('password incorrect')
            }
            
            return existUser
          }
        })
      ],
      secret:process.env.SECRET,
      session:{
        strategy:'jwt'
      },
      debug: process.env.NODE_ENV === "development",

}

  const handler = NextAuth(authOptions)
  export {handler as GET, handler as POST}











