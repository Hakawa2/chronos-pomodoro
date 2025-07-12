import styles from './Container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
