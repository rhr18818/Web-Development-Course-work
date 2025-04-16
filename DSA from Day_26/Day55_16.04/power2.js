let n = 16
/// every power of 2 number binary has -- MSB(most left bit) is 1
/// and all other bit's are 0
//ex: 4 --> 100

/// and every previous of number of power of 2 has --- All Bit 1
///ex: 3 --> 11

console.log((n&(n-1))==0 ? "power of 2" : "NO");
