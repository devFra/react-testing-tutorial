import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import Counter from './components/counter.component';
import axios from 'axios'
import Todos from './components/todos.component';
import { ExternalModule } from 'webpack';

test('Image is present', () => {
  render(<App />);
  const reactImage = screen.getByTestId("reactImage");
  expect(reactImage).toBeInTheDocument();
});

test('Increments counter', () => {
  render(<Counter />);
  const counter = screen.getByTestId("counter");
  const incrementsBtn = screen.getByTestId("increment");

  fireEvent.click(incrementsBtn);

  expect(counter).toHaveTextContent("1");
});

jest.mock('axios')

const dummyTodos = [
  {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
  },
];
  
test("todos list", async () => {
  axios.get.mockResolvedValue({ data: dummyTodos });
  render (<Todos />);
  const todoList = await waitFor( () => screen.findAllByTestId("todo"));

  expect(todoList).toHaveLength(3);
});