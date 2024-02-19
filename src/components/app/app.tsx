import { MenuOption } from '../../types/menuOptions';
import { Footer } from '..//footer/footer';
import { Header } from '..//header/header';

import { Menu } from '../menu/menu';
import { Router } from '../router/router';

export function App() {
  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'My Projects', path: '/projects' },
  ];
  return (
    <>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}
