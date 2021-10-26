import { Component } from 'react';
import style from './Checkbox.module.css'

export default class Checkbox extends Component {

   contentUnchecked = 'X';
   contentChecked = 'V';

   constructor(props) {
      super(props);
      this.state = {checked : props.checked}
   }

   render () {
      if (this.state.checked) {
         return <button type="button" className={style.check} onClick={this.check}>
         {this.contentChecked}
        
      </button>   
      } else {
         return <button type="button" className={style.uncheck} onClick={this.uncheck}>
         {this.contentUnchecked}
         </button>
      }
   }

   uncheck() {
      this.setState({checked :!this.state.checked});
   }

   check() {
      this.setState({checked :!this.state.checked});
   }

 
}