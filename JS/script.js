console.log("Working");

// QUESTION 2
// Complete the following javascript function that accepts the url and the
// parameter name and returns the value of that parameter
const getUrlParameterValue = (url, parameter) => {
    const queryString = url.split('?')[1] || '';
    const params = queryString.split('&');
    // console.log(params)

    for (let param of params) {
        let [key, value] = param.split('=');
        if (key === parameter.trim("")) {
            return value;
        }
    }

    return null;
}


var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));


// QUESTION 3 
// Write a javascript function that prints the reverse of a number. Example: if
// the number is 149, then output should be 941.

const reverseNumber = (num) => {
    let val = Number(num);
    let ans = 0;
    while (val !== 0) {
        let rem = val % 10;
        ans = ans * 10 + rem;
        val = Math.floor(val / 10);
    }

    // console.log(ans);
    return ans;
}


console.log(reverseNumber("941")); 


// QUESTION 4 
// https://github.com/SwarajAnand/twitterFrontend

// Portfolio link 
// https://swarajanand-swarajanands-projects.vercel.app/
