import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOption from "./components/AddOption";
import OptionGroupBox from "./components/OptionGroupBox";
import FormInput from "../../Atoms/FormInput/FormInput";
import {
  addMiniSurveyOptionGroup,
  addMiniSurveyPostTitle,
} from "../../../features/picklyPosts/picklyPostsSlice";

const OptionGroup = () => {
  const [addOptionGroup, setAddOptionGroup] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const miniSurvey = useSelector(
    (state) => state.picklyPosts.postEdit.miniSurvey
  );
  useEffect(() => {
    setAddOptionGroup(miniSurvey.optionGroup);
    setInputVal(miniSurvey.postTitle);
  }, []);
  useEffect(() => {
    dispatch(addMiniSurveyOptionGroup(addOptionGroup));
  }, [addOptionGroup]);
  const addOptionGroupHandler = () => {
    const numbers = "1000";
    const randId = Math.floor(Math.random() * numbers);
    setAddOptionGroup([
      ...addOptionGroup,
      {
        id: randId,
        optionName: "",
        optionInpVals: [
          { id: 1, value: "" },
          { id: 2, value: "" },
        ],
      },
    ]);
  };
  const removeOptionGroupHandler = (e) => {
    setAddOptionGroup(
      addOptionGroup.filter((box) => box.id.toString() !== e.target.id)
    );
  };
  const optionNameHandler = (e) => {
    setAddOptionGroup(
      addOptionGroup.map((optionGroup) => {
        if (e.target.id === optionGroup.id.toString()) {
          optionGroup = { ...optionGroup, optionName: e.target.value };
        }
        return optionGroup;
      })
    );
  };

  return (
    <div className="flex flex-col">
      <div className="mb-m">
        <FormInput
          withLabel={false}
          inputVal={inputVal}
          setInputVal={setInputVal}
          changed={(e) => setInputVal(e.target.value)}
          blur={() => dispatch(addMiniSurveyPostTitle(inputVal))}
        />
      </div>
      {addOptionGroup.map((box) => (
        <OptionGroupBox
          key={box.id}
          click={removeOptionGroupHandler}
          id={box.id}
          groupName={box.optionName}
          blured={optionNameHandler}
          addOptionGroup={addOptionGroup}
          setAddOptionGroup={setAddOptionGroup}
        />
      ))}
      <AddOption click={addOptionGroupHandler} />
    </div>
  );
};

export default OptionGroup;
