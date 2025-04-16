let n = 6
///any even number -- binary LSB --most right bit is 0
/// doing And(&) wiht 1 should return 0-- if Even !
console.log((n&1)==0 ? 'Even' : 'Odd');
