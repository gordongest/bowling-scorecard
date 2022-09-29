// scoring helper methods

const isStrike = val => {
    return val === 'X';
}

const isEmpty = val => {
    return val === '-';
}

const isSpare = val => {
    return val === '/';
}

const parseScore = val => {
    if (isStrike(val) || isSpare(val)) {
        return 10
    } else if (isEmpty(val)) {
        return 0
    } else return parseInt(val)
}

export { isStrike, isSpare, isEmpty, parseScore};