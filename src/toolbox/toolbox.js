import moment from "moment";

export const parseStrToCurrency = (value, currency) => {
    return new Intl.NumberFormat("ru", {
        style: "currency",
        currency: currency
    }).format(value);
};

export const parseDate = (dateString, periodToAdd) => {
    const dateArray = dateString.split('-');
    const [day, month, year] = dateArray;
    const first_date = new Date(parseInt(year), parseInt(month), parseInt(day));
    const end_date = moment(first_date);
    end_date.add(periodToAdd - 1, 'months');
    return end_date.format('DD-MM-YYYY');
};

export const debtCompletion = (debt_length, end_date) => {
    const a = moment();
    const dateArray = end_date.split('-');
    const [day, month, year] = dateArray;
    const moment_date = new Date(parseInt(year), parseInt(month), parseInt(day));
    const b = moment(moment_date);
    const remaining_months = b.diff(a, "months") - 1;
    const debt_completion = (debt_length - remaining_months) / debt_length * 100;
    return debt_completion.toFixed(2);
};

export const remainingPeriod = (debt_length, end_date)=>{
    const a = moment();
    const dateArray = end_date.split('-');
    const [day, month, year] = dateArray;
    const moment_date = new Date(parseInt(year), parseInt(month), parseInt(day));
    const b = moment(moment_date);
    const remaining_months = b.diff(a, "months") - 1;
    return remaining_months;
};