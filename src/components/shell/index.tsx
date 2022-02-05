import { StrictMode } from "react";
import styles from "./index.module.css";

// remove
// console.log
// sytle height in nextjs

export const Shell: React.FC = function ({ children }) {
  return (
    <StrictMode>
      <div id="dashboardapp" className={styles.page}>
        {children}
      </div>
    </StrictMode>
  );
};
