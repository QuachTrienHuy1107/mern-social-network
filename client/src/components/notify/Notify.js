import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Validate from "./Validate";

export default function Notify() {
    const { notify } = useSelector((state) => state);
    console.log(notify);

    return (
        <div>
            {notify.loading && <Loading />}
            {notify.error && <Validate />}
        </div>
    );
}
