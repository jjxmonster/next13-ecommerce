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
    "query CategoryGetAll {\n  categories {\n    slug\n    name\n  }\n}": types.CategoryGetAllDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductPage\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  image\n  price\n  categories {\n    name\n    slug\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductPage on Product {\n  id\n  name\n  description\n  image\n  price\n  categories {\n    name\n    slug\n  }\n  product_color_variants {\n    name\n    slug\n  }\n  product_size_variants {\n    name\n    slug\n  }\n}": types.ProductPageFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $productsOffset: Int) {\n  category_products(slug: $slug, productsOffset: $productsOffset) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByKeyword($keyword: String!) {\n  products_by_keyword(keyword: $keyword) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByKeywordDocument,
    "query ProductsGetList($offset: Int) {\n  products(offset: $offset) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetSimilar($id: ID!, $category: String!) {\n  products_similar(productId: $id, category: $category) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSimilarDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetAll {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoryGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductPage\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  image\n  price\n  categories {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductPage on Product {\n  id\n  name\n  description\n  image\n  price\n  categories {\n    name\n    slug\n  }\n  product_color_variants {\n    name\n    slug\n  }\n  product_size_variants {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductPageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsOffset: Int) {\n  category_products(slug: $slug, productsOffset: $productsOffset) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByKeyword($keyword: String!) {\n  products_by_keyword(keyword: $keyword) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByKeywordDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($offset: Int) {\n  products(offset: $offset) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSimilar($id: ID!, $category: String!) {\n  products_similar(productId: $id, category: $category) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSimilarDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
