import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import './tasking.scss'
import data from './data.json'

function Tasking() {
    const { register, getValues } = useForm();
    const [openAddingTask, setOpenAddingTask] = useState(false)
    const [addOrEditTask, setAddOrEditTask] = useState(true)
    const switchToAddTask = () => {
        setAddOrEditTask(true)
        setOpenAddingTask(!openAddingTask)
        document.getElementsByTagName("form")[0].reset()
    }
    const switchToEditTask = () => {
        setAddOrEditTask(false)
        setOpenAddingTask(!openAddingTask)
    }
    const addTask = () => {
        alert(JSON.stringify(getValues()));
        setOpenAddingTask(!openAddingTask)
    }
    const removeTask = () => {
        setOpenAddingTask(!openAddingTask)
    }
    const denyChange = () => {
        setOpenAddingTask(!openAddingTask)
    }
    const saveEditTask = () => {
        alert(JSON.stringify(getValues()));
        setOpenAddingTask(!openAddingTask)
    } 

    function convertTime(time) {
        let string_time = "";
        if (time.day !== 0) string_time += time.day + "d ";
        string_time += time.hour + "h " + time.minute + "m";
        return string_time
    }

    function Task(props) {
        return (
            <li>
                <h2>{props.name}</h2>
                <Icon icon="ic:baseline-access-time" className="time-icon" />
                <div className='time'>
                    <p>{convertTime(props.time)}</p>
                </div>
                <div className="option">
                    <Icon icon="bx:dots-horizontal-rounded" className="option-icon" />
                    <div className="option-content">
                        <div><button onClick={switchToEditTask}>Chỉnh sửa</button></div>
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
                            <button 
                                type='button' 
                                className="add-button" 
                                onClick={switchToAddTask}
                            >Tạo công việc</button>
                        </div>
                        <div className='task-list'>
                            <ul>
                                {data.map((data) => <Task name={data['name']} time={data['time']} />)}
                            </ul>
                        </div>
                        <div className='numbering'>
                            
                        </div>
                    </div>
                    <div className='show-add-task'>
                        <button className='toPrevTaskList'>
                            &lt;
                        </button>
                        <div>
                            Trang 1
                        </div>
                        <button className='toNextTaskList'>
                            &gt;
                        </button>
                    </div>
                </div>
                <div className='add-task'>
                    <form>
                        <div className='section'>
                            <input 
                                type='text' 
                                placeholder="Đặt tên chủ đề" {...register("section")}
                            ></input>
                        </div>
                        <div className='description'>
                            <div className='leftside'>
                                <textarea 
                                    placeholder='Nội dung...' {...register("content")}
                                ></textarea>
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
                                            <option default>Không lặp</option>
                                            <option>Hằng ngày</option>
                                            <option>Hằng tuần</option>
                                            <option>Hằng tháng</option>
                                        </select>
                                    </div>
                                    <div id={addOrEditTask ? "add" : "edit"}>
                                        <div className='add-task-buttons'>
                                            <button type='button' className='del-task' onClick={removeTask}>Xóa</button>                                        
                                            <button type='button' className='adding-task' onClick={addTask}>Thêm công việc</button>
                                        </div>
                                        <div className='edit-task-buttons'>
                                            <button type='button' className='del-change' onClick={denyChange}>Bỏ thay đổi</button>                                        
                                            <button type='button' className='save-edit-task' onClick={saveEditTask}>Lưu chỉnh sửa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tasking