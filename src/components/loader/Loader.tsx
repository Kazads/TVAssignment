import { Spin } from "antd";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [slow, setSlow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSlow(true);
    }, 3000);
    return () => setSlow(false);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <Spin style={{ fontSize: "50px" }} data-testid={"loader"} />
      <br />
      {slow ? <>This is taking a longer time then expected...</> : undefined}
    </div>
  );
};
