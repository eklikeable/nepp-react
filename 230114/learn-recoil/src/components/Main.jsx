import { useTranslation } from 'react-i18next';

function Main() {
  const { t, i18n } = useTranslation();
  const changeLngToKo = () => i18n.changeLanguage('ko');
  const changeLngToEn = () => i18n.changeLanguage('en');
  return (
    <div>
      <h2>language : {i18n.language}</h2>
      <h3>{t('welcome')}</h3>
      <h3>{t('hello world')}</h3>
      <button onClick={changeLngToKo}>한글로 변경</button>
      <button onClick={changeLngToEn}>영어로 변경</button>
    </div>
  );
}

export default Main;
