import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import ZoomProvider from 'next-auth/providers/zoom';
import LinkedinProvider from 'next-auth/providers/linkedin';


export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        ZoomProvider({
            clientId: process.env.ZOOM_CLIENT_ID ?? '',
            clientSecret: process.env.ZOOM_CLIENT_SECRET ?? '',
        }),
        LinkedinProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "enter email"},
                password: { label: "Password", type: "password", placeholder: "enter email"}
            },
            async authorize(credentials) {
                const user = { id: '1', name: 'J Smith', email: 'email', password: 'password', role:"employer"};
                if(credentials?.email === user.email && credentials.password === user.password){
                    return user;
                }
                else {
                    return null;
                }
            }
        })
    ],
    pages:{
        signIn: '/signin',
        error: '/error',
        verifyRequest: '/verify-request',
        newUser: "/signup"
    },
    
}