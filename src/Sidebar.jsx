function Sidebar(props) {
  const { isShowSidebar } = props
  return (
    <div className={isShowSidebar ? "sidebar active" : "sidebar"}>
      Sidebar
    </div>
  );
}

export default Sidebar;
