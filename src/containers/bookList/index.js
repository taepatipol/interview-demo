import React from 'react'
import { Layout} from 'antd';
import store from '../../store';
const {Content} = Layout;

class BookList extends React.Component {
  
  render = () => (
  <Layout className="layout">
    <Content>
      <h1 className="header">Books List</h1>
      <div className="container">
        <p>
        
        </p>

      </div>
    </Content>
  </Layout>
  )
}

export default BookList
