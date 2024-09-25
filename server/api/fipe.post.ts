import { fipeService } from '../modules/fipeService'
import type { FipeItem } from '@@/schemas/fipe'
export default defineEventHandler(async (event) => {
  const body = await readBody<FipeItem>(event)
  try{
    const data = await fipeService.post(body)
    if(!data._id){
      throw new Error('Error saving data')
    }
    return data
  }catch(e: any){
    return { message: e.message }
  }
})
