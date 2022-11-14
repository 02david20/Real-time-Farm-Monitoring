import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import './tasking.scss'
import data from './data.json'

function Tasking() {
    // task data
    const tasks = [
        {
            id: 1,
            name: "Công việc 1",
            description: "Là công việc đấy", 
            time: {"day": 0, "hour": 0, "minute": 57}
        },
        {
            id: 2,
            name: "Công việc 2",
            description: "Về nhà trồng rau nuôi cá",  
            time: {"day": 0, "hour": 2, "minute": 34}
        },
        {
            id: 3,
            name: "Công việc 3", 
            description: "Mang tiền về cho mẹ", 
            time: {"day": 0, "hour": 3, "minute": 16}
        },
        {
            id: 4,
            name: "Công việc 4",
            description: "Đừng mang ưu phiền về cho mẹ",  
            time: {"day": 1, "hour": 10, "minute": 2}
        }
    ]
    const [taskList, updateTaskList] = useState(tasks)
    const { register, getValues, setValue } = useForm();
    const [openAddingTask, setOpenAddingTask] = useState(false)
    const [addOrEditTask, setAddOrEditTask] = useState(true)
    const [idOfEditedTask, setIdOfEditedTask] = useState()
    const switchToAddTask = () => {
        setAddOrEditTask(true)
        setOpenAddingTask(!openAddingTask)
        document.getElementsByTagName("form")[0].reset()
    }
    const switchToEditTask = (e) => {
        setAddOrEditTask(false)
        let id = e.target.getAttribute("id"), 
            name = e.target.getAttribute('name'), 
            description = e.target.getAttribute('description')
        setValue('name', name)
        setValue('description', description)
        setIdOfEditedTask(id)
        setOpenAddingTask(!openAddingTask)
    }
    const handleAddTask = () => {
        let newTask = {id:taskList.length+1, name: getValues().section, time: {"day": 1, "hour": 10, "minute": 2}}
        let newTaskList = taskList.concat(newTask)
        updateTaskList(newTaskList)
        setOpenAddingTask(!openAddingTask)
    }
    const handleRemoveTask = (e) => {
        let id = e.target.getAttribute("id")
        updateTaskList(taskList.filter(task => task.id != id))
    }
    const denyAddTask = () => {
        setOpenAddingTask(!openAddingTask)
    } 
    const denyChange = () => {
        setOpenAddingTask(!openAddingTask)
    }
    const handleEditTask = () => {
        const newTaskList = taskList.map((task) => {
            if (task.id == idOfEditedTask) {
                const updatedTask = task
                updatedTask.name = getValues().name
                updatedTask.description = getValues().description
                return updatedTask
            }
            return task
        })
        updateTaskList(newTaskList)
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
                <h2>{props.taskInfo.name}</h2>
                <Icon icon="ic:baseline-access-time" className="time-icon" />
                <div className='time'>
                    <p>{convertTime(props.taskInfo.time)}</p>
                </div>
                <div className="option">
                    <Icon icon="bx:dots-horizontal-rounded" className="option-icon" />
                    <div className="option-content">
                        <div>
                            <button 
                                id={props.taskInfo.id}
                                name={props.taskInfo.name}
                                description={props.taskInfo.description}
                                onClick={switchToEditTask}
                            >Chỉnh sửa</button></div>
                        <div>
                            <button 
                                id={props.taskInfo.id}
                                onClick={handleRemoveTask}
                            >Xóa</button>
                        </div>
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
                                {taskList.map((task) => <Task taskInfo={task} />)}
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
                                placeholder="Đặt tên chủ đề" {...register("name")}
                            ></input>
                        </div>
                        <div className='description'>
                            <div className='leftside'>
                                <textarea 
                                    placeholder='Nội dung...' {...register("description")}
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
                                            <button type='button' className='del-task' onClick={denyAddTask}>Xóa</button>                                        
                                            <button type='button' className='adding-task' onClick={handleAddTask}>Thêm công việc</button>
                                        </div>
                                        <div className='edit-task-buttons'>
                                            <button type='button' className='del-change' onClick={denyChange}>Bỏ thay đổi</button>                                        
                                            <button type='button' className='save-edit-task' onClick={handleEditTask}>Lưu chỉnh sửa</button>
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