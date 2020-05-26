import React from 'react'
import { Layout} from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
import { handleDeleteBook } from '../form'
const {Content} = Layout;

class BookList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: true
    }
  }

  handleDeleteButton = (bookId) => {
    handleDeleteBook(bookId)
    this.forceUpdate()
  }

  handleEditButton = () => {
    alert('edit')
  }

  bookInstance = (book) => {
    let bookData = book[1]
    return (
      <div key={book[0].toString()}>
        <p>-------</p>
        <p>Book id: {book[0]}</p>
        <p>Book name: {bookData.bookName}</p>
        <p>Finish reading date: {bookData.endDate}</p>
        <p>Writer name: {bookData.writerName}</p>
        <p>Time used: {bookData.timeUsed}</p>
        <p>Cover image:</p>
        <img src={bookData.imageUrl}/>
        <p></p>
        <button type="edit-but" onClick={this.handleEditButton}>Edit</button>
        <button type="del-but" onClick={() => this.handleDeleteButton(book[0])}>Delete</button>
        <p>-------</p>
      </div>
    )
  }
  
  render = () => (
  <Layout className="layout">
    <Content>
      <h1 className="header">Books List</h1>
      <div className="container">
        <div>
          {this.props.bookData.map(this.bookInstance)}
        </div>
      </div>
    </Content>
  </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    bookData: state.bookReducer
  }
}

export default connect(mapStateToProps)(BookList)
