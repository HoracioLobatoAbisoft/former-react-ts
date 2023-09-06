import { httpGetCaricaRandomListino } from "../services/ProductRandomService"

const useProductRandom = () =>{
   
    const getCaricaRandomListino = async () =>{
        try {
            const responseGetCaricaRandomListino = await httpGetCaricaRandomListino();
            return responseGetCaricaRandomListino;
        } catch (error) {
            console.log('error getCaricaRandomListino');
        }
    }

    return {
        getCaricaRandomListino
    }
}

export default useProductRandom
