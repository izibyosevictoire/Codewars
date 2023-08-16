function ipToNum(ip) {
    return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}

function numToIp(num) {
 return ( (num>>>24) +'.' + (num>>16 & 255) +'.' + (num>>8 & 255) +'.' + (num & 255) );
}