export const colors: string[] = [
    "#6f9654", "#43459d", "#1c91c0", "#e7711b", "#ff006e", "#be95c4"
]

export const shuffledColors: string[] = colors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default colors;