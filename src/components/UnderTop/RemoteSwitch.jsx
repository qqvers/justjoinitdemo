import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function RemoteSwitch() {
  const { remoteValue, setRemoteValue } = useContext(MyContext);
  function switchHandler() {
    setRemoteValue(!remoteValue);
  }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (remoteValue !== false) {
  //     navigate({ pathname: "/", search: `remote=${remoteValue}` });
  //   } else {
  //     navigate({ pathname: "/", search: `` });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [remoteValue]);

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
