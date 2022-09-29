// scoring helper methods

const isStrike = val => {
    return val === '10';
}

const isEmpty = val => {
    return val === '-';
}

const isSpare = (frame) => {
    return parseInt(frame[0]) + parseInt(frame[1]) === 10;
}

const parseScore = val => {
    if (isStrike(val)) {
        return 10
    } else if (isEmpty(val)) {
        return 0
    } else return parseInt(val)
}

export { isStrike, isSpare, isEmpty, parseScore};