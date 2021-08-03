import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import NewTicketPrompt1 from './NewTicketPrompt1';
import NewTicketPrompt2 from './NewTicketPrompt2';
import NewTicketPrompt3 from './NewTicketPrompt3';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false
      formVisibleOnPage: 0
    };
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }

  handleClick = () => {
    if (this.state.formVisibleOnPage === 4) {
      this.setState(prevState => ({
        formVisibleOnPage: prevState.formVisibleOnPage = 0
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: prevState.formVisibleOnPage +=1
      }));
    }
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage ===0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    } else if (this.state.formVisibleOnPage ===1) {
      currentlyVisibleState = <NewTicketPrompt1 />
      buttonText = "Are you sure?"
    } else if (this.state.formVisibleOnPage ===2) {
      currentlyVisibleState = <NewTicketPrompt2 />
      buttonText = "Super sure??"
    } else if (this.state.formVisibleOnPage ===3) {
      currentlyVisibleState = <NewTicketPrompt3 />
      buttonText= "Pinky Promise??"
    } else {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    );
  }
  // render(){
  //   let currentlyVisibleState = null;
  //   let buttonText = null;
  //   if (this.state.formVisibleOnPage) {
  //     currentlyVisibleState = <NewTicketForm />
  //     buttonText = "Return to Ticket List";
  //   } else {
  //     currentlyVisibleState = <TicketList />
  //     buttonText = "Add Ticket";
  //   }
  //   return (
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.handleClick}>{buttonText}</button>
  //     </ React.Fragment>
  //   );
  // }

}

export default TicketControl;