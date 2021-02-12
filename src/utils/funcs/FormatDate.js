const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export const formatDate = (data) => {
    const date = new Date(data);
    const month = date.getMonth();
    const year = date.getFullYear();
    let hour = date.getHours()
    let minute = date.getMinutes()
    const monthStr = months[month]
    let dayN = date.getDate();
    let period = ''

    if(hour > 12) {
        period = 'PM'
    } else {
        period = 'AM'
    }
    if (dayN.toString().length === 1) {
        dayN = `0${dayN}`
    }
    if (hour.toString().length === 1) {
        hour = `0${hour}`
    }
    if (minute.toString().length === 1) {
        minute = `0${minute}`
    }

    return `${monthStr} ${dayN}, ${year} ${hour}:${minute} ${period}`;
};