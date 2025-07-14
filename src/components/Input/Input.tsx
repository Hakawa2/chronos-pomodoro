import styles from './Input.module.css';

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ labelText, id, type = 'text', ...props }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
