import Link from 'next/link';

const Recette = (props) => {
    const { recette } = props;
    const { id, title } = recette;

    console.log("ID", id);
    return (
        <>
            <Link href="/recette/[id]" as={`/recette/${id}`}>
                <a href="https://nextjs.org/learn" className="card">
                    <h3>{title} &rarr;</h3>
                    <p>une recette a decouvrir</p>
                </a>
            </Link>
        </>
    )
}

export default Recette;