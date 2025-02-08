import WhastsappButton from '../SecondaryButtons/WhastsappButton';
import BackToTopButton from '../SecondaryButtons/BackToTopButton';

const FloatingButtons = () => {
    return (
        <div className="fixed right-5 bottom-5 flex flex-col justify-center items-center gap-4">
            <WhastsappButton />
            <BackToTopButton />
        </div>
    );
};

export default FloatingButtons;
