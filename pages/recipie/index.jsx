import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

import Recette from "../../components/Recette";
import NavigationBar from "../../components/NavigationBar";
import Message from "../../components/Message";

import { PrismaClient } from "@prisma/client";

const RecipieIndex = ({ recipies, maxPages }) => {
  console.log(recipies);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentRecipies, setCurrentRecipies] = useState(recipies);
  const [maxNumberOfPages, setMaxNumberOfPages] = useState(maxPages);

  const nextPage = () => {
    console.log("maxPage", maxNumberOfPages);
    if (currentPage >= maxNumberOfPages - 1) return;
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage == 0) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <NavigationBar />
      <main>
        <div className="container">
          <h1 className="title">Les recettes de Caroline</h1>
          <p className="description">Les meilleurs plats pour tous par tous</p>

          <div className="grid">
            <Button
              className="btn btn-secondary recipieBtn"
              onClick={previousPage}
            >
              <b>{"<"}</b>
            </Button>
            <div className="grid-content">
              {currentRecipies.map((recipie, i) => {
                return <Recette key={i} recette={recipie} />;
              })}
            </div>
            <Button className="btn btn-secondary recipieBtn" onClick={nextPage}>
              <b>{">"}</b>
            </Button>
          </div>

          <br />

          <Link href="/recipie/create">
            <Button className="btn btn-primary">Add a new recipie</Button>
          </Link>
        </div>
      </main>
    </>
  );
};
      // <footer>
      //   {/* <a
      //                   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                   >
      //                   Powered by{' '}
      //                   <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      //                 </a> */}
      // </footer>

export async function getServerSideProps({ res }) {
  const prisma = new PrismaClient();

  // get all recipies
  const result = await prisma.recipie.findMany();

  // convert the result into a serielizable object
  const recipies = result.map((recipie) => {
    return {
      id: recipie.id,
      title: recipie.title,
      description: recipie.description,
      createdAt: recipie.createdAt.toJSON(),
      // ingredients: recipie.ingredientId
    };
  });

  await prisma.$disconnect();

  // pass the recipies to the properties of the page
  return {
    props: {
      recipies,
    },
  };
}

export default RecipieIndex;
