
export interface MarkItem{
    name: string;
    createdAt?: Date;
}

export interface CarItem{
    fipeNumber: string;
    mark: object;
    model: string;
    year: number;
    createdAt?: Date;
}

export interface FipeItem {
    month: number;
    year: number;
    value: number;
    car: object;
    referenceAt: Date;
    createdAt: Date;
}
