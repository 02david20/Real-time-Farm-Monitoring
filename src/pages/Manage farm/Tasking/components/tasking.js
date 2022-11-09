import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './tasking.scss'

function Tasking() {
    const [openAddingTask, setOpenAddingTask] = useState(false)
    const addingTask = () => {
        setOpenAddingTask(!openAddingTask)
    }
    const tasks = [
        {name: "Công việc 1", time: "0h 57m"},
        {name: "Công việc 1", time: "2h 34m"},
        {name: "Công việc 1", time: "3h 16m"},
        {name: "Công việc 1", time: "10h 02m"}
    ];
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
                        <div><button onClick={addingTask}>Chỉnh sửa</button></div>
                        <div><button>Xóa</button></div>
                    </div>
                </div>
            </li>
        )
    }
    return (
        <div className='task'>
            <div className='area' id={openAddingTask ? "open" : "close"}>
                <div className='manage-task'>
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
                <div className='add-task'>
                    <div className='section'>
                        <input type='text' placeholder="Đặt tên chủ đề"></input>
                    </div>
                    <div className='description'>
                        <div className='leftside'>
                            <textarea placeholder='Nội dung...'></textarea>
                        </div>
                        <div className='rightside'>
                            <div>
                                <label for='date'>Chọn ngày:</label>
                                <input type='date' name='date'></input>
                                <div className='set-time'>
                                    <label for='start'>Từ:</label>
                                    <input type='time' name='start'></input>
                                    <label for='end'>Đến:</label>
                                    <input type='time' name='end'></input>
                                </div>
                                <div>
                                    <select>
                                        <option>Không lặp</option>
                                        <option>Hằng ngày</option>
                                        <option>Hằng tuần</option>
                                        <option>Hằng tháng</option>
                                    </select>
                                </div>
                                <div className='add-task-button'>
                                    <button type='button' className='del-task' onClick={addingTask}>Xóa</button>
                                    <button type='button' className='adding-task' onClick={addingTask}>Thêm công việc</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasking