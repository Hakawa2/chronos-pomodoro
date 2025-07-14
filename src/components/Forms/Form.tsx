import { IconConstants } from '../../constants';
import type { Fields } from '../../types';
import { Button } from '../Button';
import { Input } from '../Input';

type FormProps = {
  children?: React.ReactNode;
  buttonLabel?: string;
  fields?: Fields[];
};

export function Form({ children }: FormProps) {
  return (
    <form className='d-flex center column gap-medium'>
      <div className='d-flex center column'>
        <Input labelText='Input' id={'input'} />
      </div>

      {children}

      <Button
        icon={IconConstants.Play}
        aria-label='Iniciar ciclo'
        mode='start'
      />
    </form>
  );
}
