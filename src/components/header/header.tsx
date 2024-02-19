import './header.scss';
import { changeLanguage } from '../../slice/languageSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

type Props = {
  readonly children: JSX.Element;
};

export function Header({ children }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  function handleLanguageChange(language: 'english' | 'spanish') {
    dispatch(changeLanguage(language));
  }

  return (
    <>
      <div className="language">
        <button onClick={() => handleLanguageChange('english')}>
          <img src="./usa.png" alt="English Language" width={25} height={25} />
        </button>
        <button onClick={() => handleLanguageChange('spanish')}>
          <img
            src="./spain_flag.png"
            alt="Spanish Language"
            width={25}
            height={25}
          />
        </button>
      </div>
      <header>
        <h1>Curriculum Camilo Isaza Gómez</h1>
        {children}
      </header>
    </>
  );
}
