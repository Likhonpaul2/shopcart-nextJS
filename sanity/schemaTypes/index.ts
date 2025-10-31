import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { authorType } from './authorType'
import { blockCategoryType } from './blockCategoryType'
import { blockContentType } from './blockContentType'
import { blogType } from './blockType'
import { brandType } from './brandTypes'
import { orderType } from './orderType'
import { productType } from './productType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,addressType,authorType,blockCategoryType,blockContentType,blogType,brandType,orderType,productType ],
}
