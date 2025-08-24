// import type { IUser } from "./user.types";

// class UserEntity implements IUser {
//   public id: string;
//   public name: string;
//   public title: string;
//   public description: string;
//   public email?: string | undefined;
//   public github?: string | undefined;
//   public linkedin?: string | undefined;

//   constructor({
//     id,
//     name,
//     title,
//     description,
//     email,
//     github,
//     linkedin,
//   }: {
//     id: string;
//     name: string;
//     title: string;
//     description: string;
//     email?: string;
//     github?: string;
//     linkedin?: string;
//   }) {
//     this.id = id;
//     this.name = name;
//     this.title = title;
//     this.description = description;
//     this.email = email;
//     this.github = github;
//     this.linkedin = linkedin;
//   }

//   toObject() {
//     return {
//       id: this.id,
//       name: this.name,
//       title: this.title,
//       description: this.description,
//       email: this.email,
//       github: this.github,
//       linkedin: this.linkedin,
//     };
//   }
// }

// export default UserEntity;
