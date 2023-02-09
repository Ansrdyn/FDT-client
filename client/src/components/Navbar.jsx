import logo from '../assets/navbar-logo.png'
export default function Navbar(){
    return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light mx-4">
  {/* <!-- Container wrapper --> */}
<i class="bi bi-list" style={{fontSize: "1.5rem"}}></i>
    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand me-2">
      <img
        src={logo}
        height="110"
        width="110"
        alt="Logo"
        loading="lazy"
        style={{marginTop: "-1px"}}
      />
    </a>

    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      {/* search  */}
      <div class="container-fluid">
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </form>
  </div>
      {/* <!-- Left links --> */}

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-primary me-3 rounded-0" style={{background: "#db284e", border: "0", fontSize: "1.2rem"}}>
          Login/SignUp
        </button>
   
      </div>
    </div>
    {/* <!-- Collapsible wrapper --> */}
  {/* <!-- Container wrapper --> */}
</nav>
    </>
    )
}