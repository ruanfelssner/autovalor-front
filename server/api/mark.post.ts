import { markService } from '../modules/markService'
import type { MarkItem } from '@@/schemas/Mark'
export default defineEventHandler(async (event) => {
  const body = await readBody<string[]>(event)
  try{
    const data = await markService.postAll(body)
    if(data.length === 0){
      return { message: 'No data' }
    }
    return data
  }catch(e: any){
    return { message: e.message }
  }
})
