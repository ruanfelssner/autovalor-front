import { fipeService } from '../modules/fipeService'
import type { CarItem } from '@@/schemas/fipe'
import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const {search} = getQuery(event)
  try{
    if (typeof search !== 'string') {
      throw new Error('Search parameter must be a string')
    }
    return await fipeService.getSearch(search) as CarItem[]
  }catch(e: any){
    return { message: e.message }
  }
})
