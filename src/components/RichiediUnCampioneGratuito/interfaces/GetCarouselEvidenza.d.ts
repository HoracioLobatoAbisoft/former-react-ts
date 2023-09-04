export interface ResponseGetCarouselEvidenza {
    data: DataCarouseEvidenza[];
    message: string;
    status: number;
}

export interface DataCarouseEvidenza {
    getImgFormato: string;
    url: string;
}
