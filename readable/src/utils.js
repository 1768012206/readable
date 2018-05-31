export const getUid = function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}


export const timeStampToString = (time) => {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var mseconds = datetime.getMilliseconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second + "." + mseconds;
}
export const sortByTime = (data) => {
    let temp;
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[j].timestamp > data[i].timestamp) {
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
        }
    }
}

export const sortByVoteScore = (data) => {
    let temp;
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[j].voteScore > data[i].voteScore) {
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
        }
    }
}

export const sortByCategories = (data, category) => {
    for (let i = data.length - 1; i >= 0; i--) {
        data[i]['hidden'] = false
    }

    for (let i = data.length - 1; i >= 0; i--) {
        if (category !== "")
            if (data[i].name === category) {
                data[i]['hidden'] = true
            }
    }
}