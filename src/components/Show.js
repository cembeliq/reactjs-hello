import React from "react"
import  { Button, Table } from "antd"
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';
import './../App.less';
import Detail from "../pages/Detail";


class Show extends React.Component {
  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => {
        return (
          <Router>
            <Link to={`/${id}`}>{id}</Link>
            <Routes>
              <Route exact path="/:id" caseSensitive={false} element={<Detail />} />
            </Routes>
          </Router>
          
        )
      },
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'completed',
      key: 'completed',
      render: (completed) => {
        return <p>{completed?'Complete':'In Process'}</p>
      }
    }
  ];
  state = {
    isLoading: true,
    data: [],
    error: null
  };
  getFetchData() {
    this.setState({
      loading: true
    }, () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(result => this.setState({
        loading: false,
        data: result
      })).catch(console.log);
    });
  }
  componentDidMount() {
    this.getFetchData();
  }
  render() {
    const {
      data,
      error
    } = this.state;
    return (
      <div className="show-list">
        <h1>Data Customer</h1>
        {error ? <p>error.message</p> : null}
        <Button type="primary">Tambah</Button>
        <Table columns={this.columns} dataSource={data} />;
      </div>
    );
  }
}

export default Show;