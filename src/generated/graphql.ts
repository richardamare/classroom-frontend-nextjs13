import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddStudentInput = {
  studentGroupId: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
};

export type AddStudentResult = {
  __typename?: 'AddStudentResult';
  message: Scalars['String']['output'];
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type ChangePasswordResult = {
  __typename?: 'ChangePasswordResult';
  message: Scalars['String']['output'];
};

export type Course = {
  __typename?: 'Course';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** The semester of the course */
  semester: Semester;
  semesterId: Scalars['String']['output'];
  /** The student group of the course */
  studentGroup: StudentGroup;
  studentGroupId: Scalars['String']['output'];
  /** The teacher of the course */
  teacher: Teacher;
  teacherId: Scalars['String']['output'];
  type: CourseType;
};

export type CourseGrade = {
  __typename?: 'CourseGrade';
  basePoints: Scalars['Float']['output'];
  /** The course of the grade */
  course: Course;
  courseId: Scalars['String']['output'];
  finalGrade: Scalars['Float']['output'];
  points: Scalars['Float']['output'];
  semesterId: Scalars['String']['output'];
  studentId: Scalars['String']['output'];
};

export enum CourseType {
  Lab = 'LAB',
  Lecture = 'LECTURE',
  Other = 'OTHER',
  Project = 'PROJECT',
  Seminar = 'SEMINAR'
}

export type CreateCourseInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  semesterId: Scalars['String']['input'];
  studentGroupId: Scalars['String']['input'];
  teacherId: Scalars['String']['input'];
  type: CourseType;
};

export type CreateCourseResult = {
  __typename?: 'CreateCourseResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateGradeInput = {
  basePoints: Scalars['Float']['input'];
  courseId: Scalars['String']['input'];
  semesterId: Scalars['String']['input'];
  students: Array<StudentGradeInput>;
  title: Scalars['String']['input'];
};

export type CreateGradeResult = {
  __typename?: 'CreateGradeResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateOfficeInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreateParentInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
};

export type CreateSemesterInput = {
  endDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type CreateSemesterResult = {
  __typename?: 'CreateSemesterResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateStudentGroupInput = {
  name: Scalars['String']['input'];
  semesterId: Scalars['String']['input'];
  teacherId?: InputMaybe<Scalars['String']['input']>;
  type: StudentGroupType;
};

export type CreateStudentGroupResult = {
  __typename?: 'CreateStudentGroupResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateTeacherInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreateUserResult = {
  __typename?: 'CreateUserResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type Grade = {
  __typename?: 'Grade';
  basePoints: Scalars['Float']['output'];
  courseId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  semesterId: Scalars['String']['output'];
  students: Array<GradeStudent>;
  title: Scalars['String']['output'];
};

export type GradeStudent = {
  __typename?: 'GradeStudent';
  basePoints: Scalars['Float']['output'];
  formattedPoints: Scalars['String']['output'];
  notClassified: Scalars['Boolean']['output'];
  notPresent: Scalars['Boolean']['output'];
  note: Scalars['String']['output'];
  points: Scalars['Float']['output'];
  studentId: Scalars['String']['output'];
};

export type ListCourseGradeInput = {
  semesterId: Scalars['String']['input'];
};

export type ListCourseInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  semesterId: Scalars['String']['input'];
  studentGroupId?: InputMaybe<Scalars['String']['input']>;
  teacherId?: InputMaybe<Scalars['String']['input']>;
};

export type ListGradeInput = {
  courseId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  semesterId: Scalars['String']['input'];
};

export type ListSemesterInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type ListStudentGroupInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  semesterId: Scalars['String']['input'];
};

export type ListStudentInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type ListTeacherInput = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a student to a student group */
  addStudent: AddStudentResult;
  /** Change current user password */
  changePassword: ChangePasswordResult;
  /** Create a new course */
  createCourse: CreateCourseResult;
  /** Create a grade */
  createGrade: CreateGradeResult;
  /** Create an user with office role */
  createOffice: CreateUserResult;
  /** Create an user with parent role */
  createParent: CreateUserResult;
  /** Create a new semester */
  createSemester: CreateSemesterResult;
  /** Create an user with student role */
  createStudent: CreateUserResult;
  /** Create a new student group */
  createStudentGroup: CreateStudentGroupResult;
  /** Create an user with teacher role */
  createTeacher: CreateUserResult;
  /** Login with email and password */
  login: LoginResult;
  /** Remove a student from a student group */
  removeStudent: RemoveStudentResult;
  /** Update a semester */
  updateSemester: UpdateSemesterResult;
};


export type MutationAddStudentArgs = {
  input: AddStudentInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationCreateGradeArgs = {
  input: CreateGradeInput;
};


export type MutationCreateOfficeArgs = {
  input: CreateOfficeInput;
};


export type MutationCreateParentArgs = {
  input: CreateParentInput;
};


export type MutationCreateSemesterArgs = {
  input: CreateSemesterInput;
};


export type MutationCreateStudentArgs = {
  input: CreateTeacherInput;
};


export type MutationCreateStudentGroupArgs = {
  input: CreateStudentGroupInput;
};


export type MutationCreateTeacherArgs = {
  input: CreateTeacherInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveStudentArgs = {
  input: RemoveStudentInput;
};


export type MutationUpdateSemesterArgs = {
  input: UpdateSemesterInput;
};

export type Parent = {
  __typename?: 'Parent';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get the current student */
  currentStudent: Student;
  /** Get the current user */
  currentUser: User;
  /** Get a course by id */
  getCourse: Course;
  /** Get the parent by id */
  getParent: Parent;
  /** Get a semester by id */
  getSemester: Semester;
  /** Get the student by id */
  getStudent: Student;
  /** Get a student group by id */
  getStudentGroup: StudentGroup;
  /** Get the teacher by id */
  getTeacher: Teacher;
  /** List course grades */
  listCourseGrades: Array<CourseGrade>;
  /** List all courses */
  listCourses: Array<Course>;
  /** List grades */
  listGrades: Array<Grade>;
  /** List all semesters */
  listSemesters: Array<Semester>;
  /** List all student groups */
  listStudentGroups: Array<StudentGroup>;
  /** List all students */
  listStudents: Array<Student>;
  /** List all teachers */
  listTeachers: Array<Teacher>;
};


export type QueryGetCourseArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetParentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSemesterArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetStudentArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetStudentGroupArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTeacherArgs = {
  id: Scalars['String']['input'];
};


export type QueryListCourseGradesArgs = {
  input: ListCourseGradeInput;
};


export type QueryListCoursesArgs = {
  input: ListCourseInput;
};


export type QueryListGradesArgs = {
  input: ListGradeInput;
};


export type QueryListSemestersArgs = {
  input: ListSemesterInput;
};


export type QueryListStudentGroupsArgs = {
  input: ListStudentGroupInput;
};


export type QueryListStudentsArgs = {
  input: ListStudentInput;
};


export type QueryListTeachersArgs = {
  input: ListTeacherInput;
};

export type RemoveStudentInput = {
  studentGroupId: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
};

export type RemoveStudentResult = {
  __typename?: 'RemoveStudentResult';
  message: Scalars['String']['output'];
};

export type Semester = {
  __typename?: 'Semester';
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type Student = {
  __typename?: 'Student';
  /** The courses of the student */
  courses: Array<Course>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** The student groups of the student */
  studentGroups: Array<StudentGroup>;
};

export type StudentGradeInput = {
  notClassified: Scalars['Boolean']['input'];
  notPresent: Scalars['Boolean']['input'];
  note: Scalars['String']['input'];
  points: Scalars['Float']['input'];
  studentId: Scalars['String']['input'];
};

export type StudentGroup = {
  __typename?: 'StudentGroup';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Semester of the student group */
  semester: Semester;
  semesterId: Scalars['String']['output'];
  studentIds: Array<Scalars['String']['output']>;
  /** Students of the student group */
  students: Array<Student>;
  /** Teacher of the student group */
  teacher?: Maybe<Teacher>;
  teacherId?: Maybe<Scalars['String']['output']>;
  type: StudentGroupType;
};

export enum StudentGroupType {
  Class = 'CLASS',
  Group = 'GROUP'
}

export type Teacher = {
  __typename?: 'Teacher';
  /** The courses of where the teacher teaches */
  courses: Array<Course>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** The student classes where the teacher is class teacher */
  studentGroups: Array<StudentGroup>;
};

export type UpdateSemesterInput = {
  endDate: Scalars['DateTime']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type UpdateSemesterResult = {
  __typename?: 'UpdateSemesterResult';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: string } } };

export type CreateTeacherMutationVariables = Exact<{
  input: CreateTeacherInput;
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', createTeacher: { __typename?: 'CreateUserResult', id: string, message: string } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: string } };

export type ListSemestersQueryVariables = Exact<{
  input: ListSemesterInput;
}>;


export type ListSemestersQuery = { __typename?: 'Query', listSemesters: Array<{ __typename?: 'Semester', id: string, name: string, startDate: any, endDate: any }> };

export type ListCoursesQueryVariables = Exact<{
  input: ListCourseInput;
}>;


export type ListCoursesQuery = { __typename?: 'Query', listCourses: Array<{ __typename?: 'Course', id: string, name: string, description: string, studentGroup: { __typename?: 'StudentGroup', id: string, name: string }, teacher: { __typename?: 'Teacher', id: string, fullName: string } }> };

export type ListTeachersQueryVariables = Exact<{
  input: ListTeacherInput;
}>;


export type ListTeachersQuery = { __typename?: 'Query', listTeachers: Array<{ __typename?: 'Teacher', id: string, firstName: string, lastName: string, email: string, fullName: string }> };

export type ListStudentsQueryVariables = Exact<{
  input: ListStudentInput;
}>;


export type ListStudentsQuery = { __typename?: 'Query', listStudents: Array<{ __typename?: 'Student', id: string, firstName: string, lastName: string, email: string, fullName: string }> };

export type ListStudentGroupsQueryVariables = Exact<{
  input: ListStudentGroupInput;
}>;


export type ListStudentGroupsQuery = { __typename?: 'Query', listStudentGroups: Array<{ __typename?: 'StudentGroup', id: string, name: string, type: StudentGroupType, teacher?: { __typename?: 'Teacher', id: string, fullName: string } | null }> };

export type GetTeacherQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTeacherQuery = { __typename?: 'Query', getTeacher: { __typename?: 'Teacher', id: string, firstName: string, lastName: string, email: string, fullName: string, courses: Array<{ __typename?: 'Course', id: string, name: string, description: string, studentGroup: { __typename?: 'StudentGroup', id: string, name: string } }> } };

export type GetStudentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetStudentQuery = { __typename?: 'Query', getStudent: { __typename?: 'Student', id: string, firstName: string, lastName: string, email: string, fullName: string } };

export type GetStudentGroupQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetStudentGroupQuery = { __typename?: 'Query', getStudentGroup: { __typename?: 'StudentGroup', id: string, name: string, type: StudentGroupType, teacher?: { __typename?: 'Teacher', id: string, fullName: string } | null, students: Array<{ __typename?: 'Student', id: string, firstName: string, lastName: string, email: string, fullName: string }> } };

export type GetCourseQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCourseQuery = { __typename?: 'Query', getCourse: { __typename?: 'Course', id: string, name: string, description: string, studentGroup: { __typename?: 'StudentGroup', id: string, name: string }, teacher: { __typename?: 'Teacher', id: string, fullName: string } } };

export type ListCourseGradesQueryVariables = Exact<{
  input: ListCourseGradeInput;
}>;


export type ListCourseGradesQuery = { __typename?: 'Query', listCourseGrades: Array<{ __typename?: 'CourseGrade', points: number, basePoints: number, finalGrade: number, course: { __typename?: 'Course', id: string, name: string, teacher: { __typename?: 'Teacher', id: string, fullName: string }, studentGroup: { __typename?: 'StudentGroup', id: string, name: string } } }> };

export type GetCourseAsTeacherQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCourseAsTeacherQuery = { __typename?: 'Query', getCourse: { __typename?: 'Course', id: string, name: string, description: string, studentGroup: { __typename?: 'StudentGroup', id: string, name: string, students: Array<{ __typename?: 'Student', id: string, fullName: string }> }, teacher: { __typename?: 'Teacher', id: string, fullName: string } } };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
    user {
      id
      firstName
      lastName
      email
      role
    }
  }
}
    `;
export const CreateTeacherDocument = gql`
    mutation createTeacher($input: CreateTeacherInput!) {
  createTeacher(input: $input) {
    id
    message
  }
}
    `;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    email
    firstName
    lastName
    role
  }
}
    `;
export const ListSemestersDocument = gql`
    query listSemesters($input: ListSemesterInput!) {
  listSemesters(input: $input) {
    id
    name
    startDate
    endDate
  }
}
    `;
export const ListCoursesDocument = gql`
    query listCourses($input: ListCourseInput!) {
  listCourses(input: $input) {
    id
    name
    description
    studentGroup {
      id
      name
    }
    teacher {
      id
      fullName
    }
  }
}
    `;
export const ListTeachersDocument = gql`
    query listTeachers($input: ListTeacherInput!) {
  listTeachers(input: $input) {
    id
    firstName
    lastName
    email
    fullName
  }
}
    `;
export const ListStudentsDocument = gql`
    query listStudents($input: ListStudentInput!) {
  listStudents(input: $input) {
    id
    firstName
    lastName
    email
    fullName
  }
}
    `;
export const ListStudentGroupsDocument = gql`
    query listStudentGroups($input: ListStudentGroupInput!) {
  listStudentGroups(input: $input) {
    id
    name
    teacher {
      id
      fullName
    }
    type
  }
}
    `;
export const GetTeacherDocument = gql`
    query getTeacher($id: String!) {
  getTeacher(id: $id) {
    id
    firstName
    lastName
    email
    fullName
    courses {
      id
      name
      description
      studentGroup {
        id
        name
      }
    }
  }
}
    `;
export const GetStudentDocument = gql`
    query getStudent($id: String!) {
  getStudent(id: $id) {
    id
    firstName
    lastName
    email
    fullName
  }
}
    `;
export const GetStudentGroupDocument = gql`
    query getStudentGroup($id: String!) {
  getStudentGroup(id: $id) {
    id
    name
    teacher {
      id
      fullName
    }
    type
    students {
      id
      firstName
      lastName
      email
      fullName
    }
  }
}
    `;
export const GetCourseDocument = gql`
    query getCourse($id: String!) {
  getCourse(id: $id) {
    id
    name
    description
    studentGroup {
      id
      name
    }
    teacher {
      id
      fullName
    }
  }
}
    `;
export const ListCourseGradesDocument = gql`
    query listCourseGrades($input: ListCourseGradeInput!) {
  listCourseGrades(input: $input) {
    course {
      id
      name
      teacher {
        id
        fullName
      }
      studentGroup {
        id
        name
      }
    }
    points
    basePoints
    finalGrade
  }
}
    `;
export const GetCourseAsTeacherDocument = gql`
    query getCourseAsTeacher($id: String!) {
  getCourse(id: $id) {
    id
    name
    description
    studentGroup {
      id
      name
      students {
        id
        fullName
      }
    }
    teacher {
      id
      fullName
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation');
    },
    createTeacher(variables: CreateTeacherMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTeacherMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTeacherMutation>(CreateTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTeacher', 'mutation');
    },
    currentUser(variables?: CurrentUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentUserQuery>(CurrentUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentUser', 'query');
    },
    listSemesters(variables: ListSemestersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListSemestersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListSemestersQuery>(ListSemestersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listSemesters', 'query');
    },
    listCourses(variables: ListCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListCoursesQuery>(ListCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listCourses', 'query');
    },
    listTeachers(variables: ListTeachersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTeachersQuery>(ListTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listTeachers', 'query');
    },
    listStudents(variables: ListStudentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListStudentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListStudentsQuery>(ListStudentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listStudents', 'query');
    },
    listStudentGroups(variables: ListStudentGroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListStudentGroupsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListStudentGroupsQuery>(ListStudentGroupsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listStudentGroups', 'query');
    },
    getTeacher(variables: GetTeacherQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTeacherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTeacherQuery>(GetTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTeacher', 'query');
    },
    getStudent(variables: GetStudentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStudentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStudentQuery>(GetStudentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStudent', 'query');
    },
    getStudentGroup(variables: GetStudentGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStudentGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStudentGroupQuery>(GetStudentGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStudentGroup', 'query');
    },
    getCourse(variables: GetCourseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseQuery>(GetCourseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourse', 'query');
    },
    listCourseGrades(variables: ListCourseGradesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListCourseGradesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListCourseGradesQuery>(ListCourseGradesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listCourseGrades', 'query');
    },
    getCourseAsTeacher(variables: GetCourseAsTeacherQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCourseAsTeacherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseAsTeacherQuery>(GetCourseAsTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCourseAsTeacher', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;