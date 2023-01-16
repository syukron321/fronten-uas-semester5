import NextAuth from "next-auth/next";
import CredentialsProvider  from 'next-auth/providers/credentials';
import { signIn } from '../../../services/auth';


export default NextAuth({
    // konfigurasi  provider autentikasi 
    providers: [
        CredentialsProvider({
            name:'Sign in with Email',
            credentials:{
                email:{ label: 'Email', type:'text'},
                password:{ label: 'Password', type:'password'},
            },
            async authorize(credentials, req){
                //cek user apakah terautentikasi atau tidak
                if(credentials == null) return null;

                try{
                    const { user, jwt}= await signIn({
                        email: credentials.email,
                        password: credentials.password,
                    });
                    return{ ...user, jwt};
                }catch(error){
                    //sign in fail
                    return null
                }
            },
        }),

    ],
    session:{maxAge : 10 * 60},// 2 menit
    callbacks:{
        session: async({session, token})=> {
            session.id = token.id;
            session.jwt= token.jwt;
            return Promise.resolve(session);
        },
        jwt: async({token, user})=> {
            const isSignIn= user ? true: false;
            if (isSignIn){
                token.id= user.id;
                token.jwt= user.jwt;
            }
            return Promise.resolve(token)
        }
    }

})