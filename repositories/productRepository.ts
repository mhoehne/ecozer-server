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
