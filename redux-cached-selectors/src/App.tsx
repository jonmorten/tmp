import { faker } from "@faker-js/faker";
import { useDispatch } from "./app/hooks";
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

import { actions as thangsActions } from "./features/thangs/thangs.slice";
import { actions as thingsActions } from "./features/things/things.slice";
import { Elements } from "./features/elements/elements";

const makeStuff = () => {
  const length = 100;

  const thangs = Array.from({ length }).map((_, index) => ({
    id: `thang-${index}`,
    name: faker.name.fullName(),
  }));

  const things = Array.from({ length }).map((_, index) => ({
    id: `thing-${index}`,
    name: faker.name.fullName(),
  }));

  return { thangs, things };
};

export const App = () => {
  const dispatch = useDispatch();

  const [now, setNow] = useState(Date.now());

  useInterval(() => {
    setNow(Date.now());
  }, 100);

  useEffect(() => {
    console.info("load stuff");
    const { thangs, things } = makeStuff();
    dispatch(thangsActions.addThangs(thangs));
    dispatch(thingsActions.addThings(things));
  }, []);

  useInterval(() => {
    console.info("reload stuff");
    const { thangs, things } = makeStuff();
    dispatch(thangsActions.addThangs(thangs));
    dispatch(thingsActions.addThings(things));
  }, 10000);

  return (
    <div className="App">
      <Elements now={now} />
    </div>
  );
};
