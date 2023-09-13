export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	console.log(params);
	return <article></article>;
}
