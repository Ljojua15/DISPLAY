export const FLEX_CONFIG = {
  1: {
    texts: [
      {
        text: "მოგესალმებით ხინალი ფლექსბოქსში, თამაშში, სადაც ხინკლებს და მათ მეგობრებს CSS კოდის დაწერით ეხმარებით! გადაადგილეთ ეს ხინკალი მარჯვენა მხარეს მდებარე ლილიპადზე `justify-content` თვისების გამოყენებით, რომელიც აწყობს ელემენტებს ჰორიზონტალურად და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "flex-start: ელემენტები განლაგებულია კონტეინერის მარცხენა მხარეს."
      },
      {
        text: "flex-end: ელემენტები განლაგებულია კონტეინერის მარჯვენა მხარეს."
      },
      {
        text: "center: ელემენტები განლაგებულია კონტეინერის ცენტრში."
      },
      {
        text: "space-between: ელემენტები განლაგებულია ერთმანეთისგან თანაბარი დაშორებით."
      },
      {
        text: "space-around: ელემენტები განლაგებულია ერთმანეთის გარშემო თანაბარი დაშორებით."
      },
      {
        text: "მაგალითად, `justify-content: flex-end;` გადაადგილებს ხინკალს მარჯვენა მხარეს."
      }
    ],
    answers: [
      {
        alignItems: "center;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '48px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "blue",
      },
      {
        backgroundColor: "blue",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "pink",
      },
      {
        backgroundColor: "black",
      },
      {
        backgroundColor: "green",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "center",
        justifyContent: "space-between",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },
  2: {
    texts: [
      {
        text: "გამოიყენეთ `justify-content` კიდევ ერთხელ, რათა დაეხმაროთ ამ ხინკლებს, მიაღწიონ თავიანთ ლილიპადებს. გახსოვდეთ, რომ ეს CSS თვისება აწყობს ელემენტებს ჰორიზონტალურად და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "flex-start: ელემენტები განლაგებულია კონტეინერის მარცხენა მხარეს."
      },
      {
        text: "flex-end: ელემენტები განლაგებულია კონტეინერის მარჯვენა მხარეს."
      },
      {
        text: "center: ელემენტები განლაგებულია კონტეინერის ცენტრში."
      },
      {
        text: "space-between: ელემენტები განლაგებულია ერთმანეთისგან თანაბარი დაშორებით."
      },
      {
        text: "space-around: ელემენტები განლაგებულია ერთმანეთის გარშემო თანაბარი დაშორებით."
      }
    ],
    answers: [
      {
        alignItems: "center;",
        justifyContent: "space-around;",
      },
    ],
    heights: [
      {
        height: '30px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "yellow",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "yellow",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "center",
        justifyContent: "space-around",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  3: {
    texts: [
      {
        text: "დაეხმარეთ სამივე ხინკალს, რომ მიაღწიონ თავიანთ ლილიპადებს, მხოლოდ `justify-content` თვისების გამოყენებით. ამჯერად, ლილიპადებს გარშემო საკმაოდ ბევრი სივრცე აქვთ."
      },
      {
        text: "თუ დაგავიწყდათ, რომელი მნიშვნელობები აქვს ამ თვისებას, შეგიძლიათ დააწკაპუნოთ სახელზე, რათა ნახოთ ისინი. სცადეთ `justify-content`-ზე დაჭერა."
      }
    ],
    answers: [
      {
        alignItems: "flex-start;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '60px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "red",
      },
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "red",
      },
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "flex-start",
        justifyContent: "space-between",
      },
    ]
    ,
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  4: {
    texts: [
      {
        text: "ახლა ლილიპადები კიდეებზე ნაპირზე აღმოჩნდნენ, რის შედეგადაც მათ შორის სივრცე გაიზარდა. გამოიყენეთ `justify-content`. ამჯერად, ლილიპადებს შორის თანაბარი სივრცეა."
      }
    ],
    answers: [
      {
        alignItems: "stretch;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '40px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "pink",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "pink",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "stretch",
        justifyContent: "space-between",
      },
    ]
    ,
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  5: {
    texts: [
      {
        text: "გამოიყენეთ `align-items`, რათა დაეხმაროთ ხინკლებს, რომ პონდის ფსკერზე ჩავიდნენ. ეს CSS თვისება აწყობს ელემენტებს ვერტიკალურად და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "flex-start: ელემენტები განლაგებულია კონტეინერის ზედა მხარეს."
      },
      {
        text: "flex-end: ელემენტები განლაგებულია კონტეინერის ქვედა მხარეს."
      },
      {
        text: "center: ელემენტები განლაგებულია კონტეინერის ვერტიკალურ ცენტრში."
      },
      {
        text: "baseline: ელემენტები განლაგებულია მათი ტექსტის საბაზისო ხაზის მიხედვით."
      },
      {
        text: "stretch: ელემენტები გაწელილია, რომ მოერგოს კონტეინერს."
      }
    ],
    answers: [
      {
        alignItems: "flex-end;",
        justifyContent: "space-around;",
      },
    ],
    heights: [
      {
        height: '70px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "black",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "black",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "flex-end",
        justifyContent: "space-around",
      },
    ]
    ,
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  6: {
    texts: [
      {
        text: "გადაიყვანეთ ხინკალი პონდის ცენტრში `justify-content` და `align-items` თვისებების კომბინაციის გამოყენებით."
      }
    ],
    answers: [
      {
        alignItems: "center;",
        justifyContent: "center;",
      },
    ],
    heights: [
      {
        height: '80px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "white",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "white",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "center",
        justifyContent: "center",
      },
    ]
    ,
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  7: {
    texts: [
      {
        text: "ხინკლებს ისევ პონდის გადაკვეთა სჭირდებათ, ამჯერად ლილიპადების ირგვლივ საკმარისი სივრცით. გამოიყენეთ `justify-content` და `align-items` ერთად."
      }
    ],
    answers: [
      {
        alignItems: "center;",
        justifyContent: "space-around;",
      },
    ],
    heights: [
      {
        height: '50px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "red",
      },
      {
        backgroundColor: "yellow",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "red",
      },
      {
        backgroundColor: "yellow",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "center",
        justifyContent: "space-around",
      },
    ]
    ,
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  8: {
    texts: [
      {
        text: "ხინკლებს სჭირდებათ იმავე რიგში განლაგება, როგორც მათი ლილიპადებია. გამოიყენეთ `flex-direction`. ეს თვისება განსაზღვრავს ელემენტების განლაგების მიმართულებას და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "row: ელემენტები განლაგებულია ტექსტის მიმართულების მიხედვით."
      },
      {
        text: "row-reverse: ელემენტები განლაგებულია ტექსტის საპირისპირო მიმართულებით."
      },
      {
        text: "column: ელემენტები განლაგებულია ზემოდან ქვემოთ."
      },
      {
        text: "column-reverse: ელემენტები განლაგებულია ქვემოდან ზემოთ."
      }
    ],
    answers: [
      {
        flexDirection: "row;",
      },
    ],
    heights: [
      {
        height: '60px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "green",
      },
      {
        backgroundColor: "blue",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  9: {
    texts: [
      {
        text: "დაეხმარეთ ხინკლებს თავიანთი ლილიპადების სვეტებში მოხვედრაში `flex-direction`-ის გამოყენებით."
      }
    ],
    answers: [
      {
        flexDirection: "column;",
        justifyContent: "center"
      },
    ],
    heights: [
      {
        height: '80px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "yellow",
      },
      {
        backgroundColor: "purple",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "yellow",
      },
      {
        backgroundColor: "purple",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "column",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  11: {
    texts: [
      {
        text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში. მიუხედავად იმისა, რომ ისინი ახლოს არიან, დასჭირდებათ `flex-direction` და `justify-content` ერთად."
      },
      {
        text: "გაითვალისწინეთ, რომ თუ მიმართულებას შეცვლით `row-reverse` ან `column-reverse`-ზე, საწყისი და ბოლო პოზიციებიც შეიცვლება."
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },
  10: {
    texts: [
      {
        text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში. მიუხედავად იმისა, რომ ისინი ახლოს არიან, დასჭირდებათ `flex-direction` და `justify-content` ერთად."
      },
      {
        text: "გაითვალისწინეთ, რომ თუ მიმართულებას შეცვლით `row-reverse` ან `column-reverse`-ზე, საწყისი და ბოლო პოზიციებიც შეიცვლება."
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },
  12: {
    texts: [
      {
        text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში. მიუხედავად იმისა, რომ ისინი ახლოს არიან, დასჭირდებათ `flex-direction` და `justify-content` ერთად."
      },
      {
        text: "გაითვალისწინეთ, რომ თუ მიმართულებას შეცვლით `row-reverse` ან `column-reverse`-ზე, საწყისი და ბოლო პოზიციებიც შეიცვლება."
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse;",
        justifyContent: "space-between;",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "orange",
      },
      {
        backgroundColor: "red",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      },
    ],
    codePlace: [
      {
        id: 1,
        text: "#khinkali {",
      },
      {
        id: 2,
        text: "display: flex;",
      },
      {
        id: 3,
        text: "area",
      },
      {
        id: 4,
        text: "",
      },
      {
        id: 5,
        text: "",
      },
      {
        id: 6,
        text: "}",
      },
      {
        id: 7,
        text: "",
      },
      {
        id: 8,
        text: "",
      },
      {
        id: 9,
        text: "",
      },
      {
        id: 10,
        text: "",
      }
    ]
  },

  // 11: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში `flex-direction` და `justify-content`-ის გამოყენებით."
  //     },
  //     {
  //       text: "როდესაც `flex-direction` სვეტია, `justify-content` ვერტიკალურ განლაგებას მართავს, ხოლო `align-items` - ჰორიზონტალურს."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "column"
  //     }
  //   ]
  // },
  // 12: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში `flex-direction` და `justify-content`-ის გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "column-reverse"
  //     }
  //   ]
  // },
  // 13: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლილიპადებზე მოხვედრაში `flex-direction`, `justify-content` და `align-items`-ის გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "center"
  //     }
  //   ]
  // },
  // 14: {
  //   texts: [
  //     {
  //       text: "ზოგჯერ კონტეინერის რიგისა თუ სვეტის მიმართულების შეცვლა საკმარისი არ არის. ასეთ შემთხვევებში, შეგვიძლია გამოვიყენოთ `order` თვისება ინდივიდუალური ელემენტებისთვის."
  //     },
  //     {
  //       text: "ნაგულისხმევად, ელემენტებს აქვთ მნიშვნელობა `0`, მაგრამ შეგვიძლია დავუწესოთ დადებითი ან უარყოფითი რიცხვები (-2, -1, 0, 1, 2)."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "order"
  //     }
  //   ]
  // },
  // 15: {
  //   texts: [
  //     {
  //       text: "გამოიყენეთ `order` თვისება, რათა წითელი ხინკალი თავის ლილიპადზე გადაადგილდეს."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "order"
  //     }
  //   ]
  // },
  // 16: {
  //   texts: [
  //     {
  //       text: "კიდევ ერთი თვისება, რომელსაც ინდივიდუალურ ელემენტებზე ვიყენებთ, არის `align-self`. ის იღებს იგივე მნიშვნელობებს, რაც `align-items`, მაგრამ მოქმედებს კონკრეტულ ელემენტზე."
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "align-self"
  //     }
  //   ]
  // },
  // 24: {
  //   texts: [
  //     {
  //       text: "დაბრუნეთ ხინკლები თავიანთ ლილიპადებზე, გამოყენებით იმ თვისებების, რომლებსაც აქამდე სწავლობდით:"
  //     },
  //     {
  //       text: "`justify-content`, `align-items`, `flex-direction`, `order`, `align-self`, `flex-wrap`, `flex-flow`, `align-content`"
  //     }
  //   ],
  //   answers: [
  //     {
  //       answer: "all"
  //     }
  //   ]
  // }
};
