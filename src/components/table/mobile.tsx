// read global state and display accordingly

import { Text, Button } from "@geist-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { UserList } from "../../stores/core/userList";
import styles from "./mobile.module.css";

export const Mobile: React.FC = function () {
  const { data, isLoading } = useSelector((state: RootState) => state.userList);

  return (
    <tbody>
      {data.map((el) => (
        <tr key={el.id}>
          <Cell {...el} />
        </tr>
      ))}
    </tbody>
  );
};

const Cell: React.FC<UserList> = function ({
  id,
  name,
  username,
  email,
  city,
}) {
  return (
    <tr>
      <div className={styles.main}>
        <p>{id}</p>
        <p>{name}</p>
      </div>
      <div className={styles.info}>
        <span>{username}</span> |<span>{email}</span>
      </div>
      <Text small style={{ color: "#145795" }}>
        {city}
      </Text>
      <div className={styles.info}>
        <Button type="warning-light">edit</Button>
        <Button type="error-light">delete</Button>
      </div>
    </tr>
  );
};
