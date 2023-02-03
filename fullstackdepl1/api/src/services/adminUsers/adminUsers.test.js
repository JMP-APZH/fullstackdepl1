import {
  adminUsers,
  adminUser,
  createAdminUser,
  updateAdminUser,
  deleteAdminUser,
} from './adminUsers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('adminUsers', () => {
  scenario('returns all adminUsers', async (scenario) => {
    const result = await adminUsers()

    expect(result.length).toEqual(Object.keys(scenario.adminUser).length)
  })

  scenario('returns a single adminUser', async (scenario) => {
    const result = await adminUser({ id: scenario.adminUser.one.id })

    expect(result).toEqual(scenario.adminUser.one)
  })

  scenario('creates a adminUser', async () => {
    const result = await createAdminUser({
      input: { name: 'String', avatar: 'String', age: 8610291 },
    })

    expect(result.name).toEqual('String')
    expect(result.avatar).toEqual('String')
    expect(result.age).toEqual(8610291)
  })

  scenario('updates a adminUser', async (scenario) => {
    const original = await adminUser({
      id: scenario.adminUser.one.id,
    })
    const result = await updateAdminUser({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a adminUser', async (scenario) => {
    const original = await deleteAdminUser({
      id: scenario.adminUser.one.id,
    })
    const result = await adminUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
