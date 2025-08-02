import type { Person } from "../../domain";

interface IPersonRepository {
  getPerson(): Promise<Person | undefined>;
}

export type { IPersonRepository };
