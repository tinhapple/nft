import React from "react";
import classNames from "classnames";

export default function Button({
  onClick,
  title,
  icon,
  classNameButton,
  classNameTitle,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "bg-purple flex justify-center items-center gap-3 rounded-[20px]",
        classNameButton
      )}    
    >
      <div>
        {icon}
      </div>
      <p
        className={classNames(
          "text-primary font-wordSans font-semibold text-center text-[16px]",
          classNameTitle
        )}
      >
        {title}
      </p>
    </button>
  );
}
