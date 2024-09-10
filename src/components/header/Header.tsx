import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.onboarding}>
        <a className={style.signupButton} href="/signup">
          Kjøp berg-og-dalbane-strikkekurs her!
        </a>
      </div>
    </header>
  );
};
