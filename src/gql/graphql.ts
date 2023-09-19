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
};

export type Mutation = {
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createProduct?: Maybe<Product>;
  deleteOrder?: Maybe<Scalars['ID']['output']>;
  deleteOrderItem?: Maybe<Scalars['ID']['output']>;
  deleteProduct?: Maybe<Product>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateOrderArgs = {
  status: Status;
  total: Scalars['Int']['input'];
};


export type MutationCreateOrderItemArgs = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID']['input'];
  status: Status;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  input: ProductInput;
};

export type Order = {
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  status: Status;
  total: Scalars['Int']['output'];
};

export type OrderItem = {
  id: Scalars['ID']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type ProductInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type Query = {
  categories: Array<Category>;
  category_products?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  order_item?: Maybe<OrderItem>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryCategory_ProductsArgs = {
  productsOffset?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrder_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Status =
  | 'CANCELED'
  | 'DELIVERED'
  | 'PENDING'
  | 'PROCESSING'
  | 'SHIPPED';

export type CategoryGetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryGetAllQuery = { categories: Array<{ slug: string, name: string }> };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, image: string, price: number, categories: Array<{ name: string }> } | null };

export type ProductListItemFragment = { id: string, name: string, description: string, image: string, price: number, categories: Array<{ name: string }> };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsOffset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByCategorySlugQuery = { category_products?: { products: Array<{ id: string, name: string, description: string, image: string, price: number, categories: Array<{ name: string }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, name: string, description: string, image: string, price: number, categories: Array<{ name: string }> }> };

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
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  categories {
    name
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CategoryGetAllDocument = new TypedDocumentString(`
    query CategoryGetAll {
  categories {
    slug
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetAllQuery, CategoryGetAllQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  categories {
    name
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
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($offset: Int) {
  products(offset: $offset) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  image
  price
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;