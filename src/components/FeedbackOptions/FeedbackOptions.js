import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../capitalizeFirstLetter/capitalizeFirstLetter';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {Object.keys(options).map(item => (
                <button
                    type="button"
                    style={{ marginRight: '5px' }}
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
