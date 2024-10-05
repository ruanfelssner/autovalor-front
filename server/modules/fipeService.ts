import { FipeModel, CarModel } from "@@/server/models/car"
import type { FipeItem, FipeBody } from "@@/schemas/fipe"

export const fipeService = {
    get: async (id: string) => {
        return await FipeModel.findById(id);
    },
    getByCar: async (id: string) => {
        return await FipeModel.find({ car: id }).sort({ year: 1, month: 1 });
    },
    post: async (fipe: FipeItem) => {
        const data = new FipeModel(fipe);
        return await data.save();
    },
    postAll: async (fipe: FipeBody[]) => {
        const cars = await CarModel.find();
        let listTrue = []
        let listFalse = []
        for (const item of fipe) {
            const car = cars.find(car => car.fipeNumber === item.fipeNumber);
            if(car){
                let objectSave = {
                    month: item.month,
                    year: item.year,
                    value: item.value,
                    car: car?._id,
                    referenceAt: new Date(item.year, item.month - 1, 1)
                }
                try{
                    const data = new FipeModel(objectSave);
                    await data.save();
                    listTrue.push(data);
                }catch(e: any){
                    listFalse.push({ message: e.message, object: objectSave });
                }
            }
        }
        return { listTrue, listFalse };
    },
    put: async (id: string, fipe: FipeItem) => {
        return await FipeModel.findByIdAndUpdate(id, fipe);
    },
    delete: async (id: string) => {
        return await FipeModel.findByIdAndDelete(id);
    },
    getAll: async () => {
        return await FipeModel.find();
    },
    getSearch: async (search: string) => {
        const query = {
            $or: [
                { model: { $regex: search, $options: 'i' } }
            ],
        };
        const data = await CarModel.find(query).populate('mark').sort({ year: 1, model: 1 }).limit(100);
        return data;
    }
}

export default fipeService;