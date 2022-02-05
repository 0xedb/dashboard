import * as React from "react";
import { Mobile } from "./mobile";
import { Desktop } from "./desktop";
import { largerWidth } from "./util";
import styles from "./user.module.css";
import { getUsers } from "../../stores";
import { useSelector, useDispatch } from "react-redux";
import { Button, Text } from "@geist-ui/react";

// remove
// console.log
// maybe add delay(debounce) to event
// solve typescript issues

export const User: React.FC = function () {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);

  const handleResize = React.useCallback((e) => {
    setIsMobile(largerWidth(e.target.innerWidth));
  }, []);

  React.useLayoutEffect(() => {
    const currentWidth = window.innerWidth;
    setIsMobile(largerWidth(currentWidth));

    const listener = window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", listener);
  }, []);

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <table className={`${styles.table} ${isMobile ? "" : styles.desktop}`}>
        <caption>
          <Text>Dashboard</Text>
          <div className={styles.caption}>
            <Text p b>
              User list
            </Text>
            <Button type="success-light">Add new</Button>
          </div>
        </caption>
        {isMobile ? <Mobile /> : <Desktop />}
      </table>
    </div>
  );
};
