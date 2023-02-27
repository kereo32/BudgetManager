import React from 'react';

type Props = {
  setIsModalOpen: (prevState: boolean) => void;
};

export function SubmitButton(props: Props) {
  return (
    <div className="flex flex-row justify-center">
      <button
        onClick={() => {
          props.setIsModalOpen((prevState) => !prevState);
        }}
        className="bg-pepe-red text-white px-4 py-2 w-[33%] justify-center rounded-md"
      >
        Add Expense
      </button>
    </div>
  );
}
