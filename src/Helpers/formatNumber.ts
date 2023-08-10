export const numberFormat = (
    value: number | undefined | null,
    locales: string | string[] | undefined = 'it-IT',
    minimumFractionDigits: number = 2,
    maximumFractionDigits: number = 2) => {

    var formatNumber = new Intl.NumberFormat(locales, { minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits, });
    var numeroResultFormat = formatNumber.format(Number(value));
    return numeroResultFormat
}