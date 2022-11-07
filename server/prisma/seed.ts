import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.game.create({
        data: {
            date: '2022-11-20T16:00:00.000Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T13:00:00.000Z',
            firstTeamCountryCode: 'GB-ENG',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T16:00:00.000Z',
            firstTeamCountryCode: 'SN',
            secondTeamCountryCode: 'NL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T19:00:00.000Z',
            firstTeamCountryCode: 'US',
            secondTeamCountryCode: 'GB-WLS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T10:00:00.000Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T13:00:00.000Z',
            firstTeamCountryCode: 'DK',
            secondTeamCountryCode: 'TN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T16:00:00.000Z',
            firstTeamCountryCode: 'MX',
            secondTeamCountryCode: 'PL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T19:00:00.000Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T10:00:00.000Z',
            firstTeamCountryCode: 'MA',
            secondTeamCountryCode: 'HR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T13:00:00.000Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'JP',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T16:00:00.000Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'CR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T19:00:00.000Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T10:00:00.000Z',
            firstTeamCountryCode: 'CH',
            secondTeamCountryCode: 'CM',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T13:00:00.000Z',
            firstTeamCountryCode: 'UY',
            secondTeamCountryCode: 'KR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T16:00:00.000Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T19:00:00.000Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T10:00:00.000Z',
            firstTeamCountryCode: 'GB-WLS',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T13:00:00.000Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'SN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T16:00:00.000Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T19:00:00.000Z',
            firstTeamCountryCode: 'GB-ENG',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T10:00:00.000Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T13:00:00.000Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T16:00:00.000Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T19:00:00.000Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T10:00:00.000Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'CR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T13:00:00.000Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'MA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T16:00:00.000Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T19:00:00.000Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T10:00:00.000Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T13:00:00.000Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T16:00:00.000Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T19:00:00.000Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'UY',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00.000Z',
            firstTeamCountryCode: 'EC',
            secondTeamCountryCode: 'SN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00.000Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'QA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00.000Z',
            firstTeamCountryCode: 'IR',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00.000Z',
            firstTeamCountryCode: 'GB-WLS',
            secondTeamCountryCode: 'GB-ENG',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00.000Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'FR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00.000Z',
            firstTeamCountryCode: 'AU',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T16:00:00.000Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'AR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T16:00:00.000Z',
            firstTeamCountryCode: 'SA',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00.000Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'BE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00.000Z',
            firstTeamCountryCode: 'MA',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00.000Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'ES',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00.000Z',
            firstTeamCountryCode: 'CR',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00.000Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'PT',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00.000Z',
            firstTeamCountryCode: 'GH',
            secondTeamCountryCode: 'UY',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00.000Z',
            firstTeamCountryCode: 'RS',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00.000Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'BR',
        }
    })

}
main()

