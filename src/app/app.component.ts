import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = {
    headData: {
      isEnabled: true,
      name: "Lorem Ipsum Dolor Lorem",
      title: ["Lorem", "Lorem", "Lorem", "Lorem"],
      email: "loren@ipsum.com",
      github: "lorem123",
      twitter: "@lorem",
      linkedIn: "Lorem Ipsum Dolor",
      youtube: "Lorem Ipsum Dolor",
      mobileNo: '0123456789'
    },
    interestedData: {
      isEnabled: true,
      records: [
        {
          positions: [ "Lorem", "Lorem ipsum", "Lorem", "Lorem","Lorem","Lorem" ],
          locations: ["Lorem", "Lorem", "Lorem", "Lorem","Lorem","Lorem","Lorem","Lorem"]
        },
      ]
    },
    summaryData: {
      isEnabled: true,
      details: [
        {
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
      ]

    },
    projectsData: {
      isEnabled: false,
      records: [
        {
          projectName: "Lorem ipsum dolor",
          projectDescription: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua",
          technologies: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
        },
        {
          projectName: "Lorem ipsum dolor",
          projectDescription: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua,Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua",
          technologies: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
        }
      ]
    },
    experienceData: {
      isEnabled: true,
      records: [
        {
          organisation: "Lorem ipsum dolor sit amet",
          positions: [
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            }
          ],
        },
        {
          organisation: "Lorem ipsum dolor sit amet",
          positions: [
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            },
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            },
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            }
          ],
        },
        {
          organisation: "Lorem ipsum dolor sit amet",
          positions: [
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            },
            {
              designation: "Lorem ipsum dolor",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              startDate: "(12/12/1234)",
              endDate: "(12/12/1235)"
            }
          ],
        },
      ]
    },
    educationData: {
      isEnabled: true,
      records: [
        {
          institute: "Lorem ipsum dolor sit amet",
          award: "Lorem ipsum dolor",
          programme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          startDate: "12/12/1234",
          endDate: "12/12/1235"
        },
        {
          institute: "Lorem ipsum dolor sit amet",
          award: "Lorem ipsum dolor",
          programme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          startDate: "12/12/1234",
          endDate: "12/12/1235"
        }
      ]
    },
    certificationData: {
      isEnabled: true,
      records: [
        {
          title: "Lorem ipsum dolor sit amet",
          awardingBody: "Lorem ipsum dolor",
          year: "2015"
        },
        {
          title: "Lorem ipsum dolor ",
          awardingBody: "Lorem ipsum dolor",
          year: "2016"
        }
      ]
    },
    publicationData: {
      isEnabled: true,
      records: [
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
          link: "http://lorem.com"
        },
        {
          title: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
          link: "http://lorem.com"
        }
      ]
    },
    extraData: {
      isEnabled: true,
      extra1: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      extra2: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      extra3: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      extra4: "Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua."
    },
    nonRelatedData: {
      isEnabled: true,
      details: [
        {
          name: 'Lorem ipsum dolor',
          title: 'Lorem ipsum dolor sit amet, ut labore et',
          companyName: 'Lorem ipsum',
          telephoneNo: '0123456789',
          email: 'lorem@ipsum.com'
        },
        {
          name: 'Lorem ipsum dolor',
          title: 'Lorem ipsum dolor sit amet, ut labore et',
          companyName: 'Lorem ipsum',
          telephoneNo: '0123456789',
          email: 'lorem@ipsum.com'
        }
      ]
    },
    techHistoryData: {
      isEnabled: true,
      records: [
        {
          technology: "Lorem ",
          startDate: "12/12/1234",
          endDate: "12/12/1235",
          months: "11"
        },
        {
          technology: "Lorem ",
          startDate: "12/12/1234",
          endDate: "12/12/1235",
          months: "05"
        },
        {
          technology: "Lorem ",
          startDate: "12/12/1234",
          endDate: "12/12/1235",
          months: "6"
        },
        {
          technology: "Lorem ",
          startDate: "12/12/1234",
          endDate: "12/12/1235",
          months: "11"
        }
      ]
    }

  };
}