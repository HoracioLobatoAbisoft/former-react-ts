import applicationConnect from "../../../api"
import { ResponseGetCarouselEvidenza } from "../interfaces/GetCarouselEvidenza"

export const httpGetCarouselEvidenza = async () => {
    const response = await applicationConnect.get<ResponseGetCarouselEvidenza>('/Utils/GetCarouselEvidenza');
    return response.data;
}