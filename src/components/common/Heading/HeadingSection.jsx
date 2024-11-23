import PropTypes from 'prop-types';
const HeadingSection = (props) => {
    const { heading } = props;
    return <h1 className="font-sarala text-4xl font-bold">{heading}</h1>;
};

export default HeadingSection;

HeadingSection.propTypes = {
    heading: PropTypes.string,
};
