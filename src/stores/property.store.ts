import { defineStore } from 'pinia'
import Property from '@/models/Property'
import type { IProperty } from '@/types/database'

export const usePropertyStore = defineStore('property', {
  state: () => ({
    properties_: [] as IProperty[],
    apiState: Property.state.INITIAL as keyof typeof Property.state,
  }),
  getters: {
    properties: (state) => state.properties_,
  },
  actions: {
    async getAll(property = Property.select('id', 'name')) {
      this.apiState = Property.state.LOADING
      return new Promise((resolve, reject) => {
        property
          .getCollection<IProperty>()
          .then((response) => {
            this.properties_ = response
            this.apiState = Property.state.LOADED
            resolve(response)
          })
          .catch((err) => {
            this.properties_ = []
            this.apiState = Property.state.ERROR
            reject(err)
          })
      })
    },
  },
})
