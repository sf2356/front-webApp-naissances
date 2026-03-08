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
    {/* Page content here */}
    <div className="p-4">Page Content</div>
  </div>
<SidebarLayout />
</div>
  <Outlet />
    </div>

  )
}

export default PrivateLayouts;