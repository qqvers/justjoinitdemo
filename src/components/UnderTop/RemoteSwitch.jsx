import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function RemoteSwitch() {
  const { remoteValue, setRemoteValue } = useContext(MyContext);
  function switchHandler() {
    setRemoteValue(!remoteValue);
  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={switchHandler} checked={remoteValue} />
        <span className="slider round"></span>
        <p>Remote</p>
      </label>
    </>
  );
}
