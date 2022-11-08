import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './tasking.css'

function Task(props) {
    return (
        <li>
            <h2>{props.name}</h2>
            <Icon icon="ic:baseline-access-time" className="time-icon" />
            <div className='time'>
                <p>{props.time}</p>
            </div>
            <div className="option">
                <Icon icon="bx:dots-horizontal-rounded" className="option-icon" />
                <div className="option-content">
                    <p>Chỉnh sửa</p>
                    <p>Xóa</p>
                </div>
            </div>
        </li>
    )
}

function Tasking() {
    const [openAddingTask, setOpenAddingTask] = useState(false)
    const addingTask = () => {
        setOpenAddingTask(!openAddingTask)
    }
    const tasks = [
        {name: "Công việc 1", time: "0h 57m"},
        {name: "Công việc 1", time: "0h 57m"},
        {name: "Công việc 1", time: "0h 57m"},
        {name: "Công việc 1", time: "0h 57m"}
    ];
    return (
        <div className='task'>
            <div className='area' id={openAddingTask ? "open" : "close"}>
                <div className='show-task-list'>
                    <div className='add'>
                        <button type='button' className="add-button" onClick={addingTask}>Tạo công việc</button>
                    </div>
                    <div className='task-list'>
                        <ul>
                            {tasks.map((task) => <Task name={task.name} time={task.time} />)}
                        </ul>
                    </div>
                    <div className='numbering'>
                        
                    </div>
                </div>
                <div className='show-add-task'>

                </div>
            </div>
        </div>
    )
}

export default Tasking