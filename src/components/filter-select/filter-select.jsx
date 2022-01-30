import "./filter-select.style.css";
import { filterOptions } from "../../constants/filter";

function FilterSelect() {
    return (
        <div className="dropdown-list-container">
            <div className="dropdown-selected-opt">
                Select your news
                <div className="arrow-down"></div>
            </div>
            <ul className="dropdown-list">
                {filterOptions.map((option) => (
                    <li key={Math.random()} className="dropdown-item">
                        <img
                            className="dropdown-item-img"
                            src={option.iconSrc}
                            alt={option.label + " icon"}
                        />
                        <p className="dropdown-item-label">{option.label}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterSelect;
