import PropTypes from 'prop-types';

import capitalizeFirstLetter from '../capitalizeFirstLetter/capitalizeFirstLetter';

const Statistics = ({ options, total, positivePercentage }) => {
    return (
        <div>
            {Object.keys(options).map(item => (
                <p
                    style={{
                        color: 'white',
                    }}
                    key={item}
                >
                    {capitalizeFirstLetter(item)}: {options[item]}
                </p>
            ))}
            <p
                style={{
                    color: 'white',
                }}
            >
                Total: {total}
            </p>
            <p
                style={{
                    color: 'white',
                }}
            >
                Positive feedback:
                {positivePercentage}%
            </p>
        </div>
    );
};

Statistics.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;
