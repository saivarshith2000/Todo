export default function getTimeDiff(added, completed) {
    let t1 = new Date(added).getTime(),
        t2 = new Date(completed).getTime(),
        milliseconds = 0,
        time = '';
    if (isNaN(t1) || isNaN(t2)) return '';
    if (t1 < t2) milliseconds = t2 - t1;
    else milliseconds = t1 - t2;
    var days = Math.floor(milliseconds / 1000 / 60 / (60 * 24));
    var date_diff = new Date(milliseconds);
    if (days > 0) time += days + 'd ';
    if (date_diff.getHours() > 0) time += date_diff.getHours() + 'h ';
    if (date_diff.getMinutes() > 0) time += date_diff.getMinutes() + 'm ';
    if (date_diff.getSeconds() > 0) time += date_diff.getSeconds() + 's ';
    return time;
}
