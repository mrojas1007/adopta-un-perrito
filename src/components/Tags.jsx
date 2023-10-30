import Badge from "react-bootstrap/Badge"; 
const Tags = ({colorTags, textTags}) => {
    return (
        <>
        <Badge bg={colorTags}>{textTags}</Badge>
        </>
    );
};

export default Tags;