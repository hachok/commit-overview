import {render} from '@testing-library/react';
import Header from 'src/components/Header/Header';

test('it should render component correctly', async () => {
    const rendered = render(<Header />);

    expect(rendered).toMatchSnapshot();
})
