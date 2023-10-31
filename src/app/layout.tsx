import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/molecules/Footer";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Shop - Next13 E-Commerce",
	description: "",
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} flex min-h-screen flex-col`}>
					<Header />
					<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col items-center px-8 sm:px-6 lg:max-w-7xl">
						{children}
					</section>
					<Footer />
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
