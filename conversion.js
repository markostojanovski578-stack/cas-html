function miToKm(mi) {
    return mi * 1.60934;
}

function cToF(celsius) {
    return (celsius * 9/5) + 32;
}

function lbsToKg(lbs) {
    return lbs * 0.453592;
}

function ftToM(ft) {
    return ft * 0.3048;
}

module.exports = {
    miToKm,
    cToF,
    lbsToKg,
    ftToM
};