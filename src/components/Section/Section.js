import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ title, children }) {
    return (
        <div>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
