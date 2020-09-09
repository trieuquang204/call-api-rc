import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand">Call api</a>
          <ul className="nav navbar-nav">
            <li><a>Trang chu</a></li>
            <li><a>quan ly san pham</a></li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-info" style={{marginBottom:'10px'}}>
                Them san pham
              </button>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3>Danh sach san pham</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Ma</th>
                        <th>Ten</th>
                        <th>Gia</th>
                        <th>Trang thai</th>
                        <th>Hanh dong</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>iphone 6</td>
                        <td>500</td>
                        <td>
                          <span className="label label-warning">
                            Con hang
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-success" type="button">
                            Sua
                          </button>
                          <button className="btn btn-danger" type="button">
                            Xoa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;