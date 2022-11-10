const sensors = [
    {
        id : 1,
        name: '1',
        type: "temp",
        data: 36,
        mode:'active',
        long: -70.39,
        lat: 43.35
    },
    {
        id : 2,
        name: '1',
        type: "temp",
        data: 37,
        mode:'disable',
        long: -70.39,
        lat: 44.35

    },
    {
        id : 3,
        name: '1',
        type: "moist",
        data: 20,
        mode:'active',
        long: -70.39,
        lat: 45.35

    },
    {
        id : 4,
        name: '1',
        type: "moist",
        data: 25,
        mode:'active',
        long: -70.39,
        lat: 46.35

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