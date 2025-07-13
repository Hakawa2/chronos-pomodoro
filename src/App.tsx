import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { MenuIconsMock } from './mocks/layout';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu itemList={MenuIconsMock} />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
