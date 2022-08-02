import React, { useEffect, useState } from "react";
import "./assets/css/app.css";

function App() {

  const [categorias, setCategorias] = useState([]);
  const [totalCategorias, setTotalCategorias] = useState(0);
  const [totalProductos, setTotalProductos] = useState(0);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  
  const [ultimaPublicacion, setUltimaPublicacion] = useState([]);
  const [categoriaUltimaPublicacion, setcategoriaUltimaPublicacion] = useState([]);
  const [usuarioUltimaPublicacion, setusuarioUltimaPublicacion] = useState([]);

  useEffect(() => {

    async function fetchProducts() {

      await fetch("http://localhost:3000/api/productos")
      .then((response) => {
        if (!response.ok) {
            throw new Error(
                "Http error status 400."
        )};
        return response.json();
      })
      .then(data => {
        console.log(data.lastAdded.categorias)
        setcategoriaUltimaPublicacion(data.lastAdded.categorias)
        setusuarioUltimaPublicacion(data.lastAdded.usuarios)
        setUltimaPublicacion(data.lastAdded)
        setCategorias(data.countByCategory)
        setTotalCategorias(data.countByCategory.length)
        setTotalProductos(data.products.length)
      })

    }

    async function fetchUsers() {

      await fetch("http://localhost:3000/api/usuarios")
      .then((response) => {
        if (!response.ok) {
            throw new Error(
                "Http error status 400."
        )};
        return response.json();
      })
      .then(data => {
        setTotalUsuarios(data.data.length)
      })

    }

    fetchUsers();
    fetchProducts();
  
  }, [])



  return (
    <main>
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
            <a className="nav-link collapsed" href="/">
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="alertsDropdown"
                  >
                    <i className="fas fa-bell fa-fw"></i>

                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="messagesDropdown"
                  >
                    <i className="fas fa-envelope fa-fw"></i>

                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="userDropdown"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Walter White
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={require("./assets/images/dummy-avatar.jpg")}
                      width="60"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {" "}
                            Productos publicados
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {totalProductos}
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            {" "}
                            Amount in products
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $546.456
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Usuarios registrados
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {totalUsuarios}
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Publicacion mas reciente:
                      </h6>
                    </div>
                    <div className="card-body">
                      <h4>
                        Titulo: {ultimaPublicacion.titulo}
                      </h4>
                      <p> Categoria: {categoriaUltimaPublicacion.descripcion} </p>
                      <p> Precio: {ultimaPublicacion.precio} </p>
                      <p> Usuario: {usuarioUltimaPublicacion.usuario}  </p>
                      <p> Email: {usuarioUltimaPublicacion.email} </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Total categorias: {totalCategorias}
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {
                          categorias.map((categoria, i) => {
                            return (
                              <div key={i} className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                  <div className="card-body">{categoria.categoria}</div>
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
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Dashboard 2020</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
