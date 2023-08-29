export interface ResponseGetRecensioni {
    data: DataGetResencioniP;
    message: string;
    status: number;
}

export interface DataGetResencioniP {
    recesioni: number;
    stars: string;
    voto: string;
}
