import { Schema, model } from 'mongoose';
import type { MarkItem } from '@@/schemas/Mark'

const markSchema = new Schema<MarkItem>({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const MarkModel = model('Mark', markSchema);