import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		RegExp("/categories(.*)"),
		RegExp("/collections"),
		RegExp("/collections(.*)"),
		"/products",
		RegExp("/products(.*)"),
	],
	ignoredRoutes: ["api/webhook/stripe"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
