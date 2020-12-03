import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import capitalizeFirstLetter from '../capitalizeFirstLetter/capitalizeFirstLetter';

const Statistics = ({ options, total, positivePercentage }) => {
    return (
        <div className={s.list}>
            {Object.keys(options).map(item => (
                <p className={s.item} key={item}>
                    {capitalizeFirstLetter(item)}: {options[item]}
                </p>
            ))}
            <p className={s.item}>Total: {total}</p>
            <p className={s.item}>Positive feedback: {positivePercentage} %</p>
        </div>
    );
};

Statistics.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;
