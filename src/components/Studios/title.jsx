import './styles.css';

const Title = ({data}) => {
    return(
        <h1 className="title">
            {data.title}
        </h1>
    );
};

export default Title;