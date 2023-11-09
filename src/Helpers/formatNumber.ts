export const numberFormat = (
    value: number | undefined | null |string,
    locales: string | string[] | undefined = 'it-IT',
    minimumFractionDigits: number = 2,
    maximumFractionDigits: number = 2) => {

    var formatNumber = new Intl.NumberFormat(locales, { minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits, });
    var numeroResultFormat = formatNumber.format(Number(value));
    return numeroResultFormat
}

export  const FormatNumber0_000 = (value: number) => {

    return value.toLocaleString('es', { useGrouping: true });
}

export const numberPercentuale = (monto:number, porcentuaje:number) => {
    return (monto * porcentuaje) / 100
}