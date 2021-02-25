import Link from 'next/link';

const Recette = (props) => {
    const { recette } = props;
    const { id, title } = recette;

    return (
        <>
            <Link href="/recipie/[id]" as={`/recipie/${id}`}>
                <a href="" className="card">
                    <h3>{title} &rarr;</h3>
                    <p>une recette a decouvrir</p>
                </a>
            </Link>
        </>
    )
}

export default Recette;