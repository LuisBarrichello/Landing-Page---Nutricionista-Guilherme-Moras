import PropTypes from 'prop-types';

const ContentSection = (props) => {
    const { content } = props;
    return <p className="font-inter text-gray-500 text-lg">{content}</p>;
};

export default ContentSection;

ContentSection.propTypes = {
    content: PropTypes.string,
};
