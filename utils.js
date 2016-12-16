// Right strip
function rstrip(str, char) {
    var i = str.length;
    while(i--) {
        if (str[i] == char) continue;
        return str.slice(0, i + 1);
    }
}
