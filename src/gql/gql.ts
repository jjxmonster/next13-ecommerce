/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $productId: ID!, $quantity: Int!, $size: String, $color: String) {\n  createOrderItem(\n    quantity: $quantity\n    size: $size\n    color: $color\n    orderId: $orderId\n    productId: $productId\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(total: 0) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartByGetId($id: ID!) {\n  order(id: $id, status: \"DRAFT\") {\n    ...Cart\n  }\n}": types.CartByGetIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    size\n    color\n    product {\n      image\n      id\n      name\n      description\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($id: ID!) {\n  deleteOrderItem(id: $id)\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(id: $itemId, quantity: $quantity) {\n    id\n    quantity\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoryGetAll {\n  categories {\n    slug\n    name\n  }\n}": types.CategoryGetAllDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}": types.CollectionGetBySlugDocument,
    "mutation OrderUpdateStatus($id: ID!, $status: String!) {\n  updateOrder(id: $id, status: $status) {\n    id\n    status\n  }\n}": types.OrderUpdateStatusDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductPage\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  image\n  price\n  weightedRating\n  categories {\n    name\n    slug\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductPage on Product {\n  id\n  name\n  description\n  image\n  price\n  weightedRating\n  categories {\n    name\n    slug\n  }\n  product_color_variants {\n    name\n    slug\n  }\n  product_size_variants {\n    name\n    slug\n  }\n}": types.ProductPageFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $productsOffset: Int) {\n  category_products(slug: $slug, productsOffset: $productsOffset) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collection_products(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByKeyword($keyword: String!) {\n  products_by_keyword(keyword: $keyword) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByKeywordDocument,
    "query ProductsGetList($offset: Int, $field: String, $order: String) {\n  products(offset: $offset, sortByField: $field, sortOrder: $order) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetSimilar($id: ID!, $category: String!) {\n  products_similar(productId: $id, category: $category) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSimilarDocument,
    "mutation ReviewAddForProduct($productId: String!, $rating: Int!, $content: String!, $title: String!, $email: String!, $name: String!) {\n  createReview(\n    title: $title\n    productId: $productId\n    rating: $rating\n    content: $content\n    email: $email\n    name: $name\n  ) {\n    id\n  }\n}": types.ReviewAddForProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!, $quantity: Int!, $size: String, $color: String) {\n  createOrderItem(\n    quantity: $quantity\n    size: $size\n    color: $color\n    orderId: $orderId\n    productId: $productId\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(total: 0) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartByGetId($id: ID!) {\n  order(id: $id, status: \"DRAFT\") {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartByGetIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    size\n    color\n    product {\n      image\n      id\n      name\n      description\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($id: ID!) {\n  deleteOrderItem(id: $id)\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(id: $itemId, quantity: $quantity) {\n    id\n    quantity\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetAll {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoryGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderUpdateStatus($id: ID!, $status: String!) {\n  updateOrder(id: $id, status: $status) {\n    id\n    status\n  }\n}"): typeof import('./graphql').OrderUpdateStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductPage\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  image\n  price\n  weightedRating\n  categories {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductPage on Product {\n  id\n  name\n  description\n  image\n  price\n  weightedRating\n  categories {\n    name\n    slug\n  }\n  product_color_variants {\n    name\n    slug\n  }\n  product_size_variants {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductPageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsOffset: Int) {\n  category_products(slug: $slug, productsOffset: $productsOffset) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collection_products(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByKeyword($keyword: String!) {\n  products_by_keyword(keyword: $keyword) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByKeywordDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($offset: Int, $field: String, $order: String) {\n  products(offset: $offset, sortByField: $field, sortOrder: $order) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSimilar($id: ID!, $category: String!) {\n  products_similar(productId: $id, category: $category) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSimilarDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewAddForProduct($productId: String!, $rating: Int!, $content: String!, $title: String!, $email: String!, $name: String!) {\n  createReview(\n    title: $title\n    productId: $productId\n    rating: $rating\n    content: $content\n    email: $email\n    name: $name\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewAddForProductDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
