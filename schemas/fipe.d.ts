
export interface MarkItem{
    _id?: string;
    name: string;
    createdAt?: Date;
}

export interface CarItem{
    _id?: string;
    fipeNumber: string;
    mark: MarkItem;
    model: string;
    year: number;
    createdAt?: Date;
}

export interface FipeItem {
    _id?: string;
    month: number;
    year: number;
    value: number;
    car: CarItem;
    referenceAt: Date;
    createdAt?: Date;
}

export interface FipeBody {
    month: number;
    year: number;
    value: number;
    fipeNumber: string;
}
