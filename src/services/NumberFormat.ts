export const formatNumber = (n:number) => {
    var formatNumber = new Intl.NumberFormat('it', { minimumFractionDigits: 2, maximumFractionDigits: 4, });
    return formatNumber.format(n);
}