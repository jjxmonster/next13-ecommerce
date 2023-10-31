import { TableHeadCell } from "../atoms/TableHeadCell";
import { formatCurrency } from "@/utils";
import type { CartFragment } from "@/gql/graphql";

export const OrdersTable = ({ orders }: { orders: CartFragment[] }) => {
	return (
		<table className="mt-10 w-full shadow-md">
			<thead>
				<tr className="grid grid-cols-3 border border-gray-200 px-3 py-5">
					<TableHeadCell text="Order ID" />
					<TableHeadCell text="Status" />
					<TableHeadCell text="Total" />
				</tr>
			</thead>
			<tbody>
				{orders.map((order) => {
					return (
						<tr className="grid grid-cols-3 px-3 py-5 shadow-md" key={order.id}>
							<td>{order.id}</td>
							<td>{order.status}</td>
							<td>{formatCurrency(order.total)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
