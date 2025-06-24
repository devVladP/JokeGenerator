import styles from "./form.module.css";

type AmountSectionProps = {
  currentValue: number;
  increment: (x: number) => void;
};

export default function AmountSection({
  currentValue,
  increment,
}: AmountSectionProps) {
  function onButtonClick(isIncrement: boolean) {
    const result = currentValue + (isIncrement ? 1 : -1);
    if (result > 10 || result < 1) return;

    increment(result);
  }

  function handleOnChange(newValue: number) {
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 10) {
      increment(newValue);
    }
  }

  return (
    <div className={styles["joke-amount-section"]}>
      <label className={styles["amount-label"]} htmlFor="joke-amount">
        Amount of jokes:{" "}
      </label>
      <button
        disabled={currentValue <= 1}
        type="button"
        className={styles["increment-button"]}
        onClick={() => onButtonClick(false)}
      >
        -
      </button>
      <input
        id={styles["joke-amount"]}
        name="joke-amount"
        type="number"
        min="1"
        max="10"
        value={currentValue}
        onChange={(e) => {
          handleOnChange(parseInt(e.target.value, 10));
        }}
      />
      <button
        disabled={currentValue >= 10}
        type="button"
        className={styles["increment-button"]}
        onClick={() => onButtonClick(true)}
      >
        +
      </button>
    </div>
  );
}
