function fArrayDocs(array) {
    return (array.map((doc, key) => {
        return (
            <a className="item-docs" href={doc.valor} target="_blank">
                <h3 key={key}> {doc.nome} </h3>
            </a>
        )
    })
    );
}

export default fArrayDocs;