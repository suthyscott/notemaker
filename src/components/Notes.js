import React from 'react';
import axios from 'axios';
import Note from './Note';
import './Notes.css'

class Notes extends React.Component{
    constructor(){
        super()

        this.state= {
            notes: [],
            newNote: '',
            newImportance: 0,
            editing: false
        }
    }

    componentDidMount(){
        axios.get(`/api/notes`).then(res => {
            this.setState({notes: res.data})
        })
        .catch(err => console.log(err))
    }

    handleUpdateNewNote = val => {
        this.setState({newNote: val})
    }

    handleUpdateNewImportance = val => {
        if(val > 10){
         return alert(`No can do crackerjack, bring'er on down`) 
        }   
        this.setState({newImportance: val})
    }

    handleAddNote = () => {
        axios.post(`/api/notes`, {newNote: this.state.newNote, newImportance: this.state.newImportance})
        .then(res => {
            console.log(res.data)
            this.setState({notes: res.data})
        })
        .catch(err => console.log(err))

        this.setState({newNote: '', newImportance: 0})
    }

    handleUpdateNote = (id, newNote, newImportance) => {
        console.log('hit handleUpdateNote')
        axios.put(`/api/notes/${id}`, {newNote: newNote, newImportance: newImportance})
        .then(res => {
            console.log(res.data)
            this.setState({notes: res.data, editing: !this.state.editing})
        })


    }


    handleToggleEdit = () => {
        console.log(this.state.editing)
        this.setState({editing: !this.state.editing})
    }

    render(){
        const noteDisplay = this.state.notes.map(e => {
                    return <Note item={e} handleUpdateNote={this.handleUpdateNote} handleToggleEdit={this.handleToggleEdit} editing={this.state.editing}/>
                })
        return(
            <div className='note-maker'>
                <header className='banner'>Make New Note</header>
                <div className='form'>
                    <input
                    className='input'
                    onChange={e => this.handleUpdateNewNote(e.target.value)}
                    value={this.state.newNote}></input>
                    <input 
                    className='input'
                    onChange={e => this.handleUpdateNewImportance(e.target.value)}
                    type='number'
                    value={this.state.newImportance}></input>
                    <button onClick={() => this.handleAddNote()}>Add Note</button>
                </div>
                
                <p className='note'>{this.state.newNote}</p>

                {noteDisplay}
            </div>
        )
    }
}

export default Notes