import React, { Component } from 'react'

export default class Category extends Component {

  state = {
    data: [],
    country: '',
  }

  async componentDidMount() {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => this.setState({ data: json }))


    console.log(this.state.data)
  }

  render() {
    const { data } = this.state

    return (
      <div className='container'>
        <h2 className='c-text'>Category name</h2>
          <div className='row'>
            {data.map((data) => {
              return (
                <div className='col-sm-12 col-md-4'>
                  <div className="card">
                    <img src={data.image} alt="Avatar" className='img-fluid' style={{ width: "200px", height: "200px" }} />
                    <div className="container">
                      <h4>{data.title}</h4>
                      <p>{data.price}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>

    )
  }
}
