export interface RootObject {
    data: TableDate;
    message: string;
    status: number;
}

export interface TableDate {
    dataFast: Date;
    dataFastProduzione: Date;
    dataNormale: Date;
    dataNormaleProduzione: Date;
    dataSlow: Date;
    dataSlowProduzione: Date;
}