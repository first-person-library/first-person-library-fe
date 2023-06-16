import { Link } from 'react-router-dom';
import { useOfficialInfo } from '../../contexts/OfficialInfoContext';
import Icon from '../UI/Icon';

export default function ProfileDropdown() {
  const { officialEmail } = useOfficialInfo();

  return (
    <ul className="absolute right-0 top-full py-3 w-40 rounded-lg bg-white z-40 shadow-lg">
      <li className="dropdown-li">
        <Icon
          src="/icon/mycomment.png"
          alt="My 코멘트"
          className="icon w-6 mr-2"
        />
        <Link to="/">My 코멘트</Link>
      </li>
      <li className="dropdown-li">
        <Icon
          src="/icon/settings.png"
          alt="내 정보"
          className="icon w-6 mr-2"
        />
        <Link to="/">내 정보</Link>
      </li>
      <li className="dropdown-li">
        <Icon src="/icon/help.png" alt="문의하기" className="icon w-6 mr-2" />
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${officialEmail}`}
          target="_blank"
          rel="nooperner noreferrer"
        >
          문의하기
        </a>
      </li>
      <li className="dropdown-li">
        <Icon src="/icon/logout.png" alt="로그아웃" className="icon w-6 mr-2" />
        <Link to="/">로그아웃</Link>
      </li>
    </ul>
  );
}
