import React from 'react';
import { withRouter, Link } from 'react-router-dom';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // componentWillReceiveProps() {
  //   if (typeof this.state.pictures === null){
  //     this.state.picures
  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchAssignedTasks(); // 
  //   this.props.fetchUserTasks();
  //   this.props.fetchTaskReferrals();
  //   this.props.fetchProjectAssignments();
  // }

  // projectOwnerName() {
  //   return (
  //     <div className='project-owner-text'>{this.props.projectOwner.first_name} {this.props.projectOwner.last_name}</div>
  //   )
  // }

  // showPicture() {
  //   return (
  //     <img className='show-picture' src={`${this.props.pictures[this.state.showPictureIndex].img_url}`} />
  //   )
  // }


  handleSubmit(e) {
    e.preventDefault;


    // this.props.history.push(`/projects/new`)

  }




  // thumbSelect(e) {
  //   e.preventDefault;
  //   this.setState({
  //     showPictureIndex: i
  //   })
  // }

  render() {
    //user the picture index to show  
    return (
      <div className='index-page'>
        <div className='projects-title-div'>
          <h1 className="main-headers">Assigned Tasks</h1>
        </div>
        <div className='projects-index-container'>
          {this.props.assignedTasks.map((assignedTask) => {
            return (
              <div className='project-cover-container'>
                <Link className='project-cover-container' to={`/projects/${project.id}`}><img className='project-cover-picture' src={`${project.imageUrl}`} alt="" /></Link>
              </div>
            )
          })}
        </div>
        <div className='User-tasks'>
          <h1 className="main-headers">User Tasks</h1>
        </div>
        <div className='projects-index-container'>
          {this.props.projects.map((project) => {
            return (
              <div className='project-cover-container'>
                <Link className='project-cover-container' to={`/projects/${project.id}`}><img className='project-cover-picture' src={`${project.imageUrl}`} alt="" /></Link>
              </div>
            )
          })}
        </div>

        <div className='footer-create-button-container'>
          <button className="create-project-button" onClick={this.handleSubmit.bind(this)}>CREATE YOUR PROJECT</button>
        </div>
      </div>
    )
  }
}