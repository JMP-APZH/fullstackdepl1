import {
  emoticons,
  emoticon,
  createEmoticon,
  updateEmoticon,
  deleteEmoticon,
} from './emoticons'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('emoticons', () => {
  scenario('returns all emoticons', async (scenario) => {
    const result = await emoticons()

    expect(result.length).toEqual(Object.keys(scenario.emoticon).length)
  })

  scenario('returns a single emoticon', async (scenario) => {
    const result = await emoticon({ id: scenario.emoticon.one.id })

    expect(result).toEqual(scenario.emoticon.one)
  })

  scenario('creates a emoticon', async () => {
    const result = await createEmoticon({
      input: { emoticon: 'String' },
    })

    expect(result.emoticon).toEqual('String')
  })

  scenario('updates a emoticon', async (scenario) => {
    const original = await emoticon({
      id: scenario.emoticon.one.id,
    })
    const result = await updateEmoticon({
      id: original.id,
      input: { emoticon: 'String2' },
    })

    expect(result.emoticon).toEqual('String2')
  })

  scenario('deletes a emoticon', async (scenario) => {
    const original = await deleteEmoticon({
      id: scenario.emoticon.one.id,
    })
    const result = await emoticon({ id: original.id })

    expect(result).toEqual(null)
  })
})
