import { useElementSize } from "usehooks-ts";

import { Render } from "./render";
import { RenderTree } from "./render-tree";

export const Graph = () => {
  const [ref, { height, width }] = useElementSize();

  return (
    <div className="container" ref={ref}>
      <Render height={height} width={width} />
      {/* <RenderTree height={height} width={width} /> */}
    </div>
  );
};
