import db, {UserCreateArgs} from 'db'

export default async function createUser(args: UserCreateArgs) {
  const user = await db.user.create(args)

  return user
}
