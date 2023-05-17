export default function Pagination(props) {

    const getPages = () => {
        const result = [];
        for (let i = 0; i < props.totalPages; i++) {
            let page =  i+1;
            result.push(
                <a onClick={() =>
                    props.onChange(page)}
                    className={props.page === page ? 'active' : ''} >{page}</a>);
        }
        return result;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página {props.page} de {props.totalPages}:</span>
                {getPages()}
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
}