import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/categories",
		"/categories/(.*)",
		"/collections",
		"/collections/(.*)",
		"/products",
		"/products/(.*)",
	],
	// ignoredRoutes: ["api/webhook/stripe"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
