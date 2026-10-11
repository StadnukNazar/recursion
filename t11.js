function oneToN(n) {
    if (n < 1) return;
    oneToN(n - 1);
    process.stdout.write(n + " ");
}
 
function fromAtoB(a, b) {
    process.stdout.write(a + " ");
    if (a === b) return;
    fromAtoB(a < b ? a + 1 : a - 1, b);
}
 
function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
}
 
function digitSum(n) {
    if (n === 0) return 0;
    return (n % 10) + digitSum(Math.floor(n / 10));
}
 
function digitsRightToLeft(n) {
    if (n === 0) return;
    process.stdout.write((n % 10) + " ");
    digitsRightToLeft(Math.floor(n / 10));
}
 
function digitsLeftToRight(n) {
    if (n === 0) return;
    digitsLeftToRight(Math.floor(n / 10));
    process.stdout.write((n % 10) + " ");
}
 
console.log("1. Від 1 до n (n = 15):");
oneToN(15);
console.log();
 
console.log("2. Від A до B (5 1):");
fromAtoB(-10, 1);
console.log();
console.log("2. Від A до B (1 5):");
fromAtoB(10, -5);
console.log();
 
console.log("3. Точна степінь двійки:");
console.log("9  ->", isPowerOfTwo(9) ? "YES" : "NO");
console.log("9  ->", isPowerOfTwo(9) ? "YES" : "NO");
console.log("64 ->", isPowerOfTwo(64) ? "YES" : "NO");
 
console.log("4. Сума цифр (160):");
console.log(digitSum(160));
 
console.log("5. Цифри справа наліво (156):");
digitsRightToLeft(156);
console.log();
 
console.log("6. Цифри зліва направо (1796):");
digitsLeftToRight(1796);
console.log();