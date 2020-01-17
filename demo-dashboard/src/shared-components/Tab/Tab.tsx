import classnames from "classnames";
import React, {
  FC,
  Children,
  ReactNode,
  useState,
  isValidElement
} from "react";

interface Props {
  initialIndex?: number;
  children: ReactNode;
}

const Tab: FC<Props> = ({ initialIndex = 0, children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  const handleClick = (event: any) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setActiveIndex(index);
  };

  const renderList = (child: ReactNode, index: number) => {
    if (!isValidElement(child)) {
      return child;
    }

    const { title, value } = child.props;
    const conditionalClass = {
      "border-b-2 border-checker-primary": index === activeIndex
    };

    return (
      <button
        className={classnames("font-semibold py-2 mr-4", conditionalClass)}
        onClick={handleClick}
        data-index={index}
      >
        <h3>
          {title}
          {value && (
            <span className="font-normal text-gray-600"> ({value})</span>
          )}
        </h3>
      </button>
    );
  };

  const renderContent = (child: ReactNode, index: number) => {
    if (!isValidElement(child)) {
      return child;
    }

    return index === activeIndex ? child.props.children : null;
  };

  return (
    <div>
      <div className="flex border-b">{Children.map(children, renderList)}</div>
      <div className="mt-8">{Children.map(children, renderContent)}</div>
    </div>
  );
};

export default Tab;
