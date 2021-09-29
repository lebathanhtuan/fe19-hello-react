export const item = "ahihi";

function Header(props) {
  const { isShowSidebar, setIsShowSidebar } = props;

  return (
    <div className="header">
      <button
        className="toggle-sidebar"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        Show/Hide
      </button>
      Header {item}
    </div>
  );
}

export default Header;
