const sensors = [
    {
        id : 1,
        name: '1',
        type: "temp",
        data: 36,
        mode:'active',
        coordinate:[-91.874, 42.76],
    },
    {
        id : 2,
        name: '1',
        type: "temp",
        data: 37,
        mode:'disable',
        coordinate:[-91.874, 42.76+1]

    },
    {
        id : 3,
        name: '1',
        type: "moist",
        data: 20,
        mode:'active',
        coordinate:[-91.874+1, 42.76+1]

    },
    {
        id : 4,
        name: '1',
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+1]

    },
    
]
const availableSensors = [
    {
        id : 4,
        type: "moist",
        data: 25,
        mode:'active',
        coordinate:[-91.874-1, 42.76+2]
    }
]
export  {sensors,availableSensors}