import {cleanup, render} from '@testing-library/react';
import CommitsListPage from 'src/pages/CommitsListPage/CommitsListPage';
import '@testing-library/jest-dom/extend-expect'
import fetch from 'jest-fetch-mock';

const mockData = [{
    'sha': 'd74559746c03d9f620e4fd338c70ce319070e0be',
    'commit': {
        'author': {
            'name': 'Ricky',
            'email': 'rickhanlonii@gmail.com',
            'date': '2021-03-07T23:43:29Z'
        },
        'message': 'Use update lane priority to set pending updates on roots (#20918)',
    },
    'author': {
        'avatar_url': 'https://avatars.githubusercontent.com/u/2440089?v=4',
    },
}];

beforeEach(() => {
    fetch.resetMocks();
});

afterEach(cleanup);

test('it should render component correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const rendered = render(<CommitsListPage/>);

    await rendered.findByText('Ricky');

    expect(rendered).toMatchSnapshot();
})
