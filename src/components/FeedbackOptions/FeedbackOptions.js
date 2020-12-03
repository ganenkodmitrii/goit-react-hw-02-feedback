import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../capitalizeFirstLetter/capitalizeFirstLetter';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.boxButton}>
            {Object.keys(options).map(item => (
                <button
                    type="button"
                    className={s.button}
                    key={item}
                    onClick={() => onLeaveFeedback(item)}
                >
                    {capitalizeFirstLetter(item)}
                </button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
