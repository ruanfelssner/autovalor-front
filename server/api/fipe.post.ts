import { fipeService } from '../modules/fipeService'
import type { FipeBody } from '@@/schemas/fipe'
export default defineEventHandler(async (event) => {
  const body = await readBody<FipeBody[]>(event)
  try{
    const data = await fipeService.postAll(body)
    return data
  }catch(e: any){
    return { message: e.message }
  }
})
