import React from "react";

type Props = {
  text: string;
  icon?: any;
};

const TransBtn = (props: Props) => {
  return (
    <button className=" flex gap-2 font-bold items-center rounded-md border-2 px-5 py-2 text-resGreen border-resGreen">
      {props.icon} {props.text}
    </button>
  );
};

export default TransBtn;
