import { Product, ProductModel } from '../models/productModel';

type QueryType = { [key: string]: string | number | boolean | RegExp };

type SortOrder = 'ascending' | 'descending';

export interface SortType {
  createdAt?: SortOrder,
  viewCounter?: SortOrder,
}

export async function findProductsByQuery(query: QueryType, sort: SortType, limit: number): Promise<Product[]> {
  const mongodbSort: { createdAt?: number, viewCounter?: number } = {};
  if (sort.createdAt) {
    mongodbSort.createdAt = sort.createdAt === 'ascending' ? 1 : -1;
  }
  
  if (sort.viewCounter) {
    mongodbSort.viewCounter = sort.viewCounter === 'ascending' ? 1 : -1;
  }

  return await ProductModel.find(query)
    .sort(mongodbSort)
    .limit(limit);
}

export async function findProductById(productId: number): Promise<Product> {
  const product = await ProductModel.findOne({ _id: productId });

  if (product === null) {
    throw new Error(`Could not find a product with ID ${productId}`);
  }

  return product;
}
