import { defineStore } from 'pinia'
import Property from '@/models/Property'
import type { IProperty } from '@/types/database'
import type { APICollectionListing, ListingLinks, ListingMeta } from '@/types/pagination'

export const usePropertyStore = defineStore('property', {
  state: () => ({
    propertiesListing_: {
      data: [] as IProperty[],
      links: {} as ListingLinks,
      meta: {} as ListingMeta,
      apiState: Property.state.INITIAL,
    } as APICollectionListing<IProperty>,
    properties_: [] as IProperty[],
    apiState: Property.state.INITIAL as keyof typeof Property.state,
  }),
  getters: {
    properties: (state) => state.properties_,
    propertiesListing: (state) => state.propertiesListing_,
  },
  actions: {
    async getAll(property = Property.select('id', 'name')) {
      this.propertiesListing_.apiState = Property.state.LOADING
      return new Promise((resolve, reject) => {
        property
          .getPagination<IProperty>()
          .then((response) => {
            this.propertiesListing_.data = response.data
            this.propertiesListing_.meta = response.meta
            this.propertiesListing_.apiState = Property.state.LOADED
            resolve(response)
          })
          .catch((err) => {
            this.propertiesListing_.data = []
            this.propertiesListing_.meta = {} as ListingMeta
            this.propertiesListing_.apiState = Property.state.ERROR
            reject(err)
          })
      })
    },
  },
})
