import PropTypes from 'prop-types';

const CardReview = (props) => {
    const { image, name, profession, review, className } = props;

    return (
        <div
            className={`${className} w-full flex flex-col justify-between md:max-w-80 lg:md:max-w-96 bg-white p-6 shadow-boxShadowCardReview rounded-md text-gray-500 gap-4`}>
            <figure className="w-16 h-16 overflow-hidden rounded-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </figure>
            <p className="text-lg text-gray-600">{review}</p>
            <div>
                <h2>{name}</h2>
                <h3>{profession}</h3>
            </div>
        </div>
    );
};

CardReview.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default CardReview;
