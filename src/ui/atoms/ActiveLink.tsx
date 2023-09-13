"use client";
import Link from "next/link";
import React, { type ReactNode, type FunctionComponent } from "react";
import clsx from "clsx";
import { type Route } from "next";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
	href: Route;
	children: ReactNode;
	activeClassName: string;
	className: string;
}

export const ActiveLink: FunctionComponent<ActiveLinkProps> = ({
	href,
	children,
	activeClassName,
	className,
}) => {
	const pathname = usePathname();
	const isActive = href === pathname;
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
