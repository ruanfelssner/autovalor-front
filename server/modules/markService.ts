import { MarkModel } from "@@/server/models/mark"
import type { MarkItem } from "@@/schemas/Mark"

export const markService = {
    get: async (id: string) => {
        return await MarkModel.findById(id);
    },
    post: async (mark: MarkItem) => {
        const data = new MarkModel(mark);
        return await data.save();
    },
    postAll: async (mark: MarkItem[]) => {
        return await MarkModel.insertMany(mark);
    },
    put: async (id: string, mark: MarkItem) => {
        return await MarkModel.findByIdAndUpdate(id, mark);
    },
    delete: async (id: string) => {
        return await MarkModel.findByIdAndDelete(id);
    },
    getAll: async () => {
        return await MarkModel.find();
    },
    getSearch: async (search: string) => {
        const query = {
            $or: [
                { marca: { $regex: search, $options: 'i' } },
                { modelo: { $regex: search, $options: 'i' } }
            ],

        };
        return await MarkModel.find(query).sort({ anoReferencia: 1, mesReferencia: 1 }).limit(100);
    }
}

export default markService;