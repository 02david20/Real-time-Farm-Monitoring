const sensors = [
    {
        id : 1,
        type: "temp",
        data: 36,
        mode:'active',
        long: 123,
        lat: 126
    },
    {
        id : 2,
        type: "temp",
        data: 37,
        mode:'disable',
        long: 100,
        lat: 100
    },
    {
        id : 3,
        type: "moist",
        data: 20,
        mode:'active',
        long: 100,
        lat: 50,
    },
    {
        id : 4,
        type: "moist",
        data: 25,
        mode:'active',
        long: 50,
        lat: 100
    },
    
]
const availableSensors = [
    {
        id : 4,
        type: "moist",
        data: 25,
        mode:'active',
        long: 50,
        lat: 100
    }
]
export  {sensors,availableSensors}