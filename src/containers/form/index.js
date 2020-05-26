import React from 'react'
import { Layout, Input} from 'antd';
import store from '../../store';
import { ADD, EDIT, DELETE} from '../../modules/bookReducer';

const {Content} = Layout;

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      endDate: '',
      writerName: '',
      timeUsed: '',
      imageUrl: ''
    }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit = (event) => {
    alert('Book submitted ' + this.state.bookName);
    event.preventDefault();
    store.dispatch(add_book(this.state));
  }

  render = () => (
    <Layout className="layout">
      <Content>
        <h1 className="header">Books Form</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <p>Book name:</p>
            <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleChange}/>
            <p>Finish reading date:</p>
            <input type="text" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
            <p>Writer name:</p>
            <input type="text" name="writerName" value={this.state.writerName} onChange={this.handleChange}/>
            <p>Time used:</p>
            <input type="text" name="timeUsed" value={this.state.timeUsed} onChange={this.handleChange}/>
            <p>Image url:</p>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Content>
    </Layout>
  );
}

export const add_book = (bookData) => {
  return dispatch => {
    dispatch({
      type: ADD,
      data: bookData
    })
  }
}

export const delete_book = (bookId) => {
  return {
    type: DELETE,
    id: bookId
  }
}

export const edit_book = (bookId, bookData) => {
  return {
    type: EDIT,
    id: bookId,
    data: bookData
  }
}

export const handleDeleteBook = (bookId) => {
  alert('delete book id: '+ bookId)
  store.dispatch(delete_book(bookId))
}

export default Form
