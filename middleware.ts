import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// protected routes
  
// public routes


export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};