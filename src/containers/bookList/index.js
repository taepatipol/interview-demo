import React from 'react'
import { Layout} from 'antd';
import store from '../../store';
import { connect } from 'react-redux';
const {Content} = Layout;

class BookList extends React.Component {

  handleDeleteButton = () => {
    alert('delete')
  }

  handleEditButton = () => {
    alert('edit')
  }

  bookInstance = (book) => {
    let bookData = book[1]
    return (
      <div>
        <p>Book id: {book[0]}</p>
        <p>Book name: {bookData.bookName}</p>
        <p>Finish reading date: {bookData.endDate}</p>
        <p>Writer name: {bookData.writerName}</p>
        <p>Time used: {bookData.timeUsed}</p>
        <p>Image url: {bookData.imageUrl}</p>
        <button type="edit-but" onClick={this.handleEditButton}>Edit</button>
        <button type="del-but" onClick={this.handleDeleteButton}>Delete</button>
      </div>
    )
  }


  
  render = () => (
  <Layout className="layout">
    <Content>
      <h1 className="header">Books List</h1>
      <div className="container">
        <p>
          {this.props.bookData.map(this.bookInstance)}
        </p>

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
