

function epitech(s1, s2) {
    let test_caracters = s1.split('')

    for(let i = 0; i < s2.length; i++) {
        if(s2[i] === test_caracters[0]){
            test_caracters.shift()
        }
    }

    if(test_caracters.length > 0) {
        console.log('0\n')
        return '0\n'
    }

    console.log('1\n')
    return '1\n'
}