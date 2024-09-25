import { carService } from '../modules/carService'
import type { CarItem } from '@@/schemas/fipe'
export default defineEventHandler(async (event) => {
  const body = await readBody<CarItem>(event)
  try{
    const data = await carService.post(body)
    if(!data._id){
      throw new Error('Error saving data')
    }
    return data
  }catch(e: any){
    return { message: e.message }
  }
})