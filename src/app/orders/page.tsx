import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { getOrdersByEmail } from "@/api/orders";
import { OrdersTable } from "@/ui/molecules/OrdersTable";

export default async function OrdersPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0].emailAddress;

	if (!email) {
		return <div>User does not have an email</div>;
	}

	const orders = await getOrdersByEmail("kuba.tarabasz@wp.pl");

	if (!orders) {
		return <div>No orders...</div>;
	}

	return (
		<div className="w-full">
			<div className="flex flex-col gap-2">
				<ShoppingBag />
				<h1 className="text-2xl font-bold">MY ORDERS</h1>
			</div>

			<OrdersTable orders={orders} />
		</div>
	);
}
