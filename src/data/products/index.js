import { productData as JP_CA1210 } from './JP-CA1210'
import { productData as PR_L202 } from './PR-L202'
import { productData as PR_L208 } from './PR-L208'
import { productData as PR_L223 } from './PR-L223'
import { productData as PR_L241 } from './PR-L241'
import { productData as JP_CA10 } from './JP-CA10'
import { productData as JP_CU038 } from './JP-CU038'
import { productData as JP_801_108P } from './JP-801-108P'
import { productData as JP_801_82P } from './JP-801-82P'
import { productData as JP_801_82A } from './JP-801-82A'
import { productData as JP_801_77A } from './JP-801-77A'
import { productData as JP_801_50A } from './JP-801-50A'
import { productData as JP_801_M01 } from './JP-801-M01'
import { productData as JP_802_69P } from './JP-802-69P'
import { productData as JP_802_82P } from './JP-802-82P'
import { productData as JP_802_60P } from './JP-802-60P'
import { productData as JP_802_82A } from './JP-802-82A'
import { productData as JP_802_49P } from './JP-802-49P'
import { productData as JP_802_49A } from './JP-802-49A'
import { productData as JP_802_88 } from './JP-802-88'
import { productData as JP_802_115 } from './JP-802-115'
import { productData as JP_803_140P } from './JP-803-140P'
import { productData as JP_803_92P } from './JP-803-92P'
import { productData as JP_803_117P } from './JP-803-117P'
import { productData as JP_803_92A } from './JP-803-92A'

const productsData = {
  'JP-CA1210': JP_CA1210,
  'PR-L202': PR_L202,
  'PR-L208': PR_L208,
  'PR-L223': PR_L223,
  'PR-L241': PR_L241,
  'JP-CA10': JP_CA10,
  'JP-CU038': JP_CU038,
  'JP-801-108P': JP_801_108P,
  'JP-801-82P': JP_801_82P,
  'JP-801-82A': JP_801_82A,
  'JP-801-77A': JP_801_77A,
  'JP-801-50A': JP_801_50A,
  'JP-801-M01': JP_801_M01,
  'JP-802-69P': JP_802_69P,
  'JP-802-82P': JP_802_82P,
  'JP-802-60P': JP_802_60P,
  'JP-802-82A': JP_802_82A,
  'JP-802-49P': JP_802_49P,
  'JP-802-49A': JP_802_49A,
  'JP-802-88': JP_802_88,
  'JP-802-115': JP_802_115,
  'JP-803-140P': JP_803_140P,
  'JP-803-92P': JP_803_92P,
  'JP-803-117P': JP_803_117P,
  'JP-803-92A': JP_803_92A
}

export const getProductById = (id) => {
  console.log('Fetching product:', id)
  return productsData[id]
}

export const getAllProducts = () => Object.values(productsData)
export const getProductsByCategory = (categoryId) => 
  Object.values(productsData).filter(product => product.categoryId === categoryId)

export default productsData