import { Outlet } from 'react-router-dom'
import SidebarLayout from './SidebarLayout';
import NavBarLayout from './NavBarLayout';
function PrivateLayouts() {
  return (
    <div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <NavBarLayout />
          <main>
            <Outlet />
          </main>
        </div>
        <SidebarLayout />
      </div>
    </div>

  )
}

export default PrivateLayouts