module.exports = function check(str, bracketsConfig) {
    let temp = "";

    for (let x = bracketsConfig.length + 1; x > 0; x--) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let item of bracketsConfig[i]) {
                temp += item;
            }

            while (str.includes(temp)) {
                str = str.replace(temp, "");
            }

            temp = "";
        }
    }

    if (str.length === 0) return true;
    else return false;
};