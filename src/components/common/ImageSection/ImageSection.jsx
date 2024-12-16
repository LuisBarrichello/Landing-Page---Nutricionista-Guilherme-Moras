import PropTypes from 'prop-types';

const ImageSection = ({ image, alt }) => (
    <div className="md:inline-block md:w-1/2 xl:w-1/3">
        <div className="w-full h-full overflow-hidden aspect-square md:aspect-[1.35/1.5] rounded-lg">
            <img
                className="transition-transform duration-500 hover:scale-105 w-full h-full object-cover object-top"
                src={image}
                alt={alt}
            />
        </div>
    </div>
);

ImageSection.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
};

export default ImageSection;
