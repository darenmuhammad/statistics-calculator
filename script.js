const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);

    // check sorted's length is even or not
    const median =
        sorted.length % 2 === 0
            ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
            : sorted[Math.floor(sorted.length / 2)];
    return median;
};

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => counts[el] ? counts[el] += 1 : counts[el] = 1);
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(", ");
};

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
    const mean = getMean(array);
    // this is step by step method
    // const differences = array.map(el => el - mean);
    // const squaredDifferences = differences.map(el => el ** 2);
    // const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
};

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    // const standardDeviation = Math.pow(variance, 1 / 2);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
};

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
};