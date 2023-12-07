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
    giornoIntF: string;
    giornoIntN: string;
    giornoIntS: string;
    giornoStrF: string;
    giornoStrN: string;
    giornoStrS: string;
    meseF: string;
    meseN: string;
    meseS: string;
    giornoStrNP: string
    giornoIntNP: string
    giornoStrFP: string,
    giornoIntFP: string,
    giornoStrSP: string,
    giornoIntSP: string
}
