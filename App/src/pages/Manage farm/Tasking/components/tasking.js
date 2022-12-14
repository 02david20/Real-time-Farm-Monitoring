import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import './tasking.scss'

function Tasking() {
    // task data
    const tasks = [
        {
            id: 1,
            name: "Final report",
            description: "Báo cáo cuối kì môn Đồ án Công nghệ phần mềm", 
            start_time: "2022-12-16T01:15",
            end_time: "2022-12-17T09:00"
        },
        {
            id: 2,
            name: "Tưới nước vườn số 1",
            description: "Tưới nước hàng tuần",  
            start_time: "2022-12-16T12:08",
            end_time: "2022-12-19T16:01"
        },
        {
            id: 3,
            name: "Cài đặt sensor", 
            description: "Vừa mua các sensor mới, hãy nhớ cài đặt chúng", 
            start_time: "2022-12-20T10:58",
            end_time: "2022-12-21T20:11"
        },
        {
            id: 4,
            name: "Thi cuối kì",
            description: "Chuẩn bị kết thúc kì 221 bằng những bài thi cuối kì :(",  
            start_time: "2022-12-25T11:00",
            end_time: "2022-12-28T18:23"
        }
    ]
    const [taskList, updateTaskList] = useState(tasks)
    const [newestID, setNewestID] = useState(tasks.length+1)
    const [pageNo, setPageNo] = useState(1)
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
            description = e.target.getAttribute('description'),
            start_time = e.target.getAttribute('start_time'),
            end_time = e.target.getAttribute('end_time')
        setValue('name', name)
        setValue('description', description)
        setValue('start_time', start_time)
        setValue('end_time', end_time)
        setIdOfEditedTask(id)
        setOpenAddingTask(!openAddingTask)
    }
    const handleAddTask = () => {
        setNewestID((newestID) => newestID+1)
        let newTask = { id:newestID, 
                        name: getValues().name, 
                        description: getValues().description,
                        time: {"day": 1, "hour": 10, "minute": 2},
                        start_time: getValues().start_time,
                        end_time: getValues().end_time }
        let newTaskList = taskList.concat(newTask)
        updateTaskList(newTaskList)
        setOpenAddingTask(!openAddingTask)
    }
    const handleRemoveTask = (e) => {
        let id = e.target.getAttribute("id")
        updateTaskList(taskList.filter(task => task.id != id))
        if (taskList.length % 4 == 1) {
            movePreviousPage()
        }
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
                updatedTask.start_time = getValues().start_time
                updatedTask.end_time = getValues().end_time
                return updatedTask
            }
            return task
        })
        updateTaskList(newTaskList)
        setOpenAddingTask(!openAddingTask)
    } 

    function convertTime(start_time, end_time) {
        let string_time = "";
        let now_date = new Date() 
        let start_date = new Date(start_time)
        let end_date = new Date(end_time)
        let day_end = Math.floor((end_date - now_date) / 86400000)
        let day_remain = Math.floor((start_date - now_date) / 86400000)
        if (day_end < 0) {
            string_time = "Finished"
        }
        else if (day_remain < 0) {
            string_time = "In progress"
        }
        else {
            let hour_remain = Math.floor((start_date - now_date - day_remain*86400000) / 3600000)
            let minute_remain = Math.floor((start_date - now_date - day_remain*86400000 - hour_remain*3600000) / 60000)
            string_time = day_remain + "d " + hour_remain + "h " + minute_remain + "m"
        } 
        return string_time;
    }

    function ShowTasks() {
        let i = 0
        let subTaskList = []
        for (i; i < 4; i++) {
            let index = (pageNo-1)*4 + i
            if (index >= taskList.length) break
            subTaskList.push(taskList[index])
        }
        return subTaskList.map((task) => <Task taskInfo={task} />)
    }

    function Task(props) {
        return (
            <li>
                <h2>{props.taskInfo.name}</h2>
                <Icon icon="ic:baseline-access-time" className="time-icon" />
                <div className='time'>
                    <p>{convertTime(props.taskInfo.start_time, props.taskInfo.end_time)}</p>
                </div>
                <div className="option">
                    <Icon icon="bx:dots-horizontal-rounded" className="option-icon" />
                    <div className="option-content">
                        <div>
                            <button 
                                id={props.taskInfo.id}
                                name={props.taskInfo.name}
                                description={props.taskInfo.description}
                                start_time={props.taskInfo.start_time}
                                end_time={props.taskInfo.end_time}
                                onClick={switchToEditTask}
                            >Chỉnh sửa</button>
                        </div>
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

    const movePreviousPage = () => {
        if (pageNo > 1) {
            let newPageNo = pageNo - 1
            setPageNo(newPageNo)        
        }
    }

    const moveNextPage = () => {
        if (pageNo * 4 < taskList.length) {
            let newPageNo = pageNo + 1
            setPageNo(newPageNo)
        }
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
                                <ShowTasks />
                            </ul>
                        </div>
                        <div className='numbering'>
                            
                        </div>
                    </div>
                    <div className='show-add-task'>
                        <button className='toPrevTaskList' onClick={movePreviousPage}>
                            &lt;
                        </button>
                        <div>
                            Trang {pageNo}
                        </div>
                        <button className='toNextTaskList' onClick={moveNextPage}>
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
                                    <div className='start-time'>
                                        <label for='start'>Từ:</label>
                                        <input 
                                            type='datetime-local' 
                                            name='start'
                                            {...register("start_time")}
                                        ></input>
                                    </div>
                                    <div className='end-time'>
                                        <label for='end'>Đến:</label>
                                        <input 
                                            type='datetime-local' 
                                            name='end'
                                            {...register("end_time")}
                                        ></input>
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