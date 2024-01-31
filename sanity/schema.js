import { experience } from './schemas/experience'
import { project } from './schemas/project'
import { pageInfo } from './schemas/pageInfo'
import { skill } from './schemas/skill'
import { social } from './schemas/social'

export const schema = {
  types: [pageInfo, experience, project, skill, social],
}
