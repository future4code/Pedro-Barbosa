## Exercício 1

* a) Resposta natural do banco de dados. A primeira posição da array é a que
há as informações desejadas. No result[0][0], há um segundo array indicando a 
posição da array da qual contém o objeto que queremos.

* b) const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}';
  `);

	return result[0][0];
};

* c) const countGenderActors = async (gender: string) : Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";
    `);
    const count = result[0][0].count;
    return count;
};

## Exercício 2

* a) const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

* b) const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 

* c) const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

## Exercício 3

* a) app.get("/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id: string = req.params.id;
        const result = await getActorById(id);

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}

* b) app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countGenderActors(req.query.gender as string);
    res.status(200).send(count[0]);
  } catch (err) {
    res.status(500).send(error.sqlMessage || error.message)
  }
});

## Exercício 4

* a) app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
   res.status(500).send(error.sqlMessage || error.message)
  }
});

* b) app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(500).send(error.sqlMessage || error.message)
  }
});