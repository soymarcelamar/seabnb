const PictureCard = ({ src }) => {
    return (
        <div className="PictureCover">
            <img src={src} alt="Stay cover" className="Picture" />
        </div>
    );
};

export default PictureCard;