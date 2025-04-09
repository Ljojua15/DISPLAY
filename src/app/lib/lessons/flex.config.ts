export const FLEX_CONFIG = {
  1: {
    texts: [
      {
        text: "ეს არის თამაში, სადაც უნდა დაეხმარო ხინკალებს CSS კოდის წერით! ამ ტურში შენი ამოცანაა, გადადო ხინკალი ლანგარზე მარჯვნივ, <strong>justify-content</strong> თვისების გამოყენებით."
      },
      {
        text: "<strong>justify-content</strong> ადგენს, როგორ განლაგდებიან ელემენტები ჰორიზონტალურად კონტეინერში. მას აქვს შემდეგი მნიშვნელობები:"
      },
      {
        text: "<b>flex-start</b> – ხინკლები მიიწევენ მარცხენა მხარეს"
      },
      {
        text: "<b>flex-end</b> – ხინკლები მიიწევენ მარჯვენა მხარეს"
      },
      {
        text: "<b>center</b> – ხინკლები იკრიბებიან კონტეინერის შუაში"
      },
      {
        text: "<b>space-between</b> – ხინკლები ერთნაირად ნაწილდებიან, ზუსტად ერთი და იგივე დაშორებით"
      },
      {
        text: "<b>space-around</b> – ხინკლებს შორის თანაბარი მანძილია, მაგრამ გარედანაც აქვთ სიცარიელე"
      }
    ],
    answers: [
      {
        justifyContent: "flex-end;",
      },
    ],
    heights: [
      {
        height: '48px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      }
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },
    ],
    targetDivsStyle: [
      {
        justifyContent: "flex-end",
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
        text: "გამოყენე <strong>justify-content</strong> კიდევ ერთხელ, რათა ხინკლები მიიყვანო მათ ლანგრებზე. გაიხსენე, რომ ეს CSS თვისება ასწორებს ელემენტებს ჰორიზონტალურად და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "<b>flex-start</b> – ხინკლები მიიწევენ მარცხენა მხარეს"
      },
      {
        text: "<b>flex-end</b> – ხინკლები მიიწევენ მარჯვენა მხარეს"
      },
      {
        text: "<b>center</b> – ხინკლები იკრიბებიან კონტეინერის შუაში"
      },
      {
        text: "<b>space-between</b> – ხინკლები ერთნაირად ნაწილდებიან, ზუსტად ერთი და იგივე დაშორებით"
      },
      {
        text: "<b>space-around</b> – ხინკლებს შორის თანაბარი მანძილია, მაგრამ გარედანაც აქვთ სიცარიელე"
      }
    ],
    answers: [
      {
        justifyContent: "center;",
      },
    ],
    heights: [
      {
        height: '30px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ff0000",
      },
    ],
    targetDivsStyle: [
      {
        justifyContent: "center",
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
        text: "დაეხმარე სამივე ხინკალს, რომ მიაღწიონ თავიანთ ლანგრებს მხოლოდ <strong>justify-content</strong> თვისების გამოყენებით. ამჯერად, ლანგრები განლაგებულია დიდი დაშორებით – გარშემო ბევრი სივრცეა."
      },
      // {
      //   text: "თუ რომელიმე თვისების მნიშვნელობები დაგავიწყდა, შეგიძლია დააწკაპო სახელზე და ნახო ისინი. სცადე დაკლიკება <strong>justify-content</strong>-ზე."
      // }
    ],
    answers: [
      {
        justifyContent: "space-around;",
      },
    ],
    heights: [
      {
        height: '60px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
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
  4: {
    texts: [
      {
        text: "ამჯერად, ლანგრები მარჯვენა და მარცხენა კიდეებზე გაფართოვდნენ და ბოლოებში არიან, რაც გამოიწვია მათ შორის დიდი სივრცის გაჩენით. გამოიყენე <strong>justify-content</strong> თვისება, რათა იპოვო სწორი განლაგება."
      },
      {
        text: "ამჯერად, ლანგრებს შორის თანაბარი მანძილია."
      }
    ],
    answers: [
      {
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
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
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
        text: "ახლა გამოიყენე <strong>align-items</strong>, რათა დაეხმარო ხინკლებს ქვევით ჩასვლაში. ეს CSS თვისება ასწორებს ელემენტებს ვერტიკალურად და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "<b>flex-start</b> – ელემენტები განლაგდება კონტეინერის ზედა ნაწილში"
      },
      {
        text: "<b>flex-end</b> – ელემენტები განლაგდება კონტეინერის ქვედა ნაწილში"
      },
      {
        text: "<b>center</b> – ელემენტები განლაგდება კონტეინერის ვერტიკალურ ცენტრში"
      },
      {
        text: "<b>baseline</b> – ელემენტები განლაგდება კონტეინერის ბასეიდან"
      },
      {
        text: "<b>stretch</b> – ელემენტები იზომება კონტეინერის ზომებზე"
      }
    ],
    answers: [
      {
        alignItems: "flex-end;",
      },
    ],
    heights: [
      {
        height: '70px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        alignItems: "flex-end",
        justifyContent: "flex-start",
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
          text: "გამოიყენე <strong>justify-content</strong> და <strong>align-items</strong> კომბინაციაში, რათა მოიყვანო ხინკალი კონტეინერის ცენტრში."
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
        backgroundColor: "./assets/images/pinki.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ff0000",
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
        text: "ხინკლებს ისევ სჭირდებათ მაგიდის გადაკვეთა, ამჯერად ლანგრებზე, რომელთა გარშემოც ბევრი სივრცეა. გამოიყენე <strong>justify-content</strong> და <strong>align-items</strong> კომბინაცია."
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
        height: '50px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
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
  8: {
    texts: [
      {
        text: "ხინკლებს სჭირდებათ მათი ლანგრებთან შესაბამისი რიგის აღება, გამოიყენეთ <strong>flex-direction</strong>. ეს CSS თვისება განსაზღვრავს, თუ როგორ განლაგდებიან ელემენტები კონტეინერში, და აქვს შემდეგი მნიშვნელობები:"
      },
      {
        text: "<b>row</b> – ელემენტები განლაგდებიან ტექსტის მიმართულებით"
      },
      {
        text: "<b>row-reverse</b> – ელემენტები განლაგდებიან ტექსტის საწინააღმდეგო მიმართულებით"
      },
      {
        text: "<b>column</b> – ელემენტები განლაგდებიან ზედა მხრიდან ქვემოთ"
      },
      {
        text: "<b>column-reverse</b> – ელემენტები განლაგდებიან ქვედა მხრიდან ზემოთ"
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse;",
      },
    ],
    heights: [
      {
        height: '60px'
      }
    ],
    movingDivs: [

      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ffe2e7",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row",
        justifyContent: "flex-end",
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
        text: "ხინკლებს დაეხმარე, რომ მოძებნონ მათი ლანგრები კონტეინერში <strong>flex-direction</strong>-ის გამოყენებით. ეს CSS თვისება განსაზღვრავს, როგორ განლაგდებიან ელემენტები კონტეინერში, და იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "<b>row</b>: ელემენტები განლაგებულია ტექსტის მიმართულების მიხედვით."
      },
      {
        text: "<b>row-reverse</b>: ელემენტები განლაგებულია ტექსტის საპირისპირო მიმართულებით."
      },
      {
        text: "<b>column</b>: ელემენტები განლაგებულია ზემოდან ქვემოთ."
      },
      {
        text: "<b>column-reverse</b>: ელემენტები განლაგებულია ქვემოდან ზემოთ."
      }
    ],
    answers: [
      {
        flexDirection: "column",
      },
    ],
    heights: [
      {
        height: '60px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        justifyContent: "flex-start",
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
  10: {
    texts: [
      {
        text: "დაეხმარე ხინკლებს თავიანთ ლანგრებთან მისვლაში. მიუხედავად იმისა, რომ ისინი ახლოს ჩანან, საჭიროა როგორც <strong>flex-direction</strong>, ისე <strong>justify-content</strong> მათი სწორად განლაგებისთვის."
      },
      {
        text: "გაითვალისწინე, რომ როცა მიმართულებას შეაბრუნებ <b>row-reverse</b> ან <b>column-reverse</b> მნიშვნელობებით, <b>start</b> და <b>end</b> პოზიციებიც იცვლება."
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
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
        text: "დაეხმარე ხინკლებს თავიანთ ლანგრებთან მისვლაში <strong>flex-direction</strong>-ისა და <strong>justify-content</strong>-ის გამოყენებით."
      },
      {
        text: "გაითვალისწინე, რომ როცა <b>flex-direction</b> სვეტად (column) არის დაყენებული, <b>justify-content</b> ვერტიკალურად მოქმედებს, ხოლო <b>align-items</b> – ჰორიზონტალურად."
      }
    ],
    answers: [
      {
        flexDirection: "column",
        justifyContent: "flex-end",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "column",
        justifyContent: "flex-end",
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
        text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong> და <strong>justify-content</strong> თვისებების გამოყენებით."
      }
    ],
    answers: [
      {
        flexDirection: "column;",
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
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "column",
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
  13: {
    texts: [
      {
        text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
      }
    ],
    answers: [
      {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "flex-end",
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#00ff00",
      },
    ],
    targetDivsStyle: [
      {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "flex-end",
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
  14: {
    texts: [
      {
        text: "ოჰ, არა! ყველა ხინკალი ერთ მწკრივ ლანგრებზე არის ჩაყუჟული. გაანაწილე ისინი <strong>flex-wrap</strong> თვისების გამოყენებით."
      },
      {
        text: "<code>flex-wrap</code> იღებს შემდეგ მნიშვნელობებს:"
      },
      {
        text: "<strong>nowrap</strong>: ყველა ელემენტი თავსდება ერთ ხაზზე."
      },
      {
        text: "<strong>wrap</strong>: ელემენტები იტენება რამდენიმე ხაზზე საჭიროების მიხედვით."
      },
      {
        text: "<strong>wrap-reverse</strong>: ელემენტები იტენება რამდენიმე ხაზზე უკუღმა მიმართულებით."
      }
    ],
    answers: [
      {
        flexWrap:'wrap',
        justifyContent:'center',
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },


    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },

    ],
    targetDivsStyle: [
      {
        flexWrap:'wrap'
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
  15: {
    texts: [
      {
        text: "დაეხმარე ხინკლების არმიას სამ მოწესრიგებულ სვეტად ჩამწკრივებაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>flex-wrap</strong> თვისებების კომბინაციის გამოყენებით."
      }
    ],
    answers: [
      {
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: 'wrap',
      },
    ],
    heights: [
      {
        height: '90px'
      }
    ],
    movingDivs: [
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },
      {
        backgroundColor: "./assets/images/origin.svg",
      },

      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/pinki.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },
      {
        backgroundColor: "./assets/images/green.svg",
      },

    ],
    targetDivs: [
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#ffe2e7",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },
      {
        backgroundColor: "#00ff00",
      },

      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },
      {
        backgroundColor: "#ff0000",
      },

    ],
    targetDivsStyle: [
      {
        flexDirection: "column",
        flexWrap: 'wrap',
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
  // 16: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 17: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 18: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 19: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 20: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 21: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 22: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 23: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
  // 24: {
  //   texts: [
  //     {
  //       text: "დაეხმარეთ ხინკლებს თავიანთ ლანგრებზე მოხვედრაში <strong>flex-direction</strong>, <strong>justify-content</strong> და <strong>align-items</strong> თვისებების გამოყენებით."
  //     }
  //   ],
  //   answers: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   heights: [
  //     {
  //       height: '90px'
  //     }
  //   ],
  //   movingDivs: [
  //     {
  //       backgroundColor: "./assets/images/origin.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/pinki.svg",
  //     },
  //     {
  //       backgroundColor: "./assets/images/green.svg",
  //     },
  //   ],
  //   targetDivs: [
  //     {
  //       backgroundColor: "#ffe2e7",
  //     },
  //
  //     {
  //       backgroundColor: "#ff0000",
  //     },
  //     {
  //       backgroundColor: "#00ff00",
  //     },
  //   ],
  //   targetDivsStyle: [
  //     {
  //       flexDirection: "row-reverse",
  //       justifyContent: "center",
  //       alignItems: "flex-end",
  //     },
  //   ],
  //   codePlace: [
  //     {
  //       id: 1,
  //       text: "#khinkali {",
  //     },
  //     {
  //       id: 2,
  //       text: "display: flex;",
  //     },
  //     {
  //       id: 3,
  //       text: "area",
  //     },
  //     {
  //       id: 4,
  //       text: "",
  //     },
  //     {
  //       id: 5,
  //       text: "",
  //     },
  //     {
  //       id: 6,
  //       text: "}",
  //     },
  //     {
  //       id: 7,
  //       text: "",
  //     },
  //     {
  //       id: 8,
  //       text: "",
  //     },
  //     {
  //       id: 9,
  //       text: "",
  //     },
  //     {
  //       id: 10,
  //       text: "",
  //     }
  //   ]
  // },
};
