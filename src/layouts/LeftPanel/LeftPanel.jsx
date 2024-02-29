import styles from './LeftPanel.module.scss';

const LeftPanel = ({ children }) => {
  return <div className={styles['left-panel']}>{children}</div>;
};

export default LeftPanel;
