export interface RootObject {
    data: SvgImage;
    message: string;
    status: number;
}

export interface SvgImage {
    bufferSVG: string;
    heigth: number;
    width: number;
}
