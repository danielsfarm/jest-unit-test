// Frist way

function addUpTo(n) {
    let total = 0
    for(let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

const p1 = performance.now()

console.log(addUpTo(1000000000))

const p2 = performance.now()

console.log(`The full time of execution is ${(p2 - p1) / 1000}`)


// Second Way

function addUpTo2(n) {
    return n * (n + 1) / 2
}

const t3 = performance.now()

console.log(addUpTo2(1000000000))

const t4 = performance.now()

console.log(`The full time of execution is ${(t4 - t3) / 1000}`)