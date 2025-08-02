import type { Timestamp } from "firebase/firestore";
import type { BaseModel } from "./BaseModel";

interface Position {
  title: string;
  location: string;
  description: string;
  startDate: Timestamp;
  endDate?: Timestamp;
}

interface Experience extends BaseModel {
  companyName: string;
  positions: Position[];
}

export type { Position, Experience };
