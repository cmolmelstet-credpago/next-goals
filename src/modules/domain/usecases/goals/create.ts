import { Goals } from '@modules/domain/models';

export interface GoalsParams {
  name: string;
  finishAt: Date;
  description?: string;
  amount?: number;
  image?: string;
}

export interface CreateGoals {
  create(params: GoalsParams): Promise<Goals>
}
