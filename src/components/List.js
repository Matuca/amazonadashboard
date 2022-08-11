import React, { useEffect, useState } from "react";
import "../assets/css/list.css";

export default function List() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/productos");

        if (!response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`);
        }

        const data = await response.json();
        const publicaciones = data.products;
        console.log(publicaciones);

        setProductos(publicaciones);
      } catch (error) {}
    }
    fetchProducts();
  }, []);

  return (
    <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Actions</div>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/list">
              <i className="fas fa-fw fa-folder"></i>
              <span>List</span>
            </a>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4 listContainer">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Listado de productos
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row" style={{width: "900px"}}>
                        {
                          productos.map((producto, i) => {
                            return (
                              <div key={i} className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                  <div className="card-body">{producto.name}</div>
                                </div>
                              </div>
                            )
                            
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  );
}

/* 
{productos.map((product, i) => {
    return  <div className='productContainer' key={i}>
    <p className='productTitle'> {product.name}  </p>
    <p className='productPrice'> {product.precio}  </p>
</div>
})}
*/
