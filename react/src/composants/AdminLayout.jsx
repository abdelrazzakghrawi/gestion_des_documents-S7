import Navbar from '../views/AdminViews/Navbar';
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    // ... your existing logic

    return (
        <div className="admin-layout">
            <Navbar />

            {/* Sidebar (if needed) */}
            <aside className="admin-sidebar">
                {/* Sidebar content like links, menus, or information displays */}
            </aside>

            {/* Main Content Area */}
            <main className="admin-content">
                {/* Outlet will render the specific content based on the route */}
                <Outlet />
            </main>

            {/* Footer (if needed) */}
            <footer className="admin-footer">
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default AdminLayout;
