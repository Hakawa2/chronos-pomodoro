import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading/Heading';

export function App() {
  return (
    <>
      <Heading>
        Olá oswaldo
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptatem veniam, quia ex laborum itaque ab rerum consequatur vitae
        corporis quos, nulla a neque fugit? At consequatur sit quia et!
      </p>
    </>
  );
}
