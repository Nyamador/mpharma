// import productReducer, {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./productSlice";

// describe("product reducer", () => {
//   const initialState = {
//     value: 3,
//     status: "idle",
//   };
//   it("should handle initial state", () => {
//     expect(productReducer(undefined, { type: "unknown" })).toEqual({
//       value: 0,
//       status: "idle",
//     });
//   });

//   it("should handle increment", () => {
//     const actual = productReducer(initialState, increment());
//     expect(actual.value).toEqual(4);
//   });

//   it("should handle decrement", () => {
//     const actual = productReducer(initialState, decrement());
//     expect(actual.value).toEqual(2);
//   });

//   it("should handle incrementByAmount", () => {
//     const actual = productReducer(initialState, incrementByAmount(2));
//     expect(actual.value).toEqual(5);
//   });
// });
