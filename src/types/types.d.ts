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
  readonly zipcode?: string;
  readonly todos: ITodo[];
  readonly posts: IPost[];
}

interface IExtendedUser extends IUser {
  readonly hasUncompleteTodos: boolean;
}

type UpdateTodoDto = { completed: boolean };
type CreateTodoDto = { title: string };
type CreateUserDto = { name: string; email: string };
type TodoEventEmitterType = { id: number; completed: boolean };
type CreatePostDto = { title: string; body?: string };

interface ValidationArguments {
  value: any;
  constraints: any[];
  targetName: string;
  object: object;
  property: string;
}

type BadRequestErrorType = {
  statusCode: number;
  message?: string | ((validationArguments: ValidationArguments) => string);
  error: string;
};
