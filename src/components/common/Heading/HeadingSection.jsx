import PropTypes from 'prop-types';
const HeadingSection = (props) => {
    const { heading, className } = props;
    return (
        <h1 className={`font-sarala text-4xl font-bold ${className}`}>
            {heading}
        </h1>
    );
};

export default HeadingSection;

HeadingSection.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
};
