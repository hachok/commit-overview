import {render} from '@testing-library/react';
import CommitFile from 'src/components/CommitFile/CommitFile';

const mockData = {
    sha: '1234',
    filename: "test.js",
    patch: 'test'
};

test('it should render component correctly', async () => {
    const rendered = render(<CommitFile info={mockData} />);

    expect(rendered).toMatchSnapshot();
})
