import { Product, ProductModel } from '../models/productModel';

type QueryType = { [key: string]: string | number | boolean | RegExp };

type SortOrder = 'ascending' | 'descending';

export interface SortType {
  createdAt?: SortOrder;
  viewCounter?: SortOrder;
}

export async function findProductsByQuery(
  query: QueryType,
  sort: SortType,
  limit: number
): Promise<Product[]> {
  const mongodbSort: { createdAt?: number; viewCounter?: number } = {};
  if (sort.createdAt) {
    mongodbSort.createdAt = sort.createdAt === 'ascending' ? 1 : -1;
  }

  if (sort.viewCounter) {
    mongodbSort.viewCounter = sort.viewCounter === 'ascending' ? 1 : -1;
  }

  return await ProductModel.find(query).sort(mongodbSort).limit(limit);
}

export async function findProductById(productId: number): Promise<Product> {
  const product = await ProductModel.findOne({ _id: productId });

  if (product === null) {
    throw new Error(`Could not find a product with ID ${productId}`);
  }

  return product;
}

export async function storeProduct(input: Product): Promise<Product> {
  const { _id, ...changedFields } = input;

  if (_id !== undefined) {
    const product = await ProductModel.findOneAndUpdate(
      { _id },
      changedFields,
      { new: true }
    );

    if (product === null) {
      throw new Error(
        `Could not update product ${_id} because it was not found.`
      );
    }

    return product;
  }

  return await new ProductModel(changedFields).save();
}

export async function rejectProductById(productId: number): Promise<Product> {
  const product = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { state: 'rejected' },
    { new: true }
  );

  if (product === null) {
    throw new Error(
      `Could not reject product ${productId} because it was not found.`
    );
  }

  return product;
}

export async function publishProductById(productId: number): Promise<Product> {
  const product = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { state: 'published' },
    { new: true }
  );

  if (product === null) {
    throw new Error(
      `Could not publish product ${productId} because it was not found.`
    );
  }

  return product;
}

export async function unpublishProductById(
  productId: number
): Promise<Product> {
  const product = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { state: 'unpublished' },
    { new: true }
  );

  if (product === null) {
    throw new Error(
      `Could not unpublish product ${productId} because it was not found.`
    );
  }

  return product;
}

export async function scoreProductView(productId: number): Promise<Product> {
  const product = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { $inc: { viewCounter: 1 } }
  );

  if (product === null) {
    throw new Error(
      `Could not score view on product ${productId} because it was not found.`
    );
  }

  return product;
}

export async function deleteProductById(productId: number): Promise<void> {
  await ProductModel.findOneAndDelete({
    _id: productId,
  });
}
