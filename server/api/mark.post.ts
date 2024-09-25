import { markService } from '../modules/markService'
import type { MarkItem } from '@@/schemas/Mark'
export default defineEventHandler(async (event) => {
  const body = await readBody<MarkItem[]>(event)
  try{
    const data = await markService.postAll(body)
    if(data.length){

    }
    return data
  }catch(e: any){
    return { message: e.message }
  }
})
