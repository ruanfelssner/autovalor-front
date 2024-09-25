import { fipeService } from '../modules/fipeService'
import type { FipeItem } from '@@/schemas/fipe'
import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const {search} = getQuery(event)
  try{
    if (typeof search !== 'string') {
      throw new Error('Search parameter must be a string')
    }
    return await fipeService.getSearch(search) as FipeItem[]
  }catch(e: any){
    return { message: e.message }
  }
})
