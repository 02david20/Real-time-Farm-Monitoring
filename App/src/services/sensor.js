const baseSensor = {
    id : -1,
    type: "",
    data: 0,
    mode:'',
    coordinate:[0, 0]
}
const checkIndex = (arr,sensor) => {
    return arr.filter(item => item.id === sensor.id);
}

export {baseSensor, checkIndex}