import { FipeModel } from "@@/server/models/car"
import type { FipeItem, CarItem } from "@@/schemas/fipe"

export const fipeService = {
    get: async (id: string) => {
        return await FipeModel.findById(id);
    },
    post: async (fipe: FipeItem) => {
        const data = new FipeModel(fipe);
        return await data.save();
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
                { marca: { $regex: search, $options: 'i' } },
                { modelo: { $regex: search, $options: 'i' } }
            ],

        };
        return await FipeModel.find(query).sort({ anoReferencia: 1, mesReferencia: 1 }).limit(100);
    }
}

export default fipeService;