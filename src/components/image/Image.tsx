import styles from "./Image.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function Image({ src, alt }: Props) {
  return <img src={src} alt={alt} className={styles.image} />;
}
