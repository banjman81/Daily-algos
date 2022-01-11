// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
    // domainName("http://github.com/carbonfive/raygun") == "github" 
    // domainName("http://www.zombie-bites.com") == "zombie-bites"
    // domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    // V1 PASS THE TEST
    const splitted = url.split('/')
    const filtered = splitted.filter( item => item.includes('.'))

    const finalFiltered = filtered[0].split('.')

    for (let i=0; i<finalFiltered.length; i++){
        if(finalFiltered[i] !== "www"){
            return finalFiltered[i]
        }
    }
}

const link1 = "http://google.com"
const link2 = "http://google.co.jp"
const link3 = "www.xakep.ru"
const link4 = "https://youtube.com"

// Test
// const splittedLink1 = link2.split('/')
// const filtered1 = splittedLink1.filter( item => item.includes('.'))

// const finalFiltered = filtered1[0].split('.')

// for (let i=0; i<finalFiltered.length; i++){
//     if(finalFiltered[i] !== "www"){
//         return console.log(finalFiltered[i])
//     }
// }

console.log(domainName(link1))
console.log(domainName(link2))
console.log(domainName(link3))
console.log(domainName(link4))