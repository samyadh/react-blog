import { ReactNode } from "react";

// Type definition for Pagination params
type PaginationParams = {
  children: ReactNode;
  previousBtnProps: {};
  onPreviousClick: () => void;
  onNextClick: () => void;
  nextBtnProps: {};
};

function Pagination({
  onPreviousClick,
  onNextClick,
  previousBtnProps,
  nextBtnProps,
  children,
}: PaginationParams) {
  return (
    <div className="text-center mt-6">
      <button
        // applying all parameters for previous button
        {...previousBtnProps}
        // binding onclick handler
        onClick={onPreviousClick}
        className="text-2xl font-bold mr-10 disabled:opacity-20"
      >
        &lt;
      </button>
      {/* Rendering children from the parent for robustness */}
      {children}
      <button
        {...nextBtnProps}
        onClick={onNextClick}
        className="text-2xl font-bold ml-10 disabled:opacity-20"
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
