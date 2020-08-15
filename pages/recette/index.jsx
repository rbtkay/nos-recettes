import { PrismaClient } from "@prisma/client";

const RecipieIndex = () => {
  return (
    <div>
      <main>Hello World;</main>
    </div>
  );
};

export async function getServerSideProps({ res }) {
  const prisma = new PrismaClient();
  const recipies = await prisma.recipie.findMany();

  console.log(recipies);
  return { props: {} };
}

export default RecipieIndex;
