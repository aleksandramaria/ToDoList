import Task from "./Task";
import React from "react";

const TaskList = ({ items }) => {
    const list = items.map( (item, index) => <Task taskName={item} key={index}/> );

    return (
        <div>{ list }</div>
    )
};

export default TaskList;