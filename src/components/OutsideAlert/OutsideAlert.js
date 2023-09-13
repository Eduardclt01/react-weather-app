import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { setShouldShowCityList } from "../../context/cityListSlice";
import { useDispatch } from "react-redux";

function useOutsideAlerter(ref) {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setShouldShowCityList(false));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
