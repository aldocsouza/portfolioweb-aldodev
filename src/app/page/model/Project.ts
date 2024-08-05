export interface Project{
  image: string,
  name: string,
  description: string,
  languages: string[],
  linkDeploy: string,
  present?: boolean,
  backend?: boolean
}
