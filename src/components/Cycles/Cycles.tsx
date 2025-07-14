import styles from './Cycles.module.css';

export function Cycles() {
  return (
    <div className={`${styles.cycles} d-flex center column`}>
      <p>Ciclos:</p>
      <div className={`${styles.cyclesDots} d-flex center`}>
        <span className={styles.cycleDot} />
      </div>
    </div>
  );
}
