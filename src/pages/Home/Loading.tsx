import React from "react";
import Image from "next/image";
import loadingIcon from "../../assets/icons/loading.svg";

const Loading = () => {
  return (
    <div className="mt-[200px]">
      <Image
        src={loadingIcon}
        alt="loading icon not found"
        className="animate-spin duration-500 w-[70px] h-[70px]"
      />
    </div>
  );
};

export default Loading;
