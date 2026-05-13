function Sidebar() {
  return (
    <div>

      <ul id="menu-list" className="space-y-3">

        <li>
          <NavLink
            id="menu-1"
            to="/dashboard"
            className={menuClass}
          >
            <MdSpaceDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;