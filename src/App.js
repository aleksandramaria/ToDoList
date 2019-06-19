import React, { Component } from 'react';
import './App.css';

// Components
import Button from './components/Button';
import TaskList from './components/TaskList';
import Input from './components/Input';

class App extends Component {
    state = {
        list: ['task 1', 'task 2', 'task 3'],
        inputValue: ''
    };


    handleButtonClick = () => {
        // let toAdd = this.state.inputValue;
        // const newList = this.state.list.slice();
        // console.log(newList);
        //
        // newList.push(toAdd);
        this.setState({
            list: [...this.state.list, this.state.inputValue],
        })
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
    };

    render() {
        return (
            <div>
                <TaskList items={ this.state.list } />
                <Input inputValue={this.state.inputValue} handleInputChange={this.handleInputChange} />
                <Button handleClick={ this.handleButtonClick } />
            </div>
        )
    }
}

export default App;

