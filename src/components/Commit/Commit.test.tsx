import Commit from 'src/components/Commit/Commit';
import {render, fireEvent} from '@testing-library/react';

const mockData = {
    sha: '1234',
    commit: {
        author: {
            name: 'name',
            email: 'email@gmail.com',
            date: '2021-03-07T23:43:29Z'
        }
    },
    author: {
        avatar_url: 'https://avatars.githubusercontent.com/u/2440089?v=4'
    }
};

test('it should render component correctly', async () => {
    const rendered = render(<Commit info={mockData} onClick={jest.fn}/>);

    expect(rendered).toMatchSnapshot();
})

test('it should call onClick function', async () => {
    const mockJestFn = jest.fn();
    const rendered = render(<Commit info={mockData} onClick={mockJestFn}/>);

    const {getByTestId} = rendered;

    const commitElement = getByTestId('commit-element');

    fireEvent.click(commitElement)

    expect(mockJestFn).toHaveBeenCalled();
})
