export function formatTime(time, delimeter = "-") {
    let date    = new Date(time)
    let month   = date.getMonth() + 1
    let day     = date.getDate()
    return date.getFullYear() + delimeter + (month <= 9 ? "0" + month : month) + delimeter +(day <= 9 ? "0" + day : day);
}

export function formatTimePretty(time, delimeter = ".") {
    let date    = new Date(time)
    let month   = date.getMonth() + 1
    let day     = date.getDate()
    return (day <= 9 ? "0" + day : day)+ delimeter + (month <= 9 ? "0" + month : month) + delimeter + date.getFullYear() ;
}