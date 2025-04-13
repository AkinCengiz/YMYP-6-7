import React, { useState } from 'react'

function TaskForm({create}) {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [important, setImportant] = useState(false)
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        //console.log(title)
    }
    function handleDescriptionChange(e){
        setDescription(e.target.value);
        //console.log(description);
    }
    const handleImportantChecked = (e) => {
        setImportant(e.target.checked);
        //console.log(important)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        create(title,description,important);
        setTitle("");
        setDescription("");
        setImportant(false);
    }
  return (
    <form id='task-form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Create Task</h2>
        <div className="form-group">
            <label className='form-label' htmlFor="title">Title</label>
            <input className='form-control' value={title} type="text" id='title' onChange={handleTitleChange}/>
        </div>
        <div className="form-group">
            <label className='form-label' htmlFor="description">Description</label>
            <textarea name="description" id="description" rows={5} className='form-control' value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="form-group">
            <label className='form-label' htmlFor="important">Important 
                <input type="checkbox" checked={important} className='form-check' name="important" id="important" onChange={handleImportantChecked} />
            </label>
        </div>
        <button id='form-button' className='create-button'>Create</button>
    </form>
  )
}

export default TaskForm