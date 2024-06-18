// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/signin',
        error: '/error',
        verifyRequest: '/verify-request',
        newUser: "/signup"
    },
});

export const config = { matcher: ["/employer/overview", "/employer/hiring"] };
