// read global state and display accordingly

import { RootState } from "../../stores";
import { useSelector, useDispatch } from "react-redux";
import styles from "./desktop.module.css";
import { Button, Text, useModal, Modal } from "@geist-ui/react";
import * as React from "react";
import { removeUser, setSortOrder } from "../../stores/core/userList";
import ArrowUp from "@geist-ui/icons/arrowUp";
import ArrowDown from "@geist-ui/icons/arrowDown";

export const Desktop: React.FC = function () {
  const { data, isLoading, sortAsc } = useSelector(
    (state: RootState) => state.userList
  );

  const deleteRef: React.MutableRefObject<number> = React.useRef(-0);

  const dispatch = useDispatch();
  const { visible, setVisible, bindings } = useModal();

  console.log("lsit ", data, isLoading);

  const handleEdit = React.useCallback(() => {
    console.log("editing....");
  }, []);

  const handleDelete = React.useCallback((id: number) => {
    console.log("deleting...");
    deleteRef.current = id;
    setVisible(true);
  }, []);

  const Arrow = React.useMemo(() => (sortAsc ? ArrowUp : ArrowDown), [sortAsc]);

  console.log("modal visibility ", visible);

  return (
    <>
      <>
        <Modal {...bindings}>
          <Modal.Title>Delete</Modal.Title>
          <Modal.Subtitle>This is a modal</Modal.Subtitle>
          <Modal.Content>
            <p>Some content contained within the modal.</p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>
            Cancel
          </Modal.Action>
          <Modal.Action
            type="error-light"
            onClick={() => {
              console.log("DELLLLLLLLLLLL", deleteRef.current);
              dispatch(removeUser(deleteRef.current));
              setVisible(false);
            }}
          >
            Yes, Delete!
          </Modal.Action>
        </Modal>
      </>

      <thead>
        <tr className={styles.head}>
          <th>Id</th>
          <th>Name</th>
          <th>
            Username
            <span>
              <Arrow onClick={() => dispatch(setSortOrder(!sortAsc))} />
            </span>
          </th>
          <th>Email</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, username, email, city }) => (
          <tr key={id}>
            <td>
              <Text p>{id}</Text>
            </td>
            <td>
              <Text p>{name}</Text>
            </td>
            <td>
              <Text p>{username}</Text>
            </td>
            <td>
              <Text p>{email}</Text>
            </td>
            <td>
              <Text p>{city}</Text>
            </td>
            <td>
              <Button
                auto
                width="30%"
                mx="5px"
                type="warning-light"
                onClick={handleEdit}
              >
                edit
              </Button>
            </td>
            <td>
              <Button
                auto
                width="30%"
                mx="5px"
                type="error-light"
                onClick={() => handleDelete(id)}
              >
                delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
