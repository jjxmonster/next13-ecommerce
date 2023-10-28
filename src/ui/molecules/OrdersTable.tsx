import type { Order } from "@/gql/graphql";

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
	return (
		<table className="mt-10 w-full">
			<thead>
				<tr className="grid grid-cols-3 px-3 py-5 shadow-md">
					<th className="text-start text-sm uppercase text-gray-500">ID</th>
					<th className="text-start text-sm uppercase text-gray-500">Status</th>
					<th className="text-start text-sm uppercase text-gray-500">Total</th>
					{/* <th>Date</th> */}
				</tr>
			</thead>
			<tbody>
				{orders.map((order) => {
					return (
						<tr className="grid grid-cols-3 px-3 py-5 shadow-md" key={order.id}>
							<td>{order.id}</td>
							<td>{order.status}</td>
							<td>{order.total}</td>
							{/* <td></td> */}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
