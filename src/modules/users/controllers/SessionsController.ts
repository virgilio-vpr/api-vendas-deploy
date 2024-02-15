import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(request: Request, reponse: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = new CreateSessionsService();

    const user = await createSession.execute({
      email,
      password,
    });

    return reponse.json(user);
  }
}
