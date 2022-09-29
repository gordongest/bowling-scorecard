// score values

const scoreVals = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
]

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

// scoring method

const totalScore = frames => frames.reduce((totalAcc, frame, i) => {
    const frameTotal = frame.reduce((frameAcc, roll) => {
        return frameAcc + parseScore(roll);
    }, 0)

    if (containsStrike(frame) && i <= frames.length - 1) {
        return totalAcc + frameTotal + parseScore(frames[i + 1][0]) + parseScore(frames[i + 1][1]);
    }

    if (containsSpare(frame) && i <= frames.length - 1) {
        return totalAcc + frameTotal + parseScore(frames[i + 1][0]);
    }

    return totalAcc + frameTotal;
}, 0);

export { scoreVals, isStrike, isEmpty, containsStrike, containsSpare, parseScore, totalScore };