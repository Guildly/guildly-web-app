import styles from "../styles/components/Input.module.css";

interface TextInputProps {
  className: string;
  content: string;
  setContent: (e: string) => void;
  label: string | undefined;
  icon: string | null;
}

export function ShortTextInput({
  className,
  content,
  setContent,
  label,
  icon,
}: TextInputProps) {
  return (
    <div className={className}>
      <div className={styles.group}>
        <input
          className={styles.input}
          type="text"
          required
          value={content}
          placeholder={label}
          onChange={(event) => {
            if (event.target.value.length < 32) setContent(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export function LongTextInput({
  className,
  content,
  setContent,
  label,
  icon,
}: TextInputProps) {
  return (
    <div className={className}>
      <div className={styles.group}>
        <input
          className={styles.input}
          type="text"
          required
          value={content}
          placeholder={label}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}
