import Model from '@/models/Model'
import type { IProperty } from '@/types/database'

export default class Property extends Model {
  resource() {
    return `properties`
  }

  baseURL() {
    return `${super.baseURL()}/v1`
  }

  paginate() {
    return super.getPagination<IProperty>()
  }
}
