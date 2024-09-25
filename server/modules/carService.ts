import { CarModel } from "@@/server/models/car"
import type { CarItem } from "@@/schemas/fipe"

export const carService = {
    get: async (id: string) => {
        return await CarModel.findById(id);
    },
    post: async (fipe: CarItem) => {
        const data = new CarModel(fipe);
        return await data.save();
    },
    postAll: async (fipe: CarItem[]) => {
        return await CarModel.insertMany(fipe);
    },
    put: async (id: string, fipe: CarItem) => {
        return await CarModel.findByIdAndUpdate(id, fipe);
    },
    delete: async (id: string) => {
        return await CarModel.findByIdAndDelete(id);
    },
    getAll: async () => {
        return await CarModel.find();
    },
    getSearch: async (search: string) => {
        const query = {
            $or: [
                { marca: { $regex: search, $options: 'i' } },
                { modelo: { $regex: search, $options: 'i' } }
            ],

        };
        return await CarModel.find(query).sort({ anoReferencia: 1, mesReferencia: 1 }).limit(100);
    }
}

export default carService;