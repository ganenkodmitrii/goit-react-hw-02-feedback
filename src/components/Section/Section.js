import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
        <div>
            {title && (
                <h1
                    style={{
                        color: 'white',
                        margin: '0',
                        padding: '0',
                    }}
                >
                    {title}
                </h1>
            )}
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
