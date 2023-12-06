export const getCommentsData = async () => {
    return [
      {
        _id: "10",
        user: {
          _id: "a",
          name: "Festus Oladipupo",
        },
        desc: "Very Interesting posts. Thanks!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-12-31T17:22:05.092+0000",
      },
      {
        _id: "11",
        user: {
          _id: "b",
          name: "Blessed Akhigbe",
        },
        desc: "Thanks, Festus",
        post: "1",
        parent: "10",
        replyOnUser: "a",
        createdAt: "2023-12-31T17:22:05.092+0000",
      },
      {
        _id: "12",
        user: {
          _id: "b",
          name: "Blessed Akhigbe",
        },
        desc: "keep it up bro <3",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-12-31T17:22:05.092+0000",
      },
      {
        _id: "13",
        user: {
          _id: "c",
          name: "Festus Oladipupo",
        },
        desc: "I'm always interested in your content :)",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-12-31T17:22:05.092+0000",
      },
    ];
  };