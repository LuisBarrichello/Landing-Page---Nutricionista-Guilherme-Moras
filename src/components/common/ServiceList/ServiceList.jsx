import PropTypes from 'prop-types';
const ServiceList = ({ services }) => (
    <div className="w-full flex flex-col gap-1 md:items-start items-center">
        <h3 className="text-lg text-gray-500 font-bold">Serviços:</h3>
        <ul className="list-disc list-inside text-start text-gray-500">
            {services.map((service, index) => (
                <li key={index}>{service}</li>
            ))}
        </ul>
    </div>
);

ServiceList.propTypes = {
    services: PropTypes.array.isRequired,
}

export default ServiceList;