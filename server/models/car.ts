import { Schema, model } from 'mongoose';
import type { FipeItem, CarItem, MarkItem } from '@@/schemas/fipe'

const markSchema = new Schema<MarkItem>({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const carSchema = new Schema<CarItem>({
    fipeNumber: { type: String, required: true },
    mark: { type: Schema.Types.ObjectId, ref: 'Mark', required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const fipeSchema = new Schema<FipeItem>({
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    value: { type: Number, required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car' },
    referenceAt: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const CarModel = model('Car', carSchema);
export const FipeModel = model('Fipe', fipeSchema);