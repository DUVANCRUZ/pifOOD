import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import Step from "../../components/Step/Step";

export default function Steps() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  const detail = useSelector((state) => state.detail);
  const steps = detail.steps // Si detail.steps[0]?.steps no está definido, asignamos un array vacío
  return (
    <div>
      {steps &&  (
        steps.map((step, index) => (
          <Step key={index} step={step} />
        ))
      ) 
      }
    </div>
  );
}
