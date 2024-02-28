import { MouseEventHandler } from "react";

type ResetBtnProps = {
    handleReset: MouseEventHandler<HTMLButtonElement>;
};

const ResetBtn = ({handleReset} : ResetBtnProps) => {
  return (
    <div className='resetBtnContent'>
        <button className="resetBtn" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetBtn