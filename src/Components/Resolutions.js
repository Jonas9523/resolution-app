import Resolution from "./Resolution";

const Resolutions = ({resolutions, onDelete, onChange}) => {
    return (
        <>
        {resolutions.map((resolution) => (<Resolution key = {resolution.id}
        resolution = {resolution}
        onDelete = {onDelete}
        onChange= {onChange}
         ></Resolution>))}
        </>
        
    );
}

export default Resolutions;