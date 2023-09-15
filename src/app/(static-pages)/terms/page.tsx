import React from "react";

const TermsPage = () => {
	return (
		<>
			<article className="rounded bg-white p-6 shadow-md">
				<h1 className="mb-6 text-3xl font-semibold">Terms and Conditions</h1>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">
						Section 1: General Provisions
					</h2>
					<p>
						<span className="font-bold">1. </span>This terms and conditions d
						ocument outlines the rules for using the services offered by the
						online store
					</p>
					<p>
						<span className="font-bold">2. </span>Using the website constitutes
						acceptance of these terms and conditions.
					</p>
					<p>
						<span className="font-bold">3. </span>The store reserves the right
						to change these terms and conditions. Changes take effect from the
						moment they are published on the store`s website.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">
						Section 2: Orders and Delivery
					</h2>
					<p>
						<span className="font-bold">1. </span>The store allows customers to
						make purchases through the website.
					</p>
					<p>
						<span className="font-bold">2. </span>The customer agrees to provide
						accurate contact and delivery information.
					</p>
					<p>
						<span className="font-bold">3. </span>Orders are processed based on
						product availability. The store reserves the right to refuse an
						order.
					</p>
					<p>
						<span className="font-bold">4. </span>Delivery costs are determined
						based on the chosen delivery method and destination.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">Section 3: Payments</h2>
					<p>
						<span className="font-bold">1. </span>The store accepts payments for
						products through various payment methods, such as credit card, bank
						transfer, electronic payments, etc.
					</p>
					<p>
						<span className="font-bold">2. </span>All payment information,
						including costs and payment deadlines, is provided on the store`s
						website.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">
						Section 4: Returns and Complaints
					</h2>
					<p>
						<span className="font-bold">1. </span>The customer has the right to
						return a purchased product within 14 days of delivery, in accordance
						with applicable consumer law.
					</p>
					<p>
						<span className="font-bold">2. </span>In the case of a product
						complaint, the customer should contact customer service, providing a
						description of the issue and order details.
					</p>
					<p>
						<span className="font-bold">3. </span>The store will address the
						complaint within 14 days of its notification.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-xl font-semibold">
						Section 5: Personal Data Protection
					</h2>
					<p>
						<span className="font-bold">1. </span>Customer personal data is
						processed in accordance with applicable data protection laws.
					</p>
					<p>
						<span className="font-bold">2. </span>The store ensures the
						confidentiality and security of customer data.
					</p>
				</section>

				<section>
					<h2 className="mb-4 text-xl font-semibold">
						Section 6: Final Provisions
					</h2>
					<p>
						<span className="font-bold">1. </span>Any disputes arising from the
						use of the online store`s services will be resolved by a court of
						competent jurisdiction under applicable law.
					</p>
					<p>
						<span className="font-bold">2. </span>This terms and conditions
						document is effective from <span className="italic">[date]</span>{" "}
						and is available on the store`s website.
					</p>
				</section>

				<p className="mt-6">Thank you for using our online store!</p>
			</article>
		</>
	);
};

export default TermsPage;
