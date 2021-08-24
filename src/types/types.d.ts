interface IContent {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
}
interface IPost extends IContent {
  readonly body?: string;
}
interface ITodo extends IContent {
  readonly completed: boolean;
}

interface IUser {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly city?: string;
  readonly street?: string;
  readonly zipcode?: number;
  readonly todos: ITodo[];
  readonly posts: IPost[];
}

interface IExtendedUser extends IUser {
  readonly hasUncompleteTodos: boolean;
}
