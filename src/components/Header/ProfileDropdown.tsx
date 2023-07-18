import { Link, useNavigate } from 'react-router-dom';
import { useOfficialInfo } from '../../contexts/OfficialInfoContext';
import DarkModeIcon from '../UI/DarkModeIcon';
import { useAuthContext } from '../../contexts/AuthContext';

type ProfileDropdownProp = {
  handleDropdown: () => void;
};

export default function ProfileDropdown({
  handleDropdown,
}: ProfileDropdownProp) {
  const { officialEmail } = useOfficialInfo();
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div
      onClick={handleDropdown}
      className="absolute right-0 top-full py-3 w-44 rounded-lg bg-white dark:bg-dark-point z-40 shadow-lg"
    >
      <Link to="/my" className="dropdown-li">
        <DarkModeIcon
          src="mycomment.png"
          alt="내가 쓴 코멘트"
          className="icon w-6 mr-2"
        />
        내가 쓴 코멘트
      </Link>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${officialEmail}`}
        target="_blank"
        rel="nooperner noreferrer"
        className="dropdown-li"
      >
        <DarkModeIcon src="help.png" alt="문의하기" className="icon w-6 mr-2" />
        문의하기
      </a>
      <div className="dropdown-li" onClick={handleLogout}>
        <DarkModeIcon
          src="logout.png"
          alt="로그아웃"
          className="icon w-6 mr-2"
        />
        로그아웃
      </div>
    </div>
  );
}
