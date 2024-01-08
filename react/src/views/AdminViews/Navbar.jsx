const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Admin Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/etudiant/list">Etudiants</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Secretaire/list">Secretaire</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Documents">Docs</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
