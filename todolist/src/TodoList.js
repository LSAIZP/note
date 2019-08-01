import React,{Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAcion, getBtnClickAction,getItemDeleteAction,getInitList } from './store/actionCreator';
import TodoListUI from './TodoListUI';
//import './mock/mockdata';
//import PropTypes from 'prop-types';

class TodoList extends Component{

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
    //console.log(this.state);
  }
  render(){
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list = {this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount(){
    const action = getInitList();
    //console.log(action);
    store.dispatch(action);
  }

  handleInputChange(e){
    const action = getInputChangeAcion(e.target.value);
    //console.log(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleBtnClick(){
    const action = getBtnClickAction();
    store.dispatch(action);
  }

  handleItemDelete(index){
    const action = getItemDeleteAction(index);
    store.dispatch(action)
    //alert(index);
    //console.log(index);
  }
}

// TodoList.propTypes = {
//   data: PropTypes.oneOf([PropTypes.number,PropTypes.string])
// }

export default TodoList;