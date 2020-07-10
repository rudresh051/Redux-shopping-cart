import React from 'react';

export default function SingleItem(props) {
    const {data}=props
    return (
        <div>
             <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item,index) =>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td><img src={item.img} alt={item.name} width="100" height='100' /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
