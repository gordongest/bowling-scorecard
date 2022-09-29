// scoring helper methods

const isStrike = val => {
    return val === 'X';
}

const isEmpty = val => {
    return val === '-';
}

const containsStrike = frame => {
    return frame.includes("10");
}

const containsSpare = frame => {
    return (!frame.includes("-") && (parseInt(frame[0]) + parseInt(frame[1]) === 10));
}

const parseScore = val => {
    if (isStrike(val)) {
        return 10
    } else if (isEmpty(val)) {
        return 0
    } else return parseInt(val)
}

export { isStrike, isEmpty, containsStrike, containsSpare, parseScore};