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

export interface DateConsegna {
    date1:Date ,
    date2:Date ,
}