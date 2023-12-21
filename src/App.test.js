import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// 카운터의 초기 값이 0인지 테스트하는 코드
test("the counter starts at 0", () => {
  render(<App />);

  // 'counter'라는 test ID를 가진 요소를 찾음
  const counterElement = screen.getByTestId("counter");

  // 해당 요소의 텍스트 내용이 0인지 확인
  expect(counterElement).toHaveTextContent(0);
});


// 마이너스 버튼의 텍스트가 "-"인지 테스트하는 코드
test("minus button has correct text", () => {
  render(<App />);
  // 'minus-button'이라는 test ID를 가진 요소를 찾음
  const buttonElement = screen.getByTestId("minus-button");

  // 해당 버튼의 텍스트 내용이 "-"인지 확인
  expect(buttonElement).toHaveTextContent("-");
});


// 플러스 버튼의 텍스트가 "+"인지 테스트하는 코드
test("plus button has correct text", () => {
  render(<App />);
  // 'plus-button'이라는 test ID를 가진 요소를 찾음
  const buttonElement = screen.getByTestId("plus-button");

  // 해당 버튼의 텍스트 내용이 "+"인지 확인
  expect(buttonElement).toHaveTextContent("+");
});


// 플러스 버튼을 클릭했을 때 카운터가 1로 변경되는지 테스트하는 코드
test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);

  // 'plus-button'이라는 test ID를 가진 요소를 찾음
  const buttonElement = screen.getByTestId("plus-button");

  // 찾은 버튼에 클릭 이벤트를 발생시킴
  fireEvent.click(buttonElement);

  // 'counter'라는 test ID를 가진 요소를 다시 찾음
  const counterElement = screen.getByTestId("counter");

  // 해당 요소의 텍스트 내용이 1인지 확인
  expect(counterElement).toHaveTextContent(1);
});


// 플러스 버튼을 클릭했을 때 카운터가 -1로 변경되는지 테스트하는 코드
test("When the - button is pressed, the counter changes to 1", () => {
  render(<App />);

  // 'plus-button'이라는 test ID를 가진 요소를 찾음
  const buttonElement = screen.getByTestId("minus-button");

  // 찾은 버튼에 클릭 이벤트를 발생시킴
  fireEvent.click(buttonElement);

  // 'counter'라는 test ID를 가진 요소를 다시 찾음
  const counterElement = screen.getByTestId("counter");
  
  // 해당 요소의 텍스트 내용이 1인지 확인
  expect(counterElement).toHaveTextContent(-1);
});
