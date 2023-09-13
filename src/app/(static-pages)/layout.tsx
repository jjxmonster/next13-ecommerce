export default function StaticPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="min-h-4xl mx-auto p-8">{children}</div>;
}
