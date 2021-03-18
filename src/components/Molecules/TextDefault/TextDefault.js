import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOption from "./components/AddOption";
import OptionInput from "./components/OptionInput";
import FormInput from "../../Atoms/FormInput/FormInput";
import {
  addTextPollFavourites,
  addTextPollPostTitle,
} from "../../../features/picklyPosts/picklyPostsSlice";

const TextDefault = (props) => {
  const { addOptionGroup, setAddOptionGroup, optionBox } = props;
  const [addOption, setAddOption] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const textPoll = useSelector((state) => state.picklyPosts.postEdit.textPoll);
  useEffect(() => {
    if (addOptionGroup) {
      addOptionGroup.map((optionGroup) => {
        if (optionGroup.id.toString() === optionBox.current.id) {
          setAddOption(optionGroup.optionInpVals);
        }
        return optionGroup;
      });
    } else {
      setAddOption(textPoll.favourites);
      setInputVal(textPoll.postTitle);
    }
  }, []);
  // const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  //  Alphabet letters
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  const addOptionHandler = () => {
    const numbers = "1000";
    const randId = Math.floor(Math.random() * numbers);
    setAddOption([...addOption, { id: randId, value: "" }]);
  };
  const removeOptionHandler = (e) => {
    setAddOption(
      addOption.filter((item) => item.id.toString() !== e.target.id)
    );
  };
  const inputValHandler = (e) => {
    setAddOption(
      addOption.map((option) => {
        if (e.target.id === option.id.toString()) {
          option = { ...option, value: e.target.value };
        }
        return option;
      })
    );
  };
  const handleOptionData = () => {
    if (setAddOptionGroup) {
      setAddOptionGroup(
        addOptionGroup.map((optionGroup) => {
          if (optionGroup.id.toString() === optionBox.current.id) {
            optionGroup = { ...optionGroup, optionInpVals: addOption };
          }
          return optionGroup;
        })
      );
    }
    dispatch(addTextPollFavourites(addOption));
  };
  return (
    <div className="flex flex-col">
      {!addOptionGroup && (
        <div className="mb-m">
          <FormInput
            withLabel={false}
            inputVal={inputVal}
            setInputVal={setInputVal}
            changed={(e) => setInputVal(e.target.value)}
            blur={() => dispatch(addTextPollPostTitle(inputVal))}
          />
        </div>
      )}
      <div className="flex flex-col w-full">
        {addOption.map((item, index) => {
          const letter = letters[index];
          return (
            <OptionInput
              key={item.id}
              id={item.id}
              alpha={letter}
              value={item.value}
              click={removeOptionHandler}
              index={index}
              addOption={addOption}
              changed={inputValHandler}
              blured={handleOptionData}
            />
          );
        })}
      </div>
      <AddOption click={addOptionHandler} />
    </div>
  );
};
export default TextDefault;
