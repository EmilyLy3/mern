import React, {useState} from 'react';


const TodoList = () => {
    const [formInfo, setFormInfo] = useState({
        task: "",
        complete: false,
    });


    const [allTasks, setAllTasks] = useState([]);


    const formHandler = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value,})
    }


    const submitHandler = (e) => {
        e.preventDefault();

        setAllTasks([...allTasks, formInfo]);

        setFormInfo({
            task: "",
            complete: false,
        });
    }


    const deleteTask = (e, idxOfTaskToDelete) => {
        // using built in filter function and the task index to return a list of remaining tasks that does not include the task to delete
        let newTaskList = allTasks.filter((task, i) => {
            return i != idxOfTaskToDelete;
        });

        // updating the list of all tasks to not include deleted one
        setAllTasks(newTaskList);
    }


    const completeTask = (e, idxOfTask) => {
        if (e.target.checked == true) {
            // updating the list of tasks so complete will be True for the checked task
            // making a copy of all the tasks
            let newTasks = [...allTasks];
            // making a copy of the completed task
            let completedTask = {...allTasks[idxOfTask]};
            // changing complete to true for the completed task
            completedTask.complete = true;
            // updating the task at the index number to reflex complete:true
            newTasks[idxOfTask] = completedTask;
            // setting allTasks to the new list where the specified task is now comp;eted
            console.log(newTasks);
            setAllTasks(newTasks);

            // updating styling for the completed task
            e.target.parentNode.style.textDecoration = "line-through";
    
        } else {
            // changing the task back to uncomplete if the box is unchecked
            let newTasks1 = [...allTasks];
            let completedTask1 = {...allTasks[idxOfTask]};
            completedTask1.complete = false;
            newTasks1[idxOfTask] = completedTask1;
            console.log(newTasks1);
            setAllTasks(newTasks1);

            e.target.parentNode.style.textDecoration = "";
        }
    }


    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e)} className="m-3 text-center">
                <div className="form-group">
                    <label on htmlFor="task"></label>
                    <input onChange={(e)=>formHandler(e)} type="text" name="task" value={formInfo.task} className="form-control"/>
                </div>
                <input type="submit" value="Add" />
            </form>
            <br />
            <hr />
            <br />
            <div className="m-3">
                {
                    allTasks.map((item, i) => {
                        return <div className="mb-3">
                            <div>
                                {item.task}
                                <input onChange={(e)=>completeTask(e, i)} type="checkbox"/>
                            </div>
                            <div><button onClick={(e)=>deleteTask(e, i)}>Delete</button></div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};


export default TodoList;