import { useState } from "react";
import "./filter-select.style.css";
import { filterOptions } from "../../constants/filter";

const FilterSelect = ({ filter, onselect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleOptSelected = (opt) => {
        onselect(opt);
        toggle();
    };

    return (
        <div className="dropdown-list-container">
            <div className="dropdown-selected-opt" onClick={toggle}>
                {filter ? (
                    <div className="selected-item">
                        <img
                            className="selected-item-img"
                            src={filter.iconSrc}
                            alt={filter.label + " icon"}
                        />
                        <p className="selected-item-label">{filter.label}</p>
                    </div>
                ) : (
                    <>Select your news</>
                )}
                <div className="arrow-down" />
                {isOpen && (
                    <ul className="dropdown-list">
                        {filterOptions.map((option) => (
                            <li
                                key={Math.random()}
                                className="dropdown-item"
                                onClick={() => handleOptSelected(option)}
                            >
                                <img
                                    className="dropdown-item-img"
                                    src={option.iconSrc}
                                    alt={option.label + " icon"}
                                />
                                <p className="dropdown-item-label">
                                    {option.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FilterSelect;
