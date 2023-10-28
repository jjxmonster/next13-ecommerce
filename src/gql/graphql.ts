/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Mutation = {
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createReview?: Maybe<Review>;
  deleteOrderItem?: Maybe<Scalars['ID']['output']>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
};


export type MutationCreateOrderArgs = {
  total: Scalars['Int']['input'];
};


export type MutationCreateOrderItemArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateReviewArgs = {
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Order = {
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  status?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type OrderItem = {
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
  size: Scalars['String']['output'];
};

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  product_color_variants: Array<Maybe<ProductColorVariant>>;
  product_size_variants: Array<Maybe<ProductSizeVariant>>;
  slug: Scalars['String']['output'];
  weightedRating: Scalars['Int']['output'];
};

export type ProductColorVariant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ProductSizeVariant = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Query = {
  categories: Array<Category>;
  category?: Maybe<Category>;
  category_products?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collection_products?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  orders: Array<Maybe<Order>>;
  product?: Maybe<Product>;
  products: Array<Product>;
  products_by_keyword: Array<Product>;
  products_similar: Array<Product>;
  reviews: Array<Review>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCategory_ProductsArgs = {
  productsOffset?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollection_ProductsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortByField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProducts_By_KeywordArgs = {
  keyword: Scalars['String']['input'];
};


export type QueryProducts_SimilarArgs = {
  category: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
};


export type QueryReviewsArgs = {
  productId: Scalars['ID']['input'];
};

export type Review = {
  content: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product: Product;
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type CartAddProductMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
}>;


export type CartAddProductMutation = { createOrderItem?: { id: string } | null };

export type CartCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartCreateMutation = { createOrder?: { id: string, orderItems: Array<{ id: string, quantity: number, size: string, color: string, product: { image: string, id: string, name: string, description: string, price: number } }> } | null };

export type CartByGetIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartByGetIdQuery = { order?: { id: string, orderItems: Array<{ id: string, quantity: number, size: string, color: string, product: { image: string, id: string, name: string, description: string, price: number } }> } | null };

export type CartFragment = { id: string, orderItems: Array<{ id: string, quantity: number, size: string, color: string, product: { image: string, id: string, name: string, description: string, price: number } }> };

export type CartRemoveProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { deleteOrderItem?: string | null };

export type CartSetProductQuantityMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { updateOrderItem?: { id: string, quantity: number } | null };

export type CategoryGetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetAllQuery = { categories: Array<{ slug: string, name: string }> };

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugQuery = { category?: { name: string } | null };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collection?: { name: string } | null };

export type OrderUpdateStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type OrderUpdateStatusMutation = { updateOrder?: { id: string, status?: string | null } | null };

export type OrdersGetByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type OrdersGetByEmailQuery = { orders: Array<{ id: string, status?: string | null, total: number, orderItems: Array<{ quantity: number, size: string, color: string, product: { name: string, price: number } }> } | null> };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }>, product_color_variants: Array<{ name: string, slug: string } | null>, product_size_variants: Array<{ name: string, slug: string } | null> } | null };

export type ProductListItemFragment = { id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> };

export type ProductPageFragment = { id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }>, product_color_variants: Array<{ name: string, slug: string } | null>, product_size_variants: Array<{ name: string, slug: string } | null> };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsOffset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByCategorySlugQuery = { category_products?: { products: Array<{ id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> }> } | null };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCollectionSlugQuery = { collection_products?: { products: Array<{ id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> }> } | null };

export type ProductsGetByKeywordQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type ProductsGetByKeywordQuery = { products_by_keyword: Array<{ id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> }> };

export type ProductsGetListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> }> };

export type ProductsGetSimilarQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  category: Scalars['String']['input'];
}>;


export type ProductsGetSimilarQuery = { products_similar: Array<{ id: string, name: string, description: string, image: string, price: number, weightedRating: number, categories: Array<{ name: string, slug: string }> }> };

export type ReviewAddForProductMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type ReviewAddForProductMutation = { createReview?: { id: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    size
    color
    product {
      image
      id
      name
      description
      price
    }
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductPageFragmentDoc = new TypedDocumentString(`
    fragment ProductPage on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
  product_color_variants {
    name
    slug
  }
  product_size_variants {
    name
    slug
  }
}
    `, {"fragmentName":"ProductPage"}) as unknown as TypedDocumentString<ProductPageFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($orderId: ID!, $productId: ID!, $quantity: Int!, $size: String, $color: String) {
  createOrderItem(
    quantity: $quantity
    size: $size
    color: $color
    orderId: $orderId
    productId: $productId
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  createOrder(total: 0) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    size
    color
    product {
      image
      id
      name
      description
      price
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartByGetIdDocument = new TypedDocumentString(`
    query CartByGetId($id: ID!) {
  order(id: $id, status: "DRAFT") {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    size
    color
    product {
      image
      id
      name
      description
      price
    }
  }
}`) as unknown as TypedDocumentString<CartByGetIdQuery, CartByGetIdQueryVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation CartRemoveProduct($id: ID!) {
  deleteOrderItem(id: $id)
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {
  updateOrderItem(id: $itemId, quantity: $quantity) {
    id
    quantity
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const CategoryGetAllDocument = new TypedDocumentString(`
    query CategoryGetAll {
  categories {
    slug
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetAllQuery, CategoryGetAllQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  category(slug: $slug) {
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collection(slug: $slug) {
    name
  }
}
    `) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const OrderUpdateStatusDocument = new TypedDocumentString(`
    mutation OrderUpdateStatus($id: ID!, $status: String!, $email: String) {
  updateOrder(id: $id, status: $status, email: $email) {
    id
    status
  }
}
    `) as unknown as TypedDocumentString<OrderUpdateStatusMutation, OrderUpdateStatusMutationVariables>;
export const OrdersGetByEmailDocument = new TypedDocumentString(`
    query OrdersGetByEmail($email: String!) {
  orders(email: $email) {
    id
    status
    total
    orderItems {
      quantity
      size
      color
      product {
        name
        price
      }
    }
  }
}
    `) as unknown as TypedDocumentString<OrdersGetByEmailQuery, OrdersGetByEmailQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductPage
  }
}
    fragment ProductPage on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
  product_color_variants {
    name
    slug
  }
  product_size_variants {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String!, $productsOffset: Int) {
  category_products(slug: $slug, productsOffset: $productsOffset) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($slug: String!) {
  collection_products(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductsGetByKeywordDocument = new TypedDocumentString(`
    query ProductsGetByKeyword($keyword: String!) {
  products_by_keyword(keyword: $keyword) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByKeywordQuery, ProductsGetByKeywordQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($offset: Int, $field: String, $order: String) {
  products(offset: $offset, sortByField: $field, sortOrder: $order) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetSimilarDocument = new TypedDocumentString(`
    query ProductsGetSimilar($id: ID!, $category: String!) {
  products_similar(productId: $id, category: $category) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  weightedRating
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetSimilarQuery, ProductsGetSimilarQueryVariables>;
export const ReviewAddForProductDocument = new TypedDocumentString(`
    mutation ReviewAddForProduct($productId: String!, $rating: Int!, $content: String!, $title: String!, $email: String!, $name: String!) {
  createReview(
    title: $title
    productId: $productId
    rating: $rating
    content: $content
    email: $email
    name: $name
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewAddForProductMutation, ReviewAddForProductMutationVariables>;