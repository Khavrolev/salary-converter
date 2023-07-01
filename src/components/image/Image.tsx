import styles from "./Image.module.scss";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return <img src={src} alt={alt} className={styles.image} />;
}

export default Image;
