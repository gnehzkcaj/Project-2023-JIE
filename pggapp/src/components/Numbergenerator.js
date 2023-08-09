
export default function NumberGenerator(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            const numberInRange1 = Math.floor(Math.random() * 1010) + 1;
            numbers.push(numberInRange1);
        } else {
            const numberInRange2 = Math.floor(Math.random() * 271) + 10001;
            numbers.push(numberInRange2);
        }
    }
    return numbers;
};