import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.assignedTasks = [
      { imageUrl: "Frontend/Pictures/TaskPictures/fix-and-flip-a-house.jpg"},
      { imageUrl: "Frontend/Pictures/TaskPictures/makewall.jpg"},
      { imageUrl: "Frontend/Pictures/TaskPictures/mechanic2.jpg"},
      { imageUrl: "Frontend/Pictures/TaskPictures/Remodeling.jpg"}
    ]

    this.userTasks = [
      { imageUrl: "Frontend/Pictures/TaskPictures/fix-and-flip-a-house.jpg" },
      { imageUrl: "Frontend/Pictures/TaskPictures/makewall.jpg" },
      { imageUrl: "Frontend/Pictures/TaskPictures/mechanic2.jpg" },
      { imageUrl: "Frontend/Pictures/TaskPictures/Remodeling.jpg" }
    ]

    

    this.plusImage = "Frontend/Pictures/UI/plus.png"
  }


  handleSubmit(e) {
    e.preventDefault;

  }

  handleAssignedTaskShow(e){
    e.preventDefault
    //open show model
  }

  userTaskShow(e){
    e.preventDefault
  }


  render() {
    //user the picture index to show  
    return (
      <div className='index-page'>
        <div className='projects-title-div'>
          <h1 className="main-headers">Tasks Refered To You</h1>
        </div>
        <div className='projects-index-container'>
          {/* {this.props.assignedTasks.map((assignedTask) => { */}
          {this.assignedTasks.map((assignedTask) => {
            return (
              <div className='project-cover-container'>
                <button className='project-cover-container' onClick={this.handleAssignedTaskShow.bind(this)}> <img className='project-cover-picture' src={`${assignedTask.imageUrl}`} alt="" /></button>
              </div>
            )
          })}
        </div>
        <div className='projects-title-div'>
          <h1 className="main-headers">User Tasks</h1>
        </div>
        <div className='projects-index-container'>
          {this.userTasks.map((userTask) => {
            return (
              <div className='project-cover-container'>
                <button className='project-cover-container' onClick={this.userTaskShow.bind(this)}> <img className='project-cover-picture' src={`${userTask.imageUrl}`} alt="" /></button>
              </div>
            )
          })}
          <div className='project-cover-container'>
            <Link className="create-task-button" to="/createtask" />
          </div>
        </div>
      </div>
    )
  }
}