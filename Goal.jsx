import React, { useState } from "react";
import './Goals.css';
function Goal(){


    const [goalName, setGoalName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');


    const handleAddGoal = () => {
        console.log('Goal Name:', goalName);
        console.log('Due Date:', dueDate);
        console.log('Status:', status);
    
    };
    return (

    

        <div className="container">
        <div className="section">
        <div className="input-group">
            <label htmlFor="goalName">Goal Name</label>
            <input
            type="text"
            id="goalName"
            placeholder="Save$,2000 Every month"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            />
        </div>
        </div>

        
    <div className="section">
        <div className="input-group">
        <label htmlFor="dueDate">Due Date</label>
        <input type="text" placeholder="select a date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
        </div>
    </div>

    <div className="section"> 
        <label>status</label>
        <div className="status-group">
        <input type="radio" name="status" value="done" checked={status === 'done'} onChange={() => setStatus('done')}/>
        <button className="doneBtn">
            <i className="fas fa-check-circle finish">Done</i> 
        </button>
        
            <button className="pendingBtn"> <i className="fas fa-clock">Pending</i> </button>
        <input 
            type="radio"
            name="status"
            value="pending"
            checked={status === 'pending'}
            onChange={() => setStatus('pending')}/>
        </div>
    </div>

    <div className="section">
        <button className="button" onClick={handleAddGoal}>
        Add Goal
        </button>
    </div>
    </div>


    );
}
export default Goal;