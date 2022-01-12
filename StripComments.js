// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.


// ------ EXAMPLE-----------
// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
    //V1 
    // const arr = input.split('')
    // let filtered = arr

    // markers.forEach(element => { 
    //     filtered = filtered.filter(item => item !== element)
    // });

    // return filtered.join("")
    // ------------------


    // V2
    const arr = input.split(' ')
    let result = arr

    markers.forEach((element )=> { 
        // result = result.filter(item => item)
        console.log(result)
        if(result.indexOf(element) >= 0){
            result.splice(result.indexOf(element)+1, 1)
            let temp = (result[result.indexOf(element)+1].split('\n'))
            temp.splice(0, 1,)
            temp.unshift(result[result.indexOf(element)-1])
            result.splice(result.indexOf(element)-1, 1)
            console.log(temp, '---')
            result[result.indexOf(element)+1] = temp.join('\n')
        }
        
        result = result.filter(item => !item.includes(element))
    });

    return result.join(" ")
};

// console.log(solution('this is the real deal, Man!!', [",", "!"]))
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))

// ----UNSOLVED
