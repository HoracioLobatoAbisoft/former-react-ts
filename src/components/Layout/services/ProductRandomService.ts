import applicationConnect from "../../../api"
import { ResponseGetCaricaRandomListino } from "../interfaces/ProductRandom"

export const httpGetCaricaRandomListino= async () => {
    const response = await applicationConnect.get<ResponseGetCaricaRandomListino>('/Utils/GetCaricaRandomListino');
    return response.data;
}