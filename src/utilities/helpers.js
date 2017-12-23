import moment from "moment/moment";

export const ParseISODate = (str) => {
    let date = moment(str);
    let dateComponent = date.utc().format('MM/DD/YYYY');
    let timeComponent = date.utc().format('h:mm:ssa');
    return dateComponent + " " + timeComponent
};


export const ToTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};