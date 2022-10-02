import { memo, useEffect } from "react";

import { getElementFactory, getElementIds } from "./elements.selectors";
import { useSelector } from "../../app/hooks";

type ElementProps = {
  id: string;
};

type ElementsProps = {
  now: number;
};

const Element = memo(({ id }: ElementProps) => {
  const getElement = getElementFactory(id);
  const element = useSelector(getElement);

  useEffect(() => console.info("render item"));

  return (
    <span>
      <strong>{element.id}:</strong> {element.name}
    </span>
  );
});

export const Elements = ({ now }: ElementsProps) => {
  const elementIds = useSelector((state) => getElementIds(state));

  useEffect(() => console.info("render items"));

  return (
    <>
      <h1>{new Date(now).toLocaleTimeString()}</h1>

      <ul>
        {elementIds.map((id) => (
          <li key={id}>
            <Element id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
