export const generateRandomColor = (COLOR_DIGIT: string) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
}