import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function RemoteSwitch() {
  const { remoteValue, setRemoteValue } = useContext(MyContext);
  function switchHandler() {
    setRemoteValue(!remoteValue);
  }

  return (
    <div className="remote_switch_wrapper">
      <label className="switch">
        <input type="checkbox" onChange={switchHandler} checked={remoteValue} />
        <span className="slider round">
          <p>Remote</p>
        </span>
      </label>
    </div>
  );
}
