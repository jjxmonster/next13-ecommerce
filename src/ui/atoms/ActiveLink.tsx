"use client";
import Link from "next/link";
import React, { type ReactNode, type FunctionComponent } from "react";
import clsx from "clsx";
import { type Route } from "next";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
	href: Route;
	children: ReactNode;
	exact?: boolean;
	activeClassName?: string;
	className?: string;
}

export const ActiveLink: FunctionComponent<ActiveLinkProps> = ({
	href,
	children,
	activeClassName = "!text-blue-600 border-b-2 border-blue-600",
	className = "flex h-full items-center justify-center px-4 py-2 text-gray-800 transition duration-300 ease-in-out hover:opacity-50",
	exact = true,
}) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
		>
			{children}
		</Link>
	);
};
