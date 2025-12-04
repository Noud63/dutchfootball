const lastMatchExpired = (day, matchdays) => {
    const index = day - 1;              // convert 1-based → 0-based index

    const matches = matchdays[index];
    if (!matches || matches.length < 9) return false;

    const lastMatch = matches[8];       // last of the 9 matches
    const lastDate = new Date(lastMatch.utcDate);
    const now = new Date();

    console.log(now >= lastDate)

    return now >= lastDate;             // match is in the past
  };
export default lastMatchExpired