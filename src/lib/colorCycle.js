let colorArray = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

const colorCycle = i => colorArray[i % 13];

export default colorCycle;
