import PropTypes from 'prop-types';

const ContentSection = (props) => {
    const { content, className } = props;
    return <p className={`font-inter text-gray-500 text-lg ${className}`}>{content}</p>;
};

export default ContentSection;

ContentSection.propTypes = {
    content: PropTypes.string,
    className: PropTypes.string,
};
