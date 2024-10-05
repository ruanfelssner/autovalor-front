import { fipeService } from '../../modules/fipeService'

export default defineEventHandler(async (event) => {
  const id =  getRouterParam(event, 'id')
  try{
    if (typeof id !== 'string') {
      throw new Error('Search parameter must be a string')
    }
    return await fipeService.getByCar(id)
  }catch(e: any){
    return { message: e }
  }
})
