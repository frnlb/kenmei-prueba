import React from "react";

export interface PopupProps {
  title?: string;
  content?: string;
  button?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}

const Popup = ({ title, content, button, children }: PopupProps) => {
  return (
    <div>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-30 bg-slate-600 opacity-75"></div>
      <div className="absolute top-1/4 left-0 right-0 z-40 mx-auto transform overflow-hidden rounded-lg bg-slate-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>{children}</div>
        {title && <h1>{title}</h1>}
        {content && <p>{content}</p>}
        {button && <div>{button}</div>}
        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Popup;
