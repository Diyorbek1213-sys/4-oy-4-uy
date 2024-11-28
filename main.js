alert ("1-vazifa")
for (let num1 = 1; num1 <= 100; num1++) {
    console.log(num1)
}

alert ("2-vazifa")
for (let num2 = 2; num2 <= 50; num2 += 2) {
    console.log(num2)
}

alert ("3-vazifa")
for (let num3 = 1; num3 <= 30; num3++) {
    if (num3 % 2 == 1) {
        console.log(num3)
    }
}

alert ("4-vazifa")
for (let num4 = 1; num4 <= 20; num4++) {
    console.log(num4 * num4)
}

alert ("5-vazifa")
for (let num5 = 10; num5 >= 1; num5--) {
    console.log(num5)
}

alert ("6-vazifa")
let yigindi = 0

for (let num6 = 1; num6 <= 100; num6++) {
    yigindi += num6
}

console.log(yigindi)

alert ("7-vazifa")
let yigindi_2 = 0

for (let num7 = 1; num7 <= 20; num7++) {
    if (num7 % 2 == 0) {
        yigindi_2 += num7
    }
}

console.log(yigindi_2)

alert ("8-vazifa")
for (let num8 = 1; num8 <= 15; num8++) {
    if (num8 % 2 == 1) {
        console.log(num8 * num8)
    }
}

alert ("9-vazifa")
for (let num9 = 5; num9 <= 25; num9++) {
    console.log(num9 * 3)
}

// 10-vazifani qilishni bilmadim kvadrat ildizlar

alert ("11-vazifa")
for (let num11 = 1; num11 <= 50; num11++) {
    if (num11 % 3 == 0) {
        console.log(num11)
    }
}

alert ("12-vazifa")
let jami = 0

for (let num12 = 1; num12 <= 100; num12++) {
    jami += num12
}
console.log(jami)

alert ("13-vazifa")
for (let num13 = 1; num13 <= 100; num13++) {
    if (num13 % 7 == 0) {
        console.log(num13)
    }
}

alert ("14-vazifa")
let natija = 0

for (let num14 = 1; num14 <= 100; num14++) {
    natija += num14
}

console.log(natija / 100)

alert ("15-vazifa")
let yigindi_3 = 0

for (let num15 = 1; num15 <= 20; num15++) {
    yigindi_3 += num15
    if (yigindi_3 % 2 == 1) {
        console.log(yigindi_3)
    }
}

alert ("16-vazifa")
let n = +prompt("son kiriting")

for (let num16 = 1; num16 <= n; num16++) {
    if (num16 % 2 == 0) {
        console.log(num16)
    }
}

alert ("17-vazifa")
for (let num17 = 1; num17 <= 50; num17++) {
    if (num17 % 5 == 0 && num17 % 3 == 0) {
        console.log(num17)
    }
}

alert ("18-vazifa")
let yigindi_4 = 0

for (let num18 = 1; num18 <= 30; num18++) {
    yigindi_4 += num18
    yigindi_4 * yigindi_4
}

console.log(yigindi_4)

alert ("19-vazifa")
let yigindi_5 = 0

for (let num19 = 1; num19 <= 100; num19++) {

    if (num19 % 2 == 1) {
        console.log(num19)
        yigindi_5++
    }
}

console.log("son", yigindi_5)

alert ("20-vazifa")
let prp = +prompt("1-son")
let prp_2 = +prompt("2-son")
let yigindi_6 = 0

for (prp = 1; prp <= prp_2; prp++) {
    yigindi_6 += prp
}

console.log(yigindi_6)

alert ("21-vazifa")
for (let num20 = 1; num20 <= 50; num20++) {
    if (num20 % 3 != 0) {
        console.log(num20)
    }
}

alert ("22-vazifa")
for (let num21 = 1; num21 <= 20; num21++) {
    if (num21 % 2 ==1) {
        console.log(num21)
    }

    if (num21 % 2 == 0) {
        console.log("juft son")
    }
}

alert ("23-vazifa")
let yigindi_7 = 0

for (let num22 = 1; num22 <= 100; num22++) {
    yigindi_7 += num22
    
    if (yigindi_7 % 10 != 0) {
        console.log(yigindi_7)
    }
}

alert ("24-vazifa")
let yigindi_8 = 1

for (let num23 = 1; num23 <= 30; num23++) {
    yigindi_8 *= num23
}

console.log(yigindi_8)

alert ("25-vazifa")
let boshlangich = +prompt("boshlangich son")
let tugash = +prompt("tugash son")

for (boshlangich = boshlangich; boshlangich <= tugash; boshlangich++) {
    console.log(boshlangich)
}

alert ("26-vazifa")
for (let num24 = 1; num24 <= 100; num24++) {
    if (num24 % 3 == 0 && num24 % 5 == 0) {
        console.log(num24)
    }
}

alert ("27-vazifa")
let faktorial = +prompt("faktorial")
let yigindi_9 = 1

for (faktorial = faktorial; faktorial >= 1; faktorial--) {
    yigindi_9 *= faktorial
}

console.log(yigindi_9)

alert ("28-vazifa")
for (let num25 = 1; num25 <= 50; num25++) {
    if (num25 % 2 == 0) {
        console.log(num25)
    }
}

alert ("29-vazifa")
let yigindi_10 = 1

for (let num26 = 1; num26 <= 10; num26++) {
    num26 *= num26 *= num26
    yigindi_10 += num26
}

console.log(yigindi_10)

alert ("30-vazifa")
for (let num27 = 1; num27 <= 20; num27++) {
    let kvadratii = num27 * num27
    console.log("Bu sonning kvadrati: ", num27, kvadratii)
}

alert ("31-vazifa")

for (let num28 = 1; num28 <= 100; num28++) {
    if (num28 % 7 == 0) {
        console.log(num28 * num28)
    }
}

alert ("32-vazifa")

for (let num29 = 1; num29 <= 30; num29++) {
    if (num29 % 10 == 0) {
        console.log(num29 * 10)
    }
}

alert ("33-vazifa")

for (let num30 = 1; num30 <= 20; num30++) {
    console.log(num30)
}

alert ("34-vazifa")
let yigindi_11 = 0

let musbat = +prompt("son")

for (musbat = musbat; musbat >= 1; musbat--) {
    if (musbat % 2 == 0) {
        console.log(yigindi_11 + musbat)
    }
}

alert ("35-vazifa")
let kopaytma = +prompt("1-son")
let kopaytma_2 = +prompt("2-son")

let kp = 1

for (kopaytma = kopaytma; kopaytma <= kopaytma_2; kopaytma++) {
    kp *= kopaytma
}

console.log(kp)

alert ("36-vazifa")
let input = +prompt("1-son")

for (input = input; input <= 500; input++) {
    if (input % 10 == 0) {
        console.log(input)
    }
}

alert ("37-vazifa")

let yigindi_12 = 0
let kvadrat_1 = 0

for (let num31 = 1; num31 <= 15; num31++) {
    kvadrat_1 = num31 * num31
    yigindi_12 += kvadrat_1
    console.log(yigindi_12)
}

alert ("38-vazifa")

for (let num32 = 10; num32 >= 1; num32--) {
    let kvadrat_2 = num32 * num32
    console.log(kvadrat_2)
}

alert ("39-vazifa")
let musbat_1 = +prompt("musbat son kiriting")
let yigindi_13 = 0

for (let num33 = 1; num33 <= musbat_1; num33++) {
    if (musbat_1 > 0) {
        let kvadrat_3 = num33 * num33
        yigindi_13 += kvadrat_3
    }
}

console.log(yigindi_13)

alert ("40-vazifa")
let musbat_2 = +prompt("musbat son kiriting")

for (musbat_2 = musbat_2; musbat_2 >= 1; musbat_2--) {
    console.log(musbat_2)
}

alert ("41-vazifa")

for (let num34 = 1; num34 <= 50; num34++) {
    if (num34 % 2 == 0) {
       num34 *= 3
       console.log(num34)
    }
}

alert ("42-vazifa")

for (let num35 = 1; num35 <= 100; num35++) {
    if (num35 % 5 != 0) {
        console.log(num35)
    }
}

alert ("43-vazifa")

let musbat_3 = +prompt("musbat son kiriting")

for (musbat_3 = musbat_3; musbat_3 >= 1; musbat_3--) {
    if (musbat_3 % 3 == 0) {
        console.log(musbat_3)
    }
}

alert ("44-vazifa")

for (let num36 = 1; num36 <= 20; num36++) {
    if (num36 % 2 == 0) {
        console.log("juft son: ", num36)
    } else {
        console.log("toq son: ", num36)
    }
}

alert ("45-vazifa")
let yigindi_14 = 0

for (let num37 = 1; num37 <= 10; num37++) {
    if (num37 % 2 == 1) {
        let kvadrat_4 = num37 * num37
        yigindi_14 += kvadrat_4
    }
}

console.log(yigindi_14)

alert ("46-vazifa")
let yigindi_15 = +prompt("son")

for (let num38 = 1; num38 <= yigindi_15; num38++) {
    let kvadrat_5 = num38 * num38
    if (kvadrat_5 < 100) {
        console.log(kvadrat_5)
    }
}

alert ("47-vazifa")
let yigindi_16 = 0

for (let num39 = 1; num39 <= 30; num39++) {
    if (num39 % 3 == 0 && num39 % 4 == 0) {
        yigindi_16 += num39
    }
}

console.log(yigindi_16)

alert ("48-vazifa")
for (let num40 = 1; num40 <= 50; num40++) {
    if (num40 % 2 == 1) {
        console.log(num40)
    }
}

alert ("49-vazifa")
let kvadrat_6 = +prompt("son")

for (kvadrat_6 = kvadrat_6; kvadrat_6 >= 1; kvadrat_6--) {
    if (kvadrat_6 % 7 == 0) {
        let kvadrat_7 = kvadrat_6 * kvadrat_6
    }
}

console.log(kvadrat_7)

alert ("50-vazifa")
let musbat_4 = +prompt("boshlangich son")
let musbat_5 = +prompt("tugash son")

let yigindi_17 = 0

for (musbat_4 = musbat_4; musbat_4 <= musbat_5; musbat_4++) {
    let kvadrat_8 = musbat_4 * musbat_4
    yigindi_17 += kvadrat_8
}

console.log(yigindi_17)