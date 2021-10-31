import { IUser, UserModel } from '../../users/user.model';

describe('user test', () => {
  it('can be created correctly', async () => {
    // expect that two assertios will be made
    expect.assertions(1)
    // create new user model instance
    const user = new UserModel();

    expect(user).toBeNull();
  });
});