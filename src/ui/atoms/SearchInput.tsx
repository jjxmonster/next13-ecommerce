"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, useEffect, useRef } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const timeoutId = useRef<ReturnType<typeof setInterval>>();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		timeoutId.current = setTimeout(() => {
			searchQuery.length && router.replace(`/search?query=${searchQuery}`);
		}, 500);

		return () => {
			clearTimeout(timeoutId.current);
		};
	}, [searchQuery, router]);

	return (
		<div className="relative">
			<input
				onChange={handleChange}
				className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 px-3 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-blue-600 focus:outline-none focus:ring-purple-600"
				type="search"
				role="searchbox"
				placeholder="Search..."
			/>
			<div className="absolute inset-y-0 right-0 flex items-center"></div>

			<div className="absolute inset-y-0 left-0 flex items-center px-2">
				<SearchIcon color="gray" />
			</div>
		</div>
	);
};
