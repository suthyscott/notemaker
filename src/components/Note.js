import React from 'react';
import './Note.css'

export default class Note extends React.Component{
    constructor(props){
        super(props)

        this.state={
            newNote: this.props.item.note,
            newImportance: this.props.item.importance
        }
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



    render(){
        // console.log(this.state)
        // console.log(this.props)
        return(
            <div >
                {this.props.editing ? 
                <div className='item'>
                    <input onChange={e => this.handleUpdateNewNote(e.target.value)}
                    value={this.state.newNote}></input>
                    <input onChange={e => this.handleUpdateNewImportance(e.target.value)}
                    type='number'
                    value={this.state.newImportance}></input>
                    <button onClick={() => this.props.handleUpdateNote(this.props.item.id, this.state.newNote, this.state.newImportance)}>Update Note</button>
                </div> 
                :
                <div className='item'>
                    <div >{this.props.item.note}</div>
                    <div>Importance: {this.props.item.importance}</div>
                    <button onClick={() => this.props.handleToggleEdit()}>Edit</button>
                </div> }

                
                
                
            </div>
        )
    }
}