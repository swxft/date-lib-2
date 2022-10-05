import { MONTHS, DAYS, getFormatter } from './data.js';


export class D {

    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear();
    }

    get yr() {
        const date = this._date.getFullYear().toString();
        return parseInt(date.slice(2, date.length));
    }

    get month() {
        return MONTHS[this._date.getMonth()].long;
    }

    get mon() {
        return MONTHS[this._date.getMonth()].short;
    }

    get day() {
        return DAYS[this._date.getDay()].long;
    }

    get dy() {
        return DAYS[this._date.getDay()].short;
    }

    get date() {
        return this._date.getDate().toString();
    }

    get hours() {
        return this._date.getHours().toString();
    }

    get mins() {
        return this._date.getMinutes().toString();
    }

    get secs() {
        return this._date.getSeconds().toString();
    }

    get dateP() {
        return this._date.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }

    get hoursP() {
        return this._date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }

    get minsP() {
        return this._date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }

    get secsP() {
        return this._date.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }

    get dateOrdinal() {
        const date = this._date.getDate().toString();
        let suffixedDate = date;
        switch (date.charAt(date.length - 1)) {
            case '1':
                suffixedDate = date.concat('st');
                break;
            case '2': {
                suffixedDate = date.concat('nd');
                break;
            }
            case '3': {
                suffixedDate = date.concat('rd');
                break;
            }
            default:
                suffixedDate = date.concat('th');
                break;
        }
        return suffixedDate;
    }

    format(arg) {
        let formattedString = arg;
        for (let i = 0; i < arg.length; i++) {
            const char = arg[i];
            formattedString = formattedString.replace(char, getFormatter()[char] || ' ');
        }
        return formattedString;

    }
}


const a = new D();

console.log('output:', a);
console.log('output:', a.year);
console.log('output:', a.month);