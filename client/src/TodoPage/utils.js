const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

export default function getTimeDiff(added, completed) {
    let t1 = new Date(added).getTime(),
        t2 = new Date(completed).getTime(),
        milliseconds = 0,
        time = "";
    if (isNaN(t1) || isNaN(t2)) return "";
    if (t1 < t2) milliseconds = t2 - t1;
    else milliseconds = t1 - t2;
    var days = Math.floor(milliseconds / MS_IN_A_DAY);
    if (days > 0) {
        time += days + "d ";
        milliseconds -= days * MS_IN_A_DAY
    }
    var seconds = Math.floor((milliseconds / 1000) % 60);
    var minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    var hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    if (hours > 0) time += hours + "h ";
    if (minutes > 0) time += minutes + "m ";
    if (seconds > 0) time += seconds + "s ";
    return time;
}
