export const DateFormatItWDMY = (fecha: Date | undefined) => {

    var fechaReturn: string;

    if (fecha) {
        const dateNew = new Date(fecha)
        fechaReturn = dateNew.toLocaleDateString('it-IT', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        return fechaReturn
    }
}

export const DateFormatReal = (fecha:string) =>{
    console.log(fecha)
}   


export const DateFormatDDMMYY = (fechaP: Date | undefined) => {
    if (fechaP) {

        const fecha = new Date(fechaP);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const año = fecha.getFullYear();
        return `${dia}/${mes}/${año}`;
    }
    return ''
}

export const DateFormatDDMM = (fechaP: Date | undefined) => {
    if (fechaP) {
        const fecha = new Date(fechaP);
        return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
    }
    return ''
}

export const DateFormatDDMSYYHHSS = (fechaP: Date | undefined) => {
    if (fechaP) {
        const dateNow = new Date(fechaP);
        const formattedDate = dateNow.toLocaleDateString('it-IT', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
        return formattedDate
    }
}