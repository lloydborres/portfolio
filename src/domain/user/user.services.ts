import type { IUserRepository } from "@infrastructure";
import type { IUser } from "./user.types";

interface IUserService {
  getUser(): Promise<IUser | undefined>;
}

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(): Promise<IUser | undefined> {
    const user = await this.userRepository.getFirstUser();
    return user;
  }
}

export default UserService;
export type { IUserService };
