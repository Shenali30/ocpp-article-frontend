export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const TEST_RESPONSES = {
  USER_LOGIN: {
    userDetails: {
      username: 'Eshan_001',
      email: 'eshan98kavinda@gmail.com',
      title: 'Mr.',
      name: 'Eshan',
      scope: 'ADMIN',
      promptPasswordChange: false,
    },
    tokenDto: {
      accessToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJyb2xlIjoiQURNSU4iLCJleHAiOjE3MTQzMjAyMjEsImlhdCI6MTcxNDMxODQyMSwidXNlcm5hbWUiOiJFc2hhbl8wMDEiLCJhY3RpdmVTZXNzaW9uSWQiOiIyOWFhNWMxNi03YzYyLTRlYjMtYmIxNC04YmFmMGUwYWJmNjYifQ.uafnAg6njCHGIj-KPK9TlaRdSrcYCAkanp0rUeNt8gwUNDgXROkCw9N7krJ8HtX_N2xG4KeJ6VBE7BEM_pKFbQ',
      expiresIn: 1800000,
      refreshTokenAt: '2024-04-28T22:03:41',
      refreshToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIX1RPS0VOIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzE0MzIyMDIxLCJpYXQiOjE3MTQzMTg0MjEsInVzZXJuYW1lIjoiRXNoYW5fMDAxIiwiYWN0aXZlU2Vzc2lvbklkIjoiMjlhYTVjMTYtN2M2Mi00ZWIzLWJiMTQtOGJhZjBlMGFiZjY2In0._ewbiToX7ocNDYkMsrhxb0uuZ8LxRNKK_MLb3Xw3Rh5tt3bjvIGb5uhg0q8bmW8jYKA_wxtUPpRSYyS8p11TRQ',
    },
    permissions: {
      modules: [
        {
          id: 1,
          name: 'Dashboard',
        },
        {
          id: 2,
          name: 'FamilyBook.Create',
        },
        {
          id: 3,
          name: 'FamilyBook.View',
        },
        {
          id: 4,
          name: 'FamilyBook.Edit',
        },
        {
          id: 5,
          name: 'Novenas.View',
        },
        {
          id: 6,
          name: 'Novenas.Edit',
        },
        {
          id: 7,
          name: 'Zones.View',
        },
        {
          id: 8,
          name: 'Zones.Edit',
        },
        {
          id: 9,
          name: 'Assistance.ViewFamilies',
        },
        {
          id: 10,
          name: 'Assistance.Categories',
        },
        {
          id: 11,
          name: 'Celebrations',
        },
        {
          id: 12,
          name: 'Users.Create',
        },
        {
          id: 13,
          name: 'Users.View',
        },
        {
          id: 14,
          name: 'Users.Edit',
        },
        {
          id: 15,
          name: 'Baptism Certificate',
        },
        {
          id: 16,
          name: 'Marriage Certificate',
        },
        {
          id: 17,
          name: 'Death Certificate',
        },
      ],
      churches: [
        {
          id: 'STJ-KA',
          name: "St. Joseph's Church, Kanuwana",
        },
      ],
    },
    baseResponse: {
      responseHeader: {
        responseCode: '00',
        responseDesc: 'Success',
        displayDesc: 'User Logged In Successfully',
        timestamp: '2024-04-28T21:03:41.883485300',
      },
    },
  },
  REFRESH_TOKEN: {
    userDetails: {
      username: 'Eshan_001',
      email: 'eshan98kavinda@gmail.com',
      title: 'Mr.',
      name: 'Eshan',
      scope: 'ADMIN',
      promptPasswordChange: false,
    },
    tokenDto: {
      accessToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJyb2xlIjoiQURNSU4iLCJleHAiOjE3MTQzMjA5MDksImlhdCI6MTcxNDMxOTEwOSwidXNlcm5hbWUiOiJFc2hhbl8wMDEiLCJhY3RpdmVTZXNzaW9uSWQiOiIyOWFhNWMxNi03YzYyLTRlYjMtYmIxNC04YmFmMGUwYWJmNjYifQ.zVPPDvDufQO2UdVA18L1dEyg07duCnI7lR7mBYaB6-NggZxNXuPiSHHBykI8n5TqiY_91O_KsLzh0iowbFo7JQ',
      expiresIn: 1800000,
      refreshTokenAt: '2024-04-28T22:15:09',
      refreshToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIX1RPS0VOIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNzE0MzIyMDIxLCJpYXQiOjE3MTQzMTg0MjEsInVzZXJuYW1lIjoiRXNoYW5fMDAxIiwiYWN0aXZlU2Vzc2lvbklkIjoiMjlhYTVjMTYtN2M2Mi00ZWIzLWJiMTQtOGJhZjBlMGFiZjY2In0._ewbiToX7ocNDYkMsrhxb0uuZ8LxRNKK_MLb3Xw3Rh5tt3bjvIGb5uhg0q8bmW8jYKA_wxtUPpRSYyS8p11TRQ',
    },
    permissions: {
      modules: [
        {
          id: 1,
          name: 'Dashboard',
        },
        {
          id: 2,
          name: 'FamilyBook.Create',
        },
        {
          id: 3,
          name: 'FamilyBook.View',
        },
        {
          id: 4,
          name: 'FamilyBook.Edit',
        },
        {
          id: 5,
          name: 'Novenas.View',
        },
        {
          id: 6,
          name: 'Novenas.Edit',
        },
        {
          id: 7,
          name: 'Zones.View',
        },
        {
          id: 8,
          name: 'Zones.Edit',
        },
        {
          id: 9,
          name: 'Assistance.ViewFamilies',
        },
        {
          id: 10,
          name: 'Assistance.Categories',
        },
        {
          id: 11,
          name: 'Celebrations',
        },
        {
          id: 12,
          name: 'Users.Create',
        },
        {
          id: 13,
          name: 'Users.View',
        },
        {
          id: 14,
          name: 'Users.Edit',
        },
        {
          id: 15,
          name: 'Baptism Certificate',
        },
        {
          id: 16,
          name: 'Marriage Certificate',
        },
        {
          id: 17,
          name: 'Death Certificate',
        },
      ],
      churches: [
        {
          id: 'STJ-KA',
          name: "St. Joseph's Church, Kanuwana",
        },
      ],
    },
    wish: null,
    baseResponse: {
      responseHeader: {
        responseCode: '00',
        responseDesc: 'Success',
        displayDesc: 'Token Refreshed Successfully',
        timestamp: '2024-04-28T21:15:09.308354200',
      },
    },
  },
};
