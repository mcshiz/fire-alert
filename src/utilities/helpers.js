import moment from "moment/moment";
import { ConvertRegion, TO_NAME } from "./stateAbbrev"
export const ParseISODate = (str) => {
    let date = moment(str);
    let dateComponent = date.utc().format('MM/DD/YYYY');
    let timeComponent = date.utc().format('h:mm:ssa');
    return dateComponent + " " + timeComponent
};

export const ParseDaysSince = (str) => {
    let now = moment();
    let start = moment(str);
    // +1 makes it inclusive
    return now.diff(start, 'days')+1
};

export const FormatCityStateZip = (fire) => {
    let city = fire.city ? fire.city + ", " : "";
    let state = fire.state ? ConvertRegion(fire.state, TO_NAME) : '';
    let zip = fire.postal_code || "";
    return city + state + zip
};

export const ToTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

