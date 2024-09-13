import { Link } from "react-router-dom";

function Header({ currentUser }) {
  return (
    <header className="flex sticky top-0 px-10 py-8 backdrop-blur-sm justify-between">
      <Link className="text-3xl font-bold no-underline text-red-500" to="/">
        NETFLEX
      </Link>

      <div className="flex items-center gap-x-4">
        {currentUser === null ? (
          <>
            <Link to="/sign-up" className="no-underline text-white font-medium">
              회원가입
            </Link>
            <Link to="/log-in" className="no-underline text-white font-medium">
              로그인
            </Link>
          </>
        ) : (
          <>
            <Link to="/my-page" className="no-underline text-white font-medium">
              마이 페이지
            </Link>
            <p>{currentUser.nickname}님, 환영합니다~!</p>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
