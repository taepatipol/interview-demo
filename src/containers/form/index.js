import React from 'react'
import { Layout, Input} from 'antd';
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
  }

  render = () => (
    <Layout className="layout">
      <Content>
        <h1 className="header">Books Form</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <p>Book name:</p>
            <input type="text" name="bookName" onChange={this.handleChange}/>
            <p>Finish reading date:</p>
            <input type="text" name="endDate" onChange={this.handleChange}/>
            <p>Writer name:</p>
            <input type="text" name="writerName" onChange={this.handleChange}/>
            <p>Time used:</p>
            <input type="text" name="timeUsed" onChange={this.handleChange}/>
            <p>Image url:</p>
            <input type="text" name="imageUrl" onChange={this.handleChange}/>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Content>
    </Layout>
  );
}

export default Form
